import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import routeLink from '~/public/text/link';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './counter-style';

function Counter(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  const [setPlay] = useState(false);

  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };

  return (
    <div className={classes.counterWrap}>
      <Container maxWidth="md">
        <ScrollAnimation
          animateOnce
          animateIn="fadeIn"
          offset={10}
          afterAnimatedIn={handlePlay}
        >
          <Typography variant="h3" className={text.title}>
            {countup()}
            &nbsp;
            {countup()}
            &nbsp;
            {countup()}
          </Typography>
          <Typography component="p" className={text.subtitle}>
            {t('common:crypto-landing.footer_counter')}
          </Typography>
        </ScrollAnimation>
        <div className={classes.callAction}>
          <Typography variant="h4" gutterBottom className={text.subtitle}>
            {t('common:crypto-landing.footer_waiting')}
          </Typography>
          <Button variant="contained" href={routeLink.crypto.register} color="secondary" size="large" className={classes.button}>
            {t('common:crypto-landing.getstarted')}
          </Button>
        </div>
      </Container>
    </div>
  );
}

Counter.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['crypto-landing'])(Counter);
