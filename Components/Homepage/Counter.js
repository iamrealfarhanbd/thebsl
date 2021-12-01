const HomeCounter = () => {
    return (
        <>
      <div className="rs-counter style7 pb-100 md-pb-70">
        <div className="container">
          <div className="row couter-area">
            <div className="col-lg-3 col-md-6 md-mb-30">
              <div className="counter-item text-center">
                <h2 className="rs-count purple-color">2.958</h2>
                <h4 className="title mb-0">Finished Sessions</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 md-mb-30">
              <div className="counter-item text-center">
                <h2 className="rs-count plus blue-color">4.523</h2>
                <h4 className="title mb-0">Enrolled Learners</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 sm-mb-30">
              <div className="counter-item text-center">
                <h2 className="rs-count plus pink-color">120</h2>
                <h4 className="title mb-0">Online Instructors</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-item text-center">
                <h2 className="rs-count percent orange-color">100</h2>
                <h4 className="title mb-0">Satisfaction Rate</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default HomeCounter;