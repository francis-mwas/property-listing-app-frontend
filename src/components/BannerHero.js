import React from 'react';

function BannerHero({ children, title, paragraph, bannerTypeClass }) {
  return (
    <div className={bannerTypeClass}>
      <h1 className="banner__heading">{title}</h1>
      <p className="banner__text">{paragraph}</p>
      {children}
    </div>
  );
}

export default BannerHero;

BannerHero.defaultProps = {
  bannerTypeClass: 'banner__hero',
};
