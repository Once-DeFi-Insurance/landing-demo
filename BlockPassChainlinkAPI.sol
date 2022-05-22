// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import '@chainlink/contracts/src/v0.8/ChainlinkClient.sol';
import '@chainlink/contracts/src/v0.8/ConfirmedOwner.sol';

/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/docs/link-token-contracts/
 */

contract APIConsumer is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    string public status;
    bytes32 private jobId;
    uint256 private fee;

    /**
     * @notice Initialize the link token and target oracle
     *
     * Mumbai Testnet details:
     * Link Token: 0x326C977E6efc84E512bB9C30f76E30c160eD06FB
     * Oracle: 0xA6559758f5A599996693e766B845A9109B1389F1 (Blockpass Oracle Smart Contract on Chainlink)
     * jobId: <Yet unknown and has to be provided by Blockpass>
     *
     */
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0xA6559758f5A599996693e766B845A9109B1389F1);
        jobId = '';
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0,1 * 10**18 (Varies by network and job)
    }

    /**
     * Create a Chainlink request to retrieve API response, find the target data.
     */
    function requestKYCData(uint _ID) public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);

        // Set the URL to perform the GET request on
        req.add('get', 'THIS_WILL_BE_THE_URL_STRING_TO_BLOCKPASS_KYC_SERVICE');
        // Set the path to find the desired data in the API response, where the response format is:
        // {'status': 'success', 
        //  'data': 
        //        {'records': 
        //              [{'status': 'approved', 
        //              'recordId': '628a2005a192fc20b4faddae', 
        //               'submitCount': 1, 
        //               'blockPassID': '628a1f430ab4b3001115e57d', 
        //               'isArchived': False, 
        //               'inreviewDate': '2022-05-22T13:14:34.878Z', 
        //               'waitingDate': '2022-05-22T11:35:36.794Z', 
        //               'approvedDate': '2022-05-22T13:14:59.561Z'}], 
        //          'total': 1, 
        //          'skip': 0, 
        //          'limit': 5
        //          }
        // }
        // For this example we would need to provide _ID = 0 to get the status data, since there is currently
        // only one registered user
        req.add('path', 'data,records,_ID,status'); 

        // Sends the request
        return sendChainlinkRequest(req, fee);
    }

    /**
     * Receive the response in the form of uint256
     */
    function fulfill(bytes32 _requestId, string _status) public recordChainlinkFulfillment(_requestId) {
        status = _status;
    }

    /**
     * Allow withdraw of Link tokens from the contract
     */
    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(link.transfer(msg.sender, link.balanceOf(address(this))), 'Unable to transfer');
    }
}
