import React from 'react';

function HeaderTitle({ location, title, price }) {
  return (
    <div className="header__title">
      <h2 className="header__heading">
        {title} - {location} - Ksh{price}
      </h2>
    </div>
  );
}

export default HeaderTitle;
