const HomePartner = () => {
    return (
        <>
        <div className="rs-partner pb-100 md-pb-70">
        <div className="container">
          <div className="rs-carousel owl-carousel" data-loop="true" data-items={4} data-margin={30} data-autoplay="true" data-hoverpause="true" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="false" data-nav="true" data-nav-speed="false" data-center-mode="false" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device={3} data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2={2} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device={4} data-md-device-nav="true" data-md-device-dots="false">
            <div className="partner-item">
              <a href="#"><img src="assets/images/partner/style2/1.png" alt="" /></a>
            </div>
            <div className="partner-item">
              <a href="#"><img src="assets/images/partner/style2/2.png" alt="" /></a>
            </div>
            <div className="partner-item">
              <a href="#"><img src="assets/images/partner/style2/3.png" alt="" /></a>
            </div>
            <div className="partner-item">
              <a href="#"><img src="assets/images/partner/style2/4.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default HomePartner;