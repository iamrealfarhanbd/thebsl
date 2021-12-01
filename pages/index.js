import HomeAbout from "../Components/Homepage/About";
import HomeBanner from "../Components/Homepage/Banner";
import HomeBlog from "../Components/Homepage/Blog";
import HomeCounter from "../Components/Homepage/Counter";
import Ctapage from "../Components/Homepage/Cta";
import HomeFacilities from "../Components/Homepage/Facilities";
import HomeFeatures from "../Components/Homepage/Features";
import HomeNewsletter from "../Components/Homepage/Newsletter";
import HomePartner from "../Components/Homepage/Partner";
import HomePublicition from "../Components/Homepage/Publicition";
import HomeServices from "../Components/Homepage/Services";
import HomeTeacher from "../Components/Homepage/Teacher";
import HomeTestimonial from '../Components/Homepage/Testimonial';

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeServices />
      <HomeAbout />
      <HomeFeatures />
      <Ctapage />
      <HomeFacilities />
      <HomeCounter />
      <HomeTeacher />
      <HomePublicition />
      <HomePartner />
      <HomeNewsletter />
      <HomeTestimonial />
      <HomeBlog />

    </>
  )
}
