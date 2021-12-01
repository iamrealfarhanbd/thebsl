const HomeNewsletter = () => {
    return (
        <>
          <div className="rs-newsletter style6 modify bg5 pt-100 pb-100 md-pb-70 md-pt-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                    <div className="newsletter-wrap">
                        <div className="content-part md-mb-30">
                        <h2 className="title mb-10 white-color">Subscribe To Our Newsletter!</h2>
                        <div className="sub-title white-color">Subscribe Newsletter </div>
                        </div>      
                    </div> 
                    </div>    
                    <div className="col-lg-6">
                    <div className="newsletter-wrap">
                        <form className="newsletter-form">
                        <input type="email" id="email" name="email" placeholder="Enter Your Email" required />
                        <button type="submit">Submit</button> 
                        </form>                        
                    </div> 
                    </div> 
                </div>
                </div>
            </div>
        </>
    )
}

export default HomeNewsletter;