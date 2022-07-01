import AppSection from "../../containers/home/App";
import BannerSection from "../../containers/home/Banner";
import BusinessSection from "../../containers/home/Business";
import FindUsSection from "../../containers/home/FindUs";
import PartnersSection from "../../containers/home/Partners";
import QuestionsSection from "../../containers/home/Questions";
import StoreSection from "../../containers/home/Store";

const HomePage = () => {
  return (
    <>
      <BannerSection />
      <StoreSection />
      <FindUsSection />
      <PartnersSection />
      <QuestionsSection />
      <AppSection />
      <BusinessSection />
    </>
  );
};

export default HomePage;
