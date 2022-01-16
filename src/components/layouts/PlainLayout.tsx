import React, { PropsWithChildren } from 'react';

const PlainLayout = ({ children }: PropsWithChildren<{}>) => {
  return <div>{children}</div>;
};

export default PlainLayout;
