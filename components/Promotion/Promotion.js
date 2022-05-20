import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ButtonBase from '@material-ui/core/ButtonBase';
import NextIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Slider from 'react-animated-slider';
import useStyles from './promotion-style';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';

const sliderData = [
  {
    image: imgAPI.crypto[0],
    title: 'EXTRA LIFE NFT',
    desc: 'Dapp that supports the value of an NFT with a life insurance .',

  },
  {
    image: imgAPI.crypto[1],
    title: 'TIME  Token',
    desc: 'TIME is a stable coin that keeps value one on one to the premiums paid and the performance of the assets being managed',
    date: '12 Jul - 10 Aug'
  },

];

function Promotion() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.sliderWrap}>
        <Slider
          className="slider-wrapper"
          previousButton={(
            <NextIcon />
          )}
          nextButton={(
            <NextIcon />
          )}
        >
          {sliderData.map((item, index) => (
            <div className={clsx(classes.item, index % 2 === 1 ? classes.odd : classes.even)} key={index.toString()}>
              <Grid container>
                <Grid item xs={12} lg={4}>
                  &nbsp;
                </Grid>
                <Grid item xs={12} lg={7}>
                  <Hidden mdDown>
                    <section>
                      <div className={classes.imgWrap}>
                        <div className={classes.decoration}>
                          <svg>
                            <use xlinkHref="/images/crypto/deco-promo.svg#main" />
                          </svg>
                        </div>
                        <figure className={classes.image}>
                          <img src={item.image} alt={item.title} />
                        </figure>
                      </div>
                    </section>
                  </Hidden>
                  <Paper className={classes.paper}>
                    <Typography variant="h1">
                      <ButtonBase>
                        {item.title}
                      </ButtonBase>
                    </Typography>
                    <Typography component="p">
                      {item.desc}
                    </Typography>

                  </Paper>
                </Grid>
              </Grid>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default withTranslation(['crypto-landing'])(Promotion);
