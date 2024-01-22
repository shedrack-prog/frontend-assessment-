import Banner from '@/app/(home)/_components/banner';
import HomeHeader from '@/app/(home)/_components/header';
import ProductDetail from './_components/product-details';
import getSingleProduct from '@/actions/get-single-product';
import ProductFeedback from './_components/product-feedback';
import BestSellerProduct from '@/app/(home)/_components/best-seller-product';
import getAllProducts from '@/actions/get-all-products';
import FooterLogos from './_components/logos';
import Footer from '@/app/(home)/_components/footer';

const SingleProductPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const product = await getSingleProduct(params.productId);
  const products = await getAllProducts();
  return (
    <div>
      <div>
        <Banner />
        <div className="pt-[60px]">
          <HomeHeader />
          <ProductDetail product={product} />
          <ProductFeedback product={product} />
          <BestSellerProduct
            hasHeading={true}
            heading="Related products"
            products={products?.products}
          />
          <FooterLogos />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
