import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Image from '@/components/Image';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
  grid: {
    justifyContent: 'space-between',
  },
});

interface Props {
  src: string;
  title: string;
  distance?: number;
  period?: number;
  difficult: number;
  postLink: string;
  region: string;
}

const HomeCard = ({
  src,
  title,
  distance,
  period,
  difficult,
  postLink,
  region,
}: Props) => {
  const classes = useStyles();
  const starItem = [...Array(difficult)];
  const router = useRouter();
  const goTo: Function = (url: string, link: string) => {
    router.push({
      pathname: url,
      query: { link: link },
    });
  };
  return (
    <Card className={classes.root} onClick={() => goTo('/article', postLink)}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="180"
          src={src}
          title={title}
        />
      </CardActionArea>

      <CardContent>
        <Grid container className={classes.grid}>
          <div>
            <b>{title}</b>
            <br></br>
            <Image
              src="location.png"
              width={13}
              height={13}
              layout="fixed"
              loading="eager"
            />
            <span style={{ color: '#B2B1B1' }}> {region}</span>
          </div>
          <Typography style={{ color: '#B2B1B1' }}>
            {starItem.map((sitem, index) => (
              <Image
                key={index}
                src="star-16.png"
                width={13}
                height={13}
                layout="fixed"
                loading="eager"
              />
            ))}
          </Typography>
        </Grid>
        <div></div>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
