import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import BannerHero from '../components/BannerHero';
import FeaturedProperties from '../components/FeaturedProperties';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <>
      <Banner>
        <BannerHero
          title="Get affordable luxurious homes"
          paragraph="The ultimate modern lifestyle"
        >
          <Link to="/properties" className="banner__btn">
            View homes
          </Link>
        </BannerHero>
      </Banner>
      <Services />
      <FeaturedProperties />
      <Testimonials />
    </>
  );
}

export default Home;
