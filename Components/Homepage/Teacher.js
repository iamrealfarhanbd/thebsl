const HomeTeacher = () => {
    return (
        <>
      <div id="rs-team" className="rs-team style1 style7 gray-bg pt-100 pb-100 md-pt-70 md-pb-70">
        <div className="container">
          <div className="sec-title2 text-center mb-50 md-mb-30">
            <div className="sub-title primary">Instructor</div>
            <h2 className="title mb-0">Expert Teachers</h2>
          </div>
          <div className="rs-carousel owl-carousel" data-loop="true" data-items={3} data-margin={30} data-autoplay="true" data-hoverpause="false" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device={2} data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2={1} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device={3} data-md-device-nav="false" data-md-device-dots="false">
            <div className="team-item">
              <img src="assets/images/team/1.jpg" alt="" />
              <div className="content-part">
                <h4 className="name"><a href="team-single.html">Jhon Pedrocas</a></h4>
                <span className="designation">Professor</span>
                <ul className="social-links">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                </ul>
              </div>
            </div>
            <div className="team-item">
              <img src="assets/images/team/2.jpg" alt="" />
              <div className="content-part">
                <h4 className="name"><a href="team-single.html">Jesika Albenian</a></h4>
                <span className="designation">Professor</span>
                <ul className="social-links">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                </ul>
              </div>
            </div>
            <div className="team-item">
              <img src="assets/images/team/3.jpg" alt="" />
              <div className="content-part">
                <h4 className="name"><a href="team-single.html">Alex Anthony</a></h4>
                <span className="designation">Professor</span>
                <ul className="social-links">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    ) 
}

export default HomeTeacher;