import React from 'react';
import clsx from 'clsx';

import { useRouter } from 'next/router';
import NextImage, { ImageProps } from 'next/image';

import { makeStyles } from '@material-ui/core/styles';

interface Props {
  src: string;
  className?: string;
  height?: number;
  layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill';
  rawImg?: boolean;
  width?: number;
  [x: string]: any;
}

const useStyles = makeStyles(
  (theme) => ({
    img: {
      display: 'block',
      maxWidth: '100%',
    },
    responsive: {
      width: '100%',
    },
    root: {},
  }),
  { name: 'Image' },
);

const DEFAULT_DIMENSION = {
  height: 0,
  width: 0,
};

const getImageBasePath = () => {
  const router = useRouter();
  return router.basePath !== '/' ? `${router.basePath}/images/` : '/images';
};

const getImageDimension = (src) =>
  new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => {
      resolve({
        height: img.height,
        width: img.width,
      });
    };
    img.src = src;
  });

const Image = ({
  className,
  height = 0,
  layout = 'responsive',
  rawImg = false,
  src,
  width = 0,
  ...props
}: Props) => {
  const classes = useStyles();
  const router = useRouter();
  const [dimension, setDimension] = React.useState(DEFAULT_DIMENSION);
  const [loading, setLoading] = React.useState(true);

  const basePath = getImageBasePath();

  const initImage = async () => {
    const imageDimensions: any = await getImageDimension(`${basePath}${src}`);
    if (imageDimensions && imageDimensions.width > 0) {
      setLoading(false);
      setDimension(imageDimensions);
    }
  };

  React.useEffect(() => {
    if (!rawImg) {
      if (width > 0 && height > 0) {
        setLoading(false);
        setDimension({
          width,
          height,
        });
      } else {
        initImage();
      }
    }
  }, []);

  if (rawImg) {
    return (
      <img
        src={`${basePath}${src}`}
        className={clsx(className, classes.img, {
          [classes.responsive]: layout === 'responsive',
        })}
        {...props}
      />
    );
  }

  if (layout === 'fixed' && height && width) {
    return (
      <NextImage
        src={`${basePath}${src}`}
        layout="fixed"
        width={width}
        height={height}
        {...props}
      />
    );
  }

  if (layout === 'fill') {
    return <NextImage src={`${basePath}${src}`} layout={layout} {...props} />;
  }

  return !loading && dimension.height > 0 && dimension.width > 0 ? (
    <NextImage
      src={`${basePath}${src}`}
      layout={layout}
      width={dimension.width}
      height={dimension.height}
      {...props}
    />
  ) : null;
};

export default Image;

export { getImageBasePath };
