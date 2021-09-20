import React from 'react';

function Banner({ children, heroClass }) {
  return <div className={heroClass}>{children}</div>;
}

export default Banner;

Banner.defaultProps = {
  heroClass: 'banner',
};
