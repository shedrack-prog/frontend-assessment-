import Banner from './_components/banner';
import HomeHeader from './_components/header';
import HomeHero from './_components/home-hero';
import BestSellerProduct from './_components/best-seller-product';
import BestServices from './_components/best-services';
import FeaturedPost from './_components/featured-post';
import WhatTheySay from './_components/what-they-say';

import getAllProducts from '@/actions/get-all-products';
import CallToAction from './_components/call-to-action';
import Footer from './_components/footer';
import MobileNavbarRoutes from '@/components/mobile-navbar-routes';

export default async function Home() {
  const products = await getAllProducts();

  return (
    <main className=" w-full">
      <div className="w-full">
        <Banner />
        <div className="pt-[65px] w-full">
          <HomeHeader />
          <MobileNavbarRoutes />
          <HomeHero />
          <BestSellerProduct
            hasHeading={true}
            heading="Best Selling products"
            products={products?.products}
          />
          <BestServices />
          <FeaturedPost />
          <WhatTheySay />
          <CallToAction />
          <Footer />
        </div>
      </div>
    </main>
  );
}
