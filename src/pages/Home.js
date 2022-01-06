import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import BannerHero from '../components/BannerHero';
import FeaturedProperties from '../components/FeaturedProperties';
import Services from '../components/Services';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testmonial from '../components/Testmonial';

function Home() {
  return (
    <div className="container">
      <Navbar />
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
      <Testmonial />
      <Footer />
    </div>
  );
}

export default Home;
