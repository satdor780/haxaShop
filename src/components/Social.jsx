import instagram01 from '../assets/images/instagram-01.jpg'
import instagram02 from '../assets/images/instagram-02.jpg'
import instagram03 from '../assets/images/instagram-03.jpg'
import instagram04 from '../assets/images/instagram-04.jpg'
import instagram05 from '../assets/images/instagram-05.jpg'
import instagram06 from '../assets/images/instagram-06.jpg'

export default function Social(){
    return(

        <section className="section" id="social">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2>Social Media</h2>
                            <span>Details to details is what makes Hexashop different from the other themes.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row images">
                    <div className="col-2">
                        <div className="thumb">
                            <div className="icon">
                                <a href="http://instagram.com">
                                    <h6>Fashion</h6>
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </div>
                            <img src={instagram01} alt=""/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="thumb">
                            <div className="icon">
                                <a href="http://instagram.com">
                                    <h6>New</h6>
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </div>
                            <img src={instagram02} alt=""/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="thumb">
                            <div className="icon">
                                <a href="http://instagram.com">
                                    <h6>Brand</h6>
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </div>
                            <img src={instagram03} alt=""/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="thumb">
                            <div className="icon">
                                <a href="http://instagram.com">
                                    <h6>Makeup</h6>
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </div>
                            <img src={instagram04} alt=""/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="thumb">
                            <div className="icon">
                                <a href="http://instagram.com">
                                    <h6>Leather</h6>
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </div>
                            <img src={instagram05} alt=""/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="thumb">
                            <div className="icon">
                                <a href="http://instagram.com">
                                    <h6>Bag</h6>
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </div>
                            <img src={instagram06} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}