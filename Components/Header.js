const Header = () => {
    return (
        <>
    <div className="full-width-header header-style3 modify home-7-modify2">
        <header id="rs-header" className="rs-header">
          <div className="menu-area menu-sticky">
            <div className="logo-part hidden-md">
              <a className="light-logo" href="index.html">
                <img src="assets/images/logo3.png" alt="" />
              </a>
              <a className="small-logo" href="index.html">
                <img src="assets/images/logo-dark2.png" alt="" />
              </a>
            </div>
            <div className="container">  
              <div className="responsive-logo">
                <img src="assets/images/logo-dark2.png" alt="" />
              </div>                               
              <div className="logo-cat-wrap">
                <div className="categories-btn">
                  <button type="button" className="cat-btn"><i className="fa fa-th" />Categories</button>
                  <div className="cat-menu-inner">
                  </div>
                </div>
              </div>
              <div className="rs-menu-area">
                <div className="main-menu">
                  <div className="mobile-menu">
                    <a className="rs-menu-toggle">
                      <i className="fa fa-bars" />
                    </a>
                  </div>
                  <nav className="rs-menu">
                    <ul className="nav-menu">
                      <li className="rs-mega-menu mega-rs menu-item-has-children current-menu-item"> <a href="index.html">Home</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">All Courses</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Special Deal</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Free Resources</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Login</a>
                      </li>
                    </ul> 
                  </nav>                                        
                </div>
                <div className="expand-btn-inner">                             
                  <span><a id="nav-expander" className="nav-expander style5">
                      <span className="bar">
                        <span className="dot1" />
                        <span className="dot2" />
                        <span className="dot3" />
                      </span>
                    </a></span>
                </div>
              </div>
            </div>
          </div>
          <nav className="right_menu_togle hidden-md">
            <div className="close-btn">
              <div id="nav-close">
                <div className="line">
                  <span className="line1" /><span className="line2" />
                </div>
              </div>
            </div>
            <div className="canvas-logo">
              <a href="index.html"><img src="assets/images/logo-dark.png" alt="logo" /></a>
            </div>
            <div className="offcanvas-text">
              <p>We denounce with righteous indige nationality and dislike men who are so beguiled and demo  by the charms of pleasure of the moment data com so blinded by desire.</p>
            </div>
            <div className="offcanvas-gallery">
              <div className="gallery-img">
                <a className="image-popup" href="assets/images/gallery/1.jpg"><img src="assets/images/gallery/1.jpg" alt="" /></a>
              </div>
              <div className="gallery-img">
                <a className="image-popup" href="assets/images/gallery/2.jpg"><img src="assets/images/gallery/2.jpg" alt="" /></a>
              </div>
              <div className="gallery-img">
                <a className="image-popup" href="assets/images/gallery/3.jpg"><img src="assets/images/gallery/3.jpg" alt="" /></a>
              </div>
              <div className="gallery-img">
                <a className="image-popup" href="assets/images/gallery/4.jpg"><img src="assets/images/gallery/4.jpg" alt="" /></a>
              </div>
              <div className="gallery-img">
                <a className="image-popup" href="assets/images/gallery/5.jpg"><img src="assets/images/gallery/5.jpg" alt="" /></a>
              </div>
              <div className="gallery-img">
                <a className="image-popup" href="assets/images/gallery/6.jpg"><img src="assets/images/gallery/6.jpg" alt="" /></a>
              </div>
            </div>
            <div className="map-img">
              <img src="assets/images/map.jpg" alt="" />
            </div>
            <div className="canvas-contact">
              <ul className="social">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
        </>
    )
}

export default Header;