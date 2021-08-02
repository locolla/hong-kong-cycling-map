import React from 'react';

import Favicon from './Favicon';
import Viewport from './Viewport';

interface Props {}

const Meta = ({}: Props) => {
  return (
    <React.Fragment>
      <Viewport />
      <Favicon />
    </React.Fragment>
  );
};

export default Meta;
