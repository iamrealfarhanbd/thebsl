const HomePublicition = () => {
    return (
        <>
        <div className="rs-publication pt-100 pb-100 md-pt-70 md-pb-70">
        <div className="container">
          <div className="sec-title2 text-center mb-50 md-mb-30">
            <div className="sub-title">Our Products</div>
            <h2 className="title mb-0">Our Publications</h2>
          </div>
          <div className="rs-carousel owl-carousel" data-loop="true" data-items={4} data-margin={30} data-autoplay="true" data-hoverpause="true" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device={2} data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2={1} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device={3} data-md-device-nav="false" data-md-device-dots="false">
            <div className="product-list">
              <div className="image-product">
                <img src="assets/images/publication/1.jpg" alt="" />
                <div className="overley">
                  <a href="#"><i className="flaticon-shopping-bag" /></a>
                </div>
              </div>
              <div className="content-desc text-center">
                <h2 className="product-title"><a href="#">Magazine</a></h2>
                <span className="price">$25.00</span>
              </div>
            </div>
            <div className="product-list">
              <div className="image-product">
                <img src="assets/images/publication/2.jpg" alt="" />
                <div className="overley">
                  <a href="#"><i className="flaticon-shopping-bag" /></a>
                </div>
              </div>
              <div className="content-desc text-center">
                <h2 className="product-title"><a href="#">Science Everything</a></h2>
                <span className="price">$25.00</span>
              </div>
            </div>
            <div className="product-list">
              <div className="image-product">
                <img src="assets/images/publication/3.jpg" alt="" />
                <div className="overley">
                  <a href="#"><i className="flaticon-shopping-bag" /></a>
                </div>
              </div>
              <div className="content-desc text-center">
                <h2 className="product-title"><a href="#">Man Cover</a></h2>
                <span className="price">$30.00</span>
              </div>
            </div>
            <div className="product-list">
              <div className="image-product">
                <img src="assets/images/publication/4.jpg" alt="" />
                <div className="overley">
                  <a href="#"><i className="flaticon-shopping-bag" /></a>
                </div>
              </div>
              <div className="content-desc text-center">
                <h2 className="product-title"><a href="#">The Headline</a></h2>
                <span className="price">$40.00</span>
              </div>
            </div>
            <div className="product-list">
              <div className="image-product">
                <img src="assets/images/publication/5.jpg" alt="" />
                <div className="overley">
                  <a href="#"><i className="flaticon-shopping-bag" /></a>
                </div>
              </div>
              <div className="content-desc text-center">
                <h2 className="product-title"><a href="#">Kids School</a></h2>
                <span className="price">$40.00</span>
              </div>
            </div>
            <div className="product-list">
              <div className="image-product">
                <img src="assets/images/publication/6.jpg" alt="" />
                <div className="overley">
                  <a href="#"><i className="flaticon-shopping-bag" /></a>
                </div>
              </div>
              <div className="content-desc text-center">
                <h2 className="product-title"><a href="#">Back School</a></h2>
                <span className="price">$40.00</span>
              </div>
            </div>
          </div>
        </div>
      </div> 
        </>
    )
}

export default HomePublicition;