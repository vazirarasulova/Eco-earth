import { BrandSection } from "../../components/brandsection/brandsection";
import { Footer } from "../../components/footer/footer";
import Header from "../../components/header/header";
import {HeaderBox}  from "../../components/headerbox/headerbox";
import { HeaderItem } from "../../components/headeritem/headeritem";
import { HomeContact } from "../../components/homecontact/homecontact";
import { HomeReview } from "../../components/homereview/homereview";
import { JoinReview } from "../../components/joinreview/joinreview";

const Home = () => {
  return (
    <>
      <Header />
      <HeaderBox/>
      <HeaderItem/>
      <HomeContact/>
      <HomeReview/>
      <BrandSection/>
      <JoinReview/>
      <Footer/>
    </>
  );
};

export default Home;
