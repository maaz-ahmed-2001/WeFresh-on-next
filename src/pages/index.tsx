import AppSection from "../../containers/home/App";
import BannerSection from "../../containers/home/Banner";
import BusinessSection from "../../containers/home/Business";

const HomePage = () => {
  return (
    <>
      <BannerSection />
      <AppSection />
      <BusinessSection />
    </>
  );
};

export default HomePage;
