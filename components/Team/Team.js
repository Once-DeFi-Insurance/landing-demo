import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';
import ProfileCard from '../Cards/Profile';
import Title from '../Title';
import useStyles from './team-style';
import { useText } from '~/theme/common';


const team = [
  {
    photo: imgAPI.profile[0],
    name: 'Efrain Cuello',
    title: 'Developer Lead'
  },
  {
    photo: imgAPI.profile[1],
    name: 'Jeanine Osborne',
    title: 'Product Management'
  },
  {
    photo: imgAPI.profile[2],
    name: 'Bruno do Santos',
    title: 'Full Stack Developer'
  },
  {
    photo: imgAPI.profile[3],
    name: 'Alberto Alfaro',
    title: 'Product Knowledge Lead'
  },
  {
    photo: imgAPI.profile[4],
    name: 'Igor Kunjavskij',
    title: 'Full stack Developer'
  },
  
  
];

function Featured(props) {
  const classes = useStyles();
  const { t } = props;
  const text = useText();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div className={classes.root}>
      <div className={classes.deco} />
      <Container fixed={isDesktop}>
        <ScrollAnimation
          animateOnce
          animateIn="fadeInUpShort"
          offset={-300}
          delay={200}
          duration={0.6}
        >
           <Title className={text.subtitle2} text={t('common:crypto-landing.team_title')} align="center" />

        <Typography display="block" align="center" className={text.subtitle2}>
                  {t('common:crypto-landing.team_desc')}
        </Typography>


        </ScrollAnimation>
        <div className={classes.teamWrap}>
          <Grid container spacing={isMobile ? 2 : 6}>
            {team.map((item, index) => (
              <Grid item md={4} xs={6} key={index.toString()}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInUpShort"
                  offset={-50}
                  delay={200 + (100 * index)}
                  duration={0.3}
                >
                  <div>
                    <ProfileCard
                      photo={item.photo}
                      name={item.name}
                      title={item.title}
                    />
                  </div>
                </ScrollAnimation>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

Featured.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['architect-landing'])(Featured);
