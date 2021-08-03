import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import {
  createStyles,
  alpha,
  Theme,
  makeStyles,
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import lightBlue from '@material-ui/core/colors/lightBlue';
import HomeCard from '@/components/landing/HomeCard';
import { usePosition } from 'use-position';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import itemData from '../database/database.json';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    minHeight: 320,
    padding: theme.spacing(4),
    position: 'relative',
  },
  gridItemOdd: {
    backgroundColor: lightBlue[100],
  },
  gridItemEven: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  highlightPaper: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    margin: theme.spacing(0, 'auto'),
    maxWidth: 80,
    padding: theme.spacing(1, 2),
  },
  imageList: {
    height: '100%',
    width: 360,
  },
  imageListBackground: {
    backgroundColor: theme.palette.common.black,
  },
  imageListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  logo: {
    left: '50%',
    position: 'absolute',
    top: theme.spacing(2),
    transform: 'translate(-50%, 0)',
    width: 219,
  },
  packageCardContentDivider: {
    margin: theme.spacing(0, 'auto', 2),
    maxWidth: 120,
  },
  packageGridContainer: {
    height: 420,
  },
  packageGridItem: {
    height: '100%',
  },
  root: {},
  section: {
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
  },

  sectionPrimaryBackground: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  sectionVerticalPadding: {
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(6),
  },
  toolbar: {
    color: theme.palette.common.white,
    justifyContent: 'flex-end',
  },
  toolbarLink: {
    color: theme.palette.common.white,
    justifyContent: 'flex-end',
  },
  topicHeader: {
    height: 50,
    paddingTop: theme.spacing(1),
    justifyContent: 'space-between',
    alignItems: 'bottom',
    width: '100%',
  },
  topicHeaderText: {
    paddingTop: theme.spacing(1),
    alignItems: 'bottom',
  },
  topicHeaderStart: {
    height: 50,
    paddingTop: theme.spacing(1),
    justifyContent: 'fixed-start',
    alignItems: 'bottom',
    width: '100%',
  },
}));

const home = () => {
  const classes = useStyles();

  const { latitude, longitude, error } = usePosition();
  const [isShowAllHit, setIsShowAllHit] = useState(false);
  const [isShowAllNear, setIsShowAllNear] = useState(false);
  const router = useRouter();

  const arePointNear = (checkPointlat, checkPointlng, km) => {
    var ky = 40000 / 360;
    var kx = Math.cos((Math.PI * latitude) / 180.0) * ky;
    var dx = Math.abs(longitude - checkPointlng) * kx;
    var dy = Math.abs(latitude - checkPointlat) * ky;
    return Math.sqrt(dx * dx + dy * dy) <= km;
  };

  const nearLists = itemData.filter(
    (itemData) =>
      arePointNear(
        itemData.start.lat,
        itemData.start.lng,
        itemData.start.radius,
      ) ||
      arePointNear(itemData.end.lat, itemData.end.lng, itemData.end.radius),
  );

  const hitLists = itemData.sort((itemData) => itemData.hit_rate);

  React.useEffect(() => {}, []);

  const showAllHit = () => {
    setIsShowAllHit(true);
    setIsShowAllNear(false);
  };

  const showAllNear = () => {
    setIsShowAllHit(false);
    setIsShowAllNear(true);
  };

  const backHome = () => {
    setIsShowAllHit(false);
    setIsShowAllNear(false);
  };

  return (
    <React.Fragment>
      {!isShowAllHit ? (
        <Container>
          {isShowAllNear ? (
            <Grid container className={classes.topicHeaderStart}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={backHome}
              >
                <ArrowBackIosIcon />
              </IconButton>
              <Typography
                className={classes.topicHeaderText}
                variant="h6"
                component="h2"
              >
                附近
              </Typography>
            </Grid>
          ) : (
            <Grid container className={classes.topicHeader}>
              <Typography
                className={classes.topicHeaderText}
                variant="h6"
                component="h2"
              >
                附近
              </Typography>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={showAllNear}
              >
                <NavigateNextOutlinedIcon />
              </IconButton>
            </Grid>
          )}
        </Container>
      ) : (
        ''
      )}
      {!isShowAllHit ? (
        <Container disableGutters className={classes.imageListContainer}>
          {nearLists.length == 0 ? '正在搜尋附近地點...' : ''}
          {nearLists.map((item, index) =>
            index <= 0 || isShowAllNear ? (
              <HomeCard
                key={item.post_name}
                src={item.image}
                title={item.start.name}
                distance={item.distance}
                period={item.period}
                difficult={item.difficult}
                postLink={item.post_link}
                region={item.start.region}
              />
            ) : (
              ''
            ),
          )}
        </Container>
      ) : (
        ''
      )}

      {!isShowAllNear ? (
        <Container>
          {isShowAllHit ? (
            <Grid container className={classes.topicHeaderStart}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={backHome}
              >
                <ArrowBackIosIcon />
              </IconButton>
              <Typography
                className={classes.topicHeaderText}
                variant="h6"
                component="h2"
              >
                熱門
              </Typography>
            </Grid>
          ) : (
            <Grid container className={classes.topicHeader}>
              <Typography
                className={classes.topicHeaderText}
                variant="h6"
                component="h2"
              >
                熱門
              </Typography>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={showAllHit}
              >
                <NavigateNextOutlinedIcon />
              </IconButton>
            </Grid>
          )}
        </Container>
      ) : (
        ''
      )}
      {!isShowAllNear ? (
        <Container disableGutters className={classes.imageListContainer}>
          {hitLists.map((item, index) =>
            index <= 4 || isShowAllHit ? (
              <HomeCard
                key={item.post_name}
                src={item.image}
                title={item.start.name}
                distance={item.distance}
                period={item.period}
                difficult={item.difficult}
                postLink={item.post_link}
                region={item.start.region}
              ></HomeCard>
            ) : (
              ''
            ),
          )}
        </Container>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default home;
