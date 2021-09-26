import React from 'react';
import { Link } from 'react-router-dom';
import icons from '../images/sprite.svg';
import { shareIcons } from '../data';

function ShareIcons() {
  return (
    <div className="header__share--icons">
      {shareIcons.icons.map((icon) => (
        <Link to="/" class="single-property-images__link-item" id={icon.id}>
          <svg
            className={`single-property-images__icons-link single-property-images__icons-link--${icon.class}`}
          >
            <use xlinkHref={`${icons}#${icon.shareIcon}`} />
          </svg>
        </Link>
      ))}
    </div>
  );
}

export default ShareIcons;
