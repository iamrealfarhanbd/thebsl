import AboutBlog from "../Components/About/Blog";
import AboutBreadcrumbs from "../Components/About/Breadcrumbs";
import AboutCounter from "../Components/About/Counter";
import AboutTeam from "../Components/About/Team";
import AboutVideo from "../Components/About/Video";
import HomeTestimonial from "../Components/Homepage/Testimonial";

export default function AboutUs () {
    return (
        <>
          <AboutBreadcrumbs />
          <AboutCounter />
          <AboutVideo />
          <AboutTeam />
          <HomeTestimonial />
          <AboutBlog />
        </>
    )
}


