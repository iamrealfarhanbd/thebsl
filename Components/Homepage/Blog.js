const HomeBlog = () => {
    return (
        <>
       <div id="rs-blog" className="rs-blog style2 modify2 pt-100 pb-100 md-pt-70 md-pb-70">
        <div className="container relative">
          <div className="sec-title2 text-center mb-50">
            <div className="sub-title"> News &amp; Article`s</div>
            <h2 className="title"> Latest News &amp; Article`s</h2>
          </div> 
          <div className="rs-carousel owl-carousel" data-loop="true" data-items={3} data-margin={30} data-autoplay="true" data-hoverpause="true" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device={2} data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2={1} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device={3} data-md-device-nav="false" data-md-device-dots="false">
            <div className="blog-item">
              <div className="image-part">
                <img src="assets/images/blog/style2/4.jpg" alt="" />
              </div>
              <div className="blog-content">
                <span className="categories uppercase color-bg1">Primary</span>
                <h3 className="title mt-10 mb-10"><a href="#">This is a great source of content for anyone...</a></h3>
                <ul className="blog-meta">
                  <li><i className="fa fa-user-o" /> Admin</li>
                  <li><i className="fa fa-calendar" />June 15, 2019</li>
                </ul>
              </div>
            </div>
            <div className="blog-item">
              <div className="image-part">
                <img src="assets/images/blog/style2/5.jpg" alt="" />
              </div>
              <div className="blog-content">
                <span className="categories uppercase color-bg2">High School</span>
                <h3 className="title mt-10 mb-10"><a href="#">This is a great source of content for anyone...</a></h3>
                <ul className="blog-meta">
                  <li><i className="fa fa-user-o" /> Admin</li>
                  <li><i className="fa fa-calendar" />June 15, 2019</li>
                </ul>
              </div>
            </div>
            <div className="blog-item">
              <div className="image-part">
                <img src="assets/images/blog/style2/6.jpg" alt="" />
              </div>
              <div className="blog-content">
                <span className="categories uppercase color-bg3">University</span>
                <h3 className="title mt-10 mb-10"><a href="#">This is a great source of content for anyone...</a></h3>
                <ul className="blog-meta">
                  <li><i className="fa fa-user-o" /> Admin</li>
                  <li><i className="fa fa-calendar" />June 15, 2019</li>
                </ul>
              </div>
            </div>
            <div className="blog-item">
              <div className="image-part">
                <img src="assets/images/blog/style2/3.jpg" alt="" />
              </div>
              <div className="blog-content">
                <span className="categories uppercase color-bg1">Primary</span>
                <h3 className="title mt-10 mb-10"><a href="#">This is a great source of content for anyone...</a></h3>
                <ul className="blog-meta">
                  <li><i className="fa fa-user-o" /> Admin</li>
                  <li><i className="fa fa-calendar" />June 15, 2019</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default HomeBlog;