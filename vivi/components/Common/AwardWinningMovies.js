import React, { Component } from 'react';
import Link from 'next/link';

class AwardWinningMovies extends Component {

    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs-item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("zoomIn");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " zoomIn animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="products-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Products</span>
                        <h2>Award Winning Productions</h2>
                    </div>

                    <div className="tab award-winning-tab">
                        <ul className="tabs-nav">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <span>2016</span>
                            </li>
                            <li
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                <span>2017</span>
                            </li>
                            <li
                                onClick={(e) => this.openTabSection(e, 'tab3')}
                            >
                                <span>2018</span>
                            </li>
                            <li
                                onClick={(e) => this.openTabSection(e, 'tab4')}
                            >
                                <span>2019</span>
                            </li>
                            <li
                                onClick={(e) => this.openTabSection(e, 'tab5')}
                            >
                                <span>2020</span>
                            </li>
                        </ul>
                     
                        <div className="tab-content">
                            <div id="tab1" className="tabs-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="products">
                                            <img src="/img/products-img.jpg" alt="Image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="products-content">
                                            <span>Play Festival</span>
                                            <h2>Award Winning Plays “Once Upon a Time”</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Rhoncus est pellentesque elit ullamcorper dignissim cras.</p>

                                            <Link href="#">
                                                <a className="default-btn">Learn More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab2" className="tabs-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="products">
                                            <img src="/img/products-img-2.jpg" alt="Image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="products-content">
                                            <span>Vivi Bio</span>
                                            <h2>Award Winning Movies “Once Upon a Time”</h2>
                                            <p>Video production work with producing video content. It is the analogical of film making, but the images are digitally recorded instead of film stock. There are three levels of video production: production, pre-production and post-production the images are.</p>
                
                                            <Link href="#">
                                                <a className="default-btn">Learn More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab3" className="tabs-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="products">
                                            <img src="/img/products-img-3.jpg" alt="Image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="products-content">
                                            <span>Vivi Bio</span>
                                            <h2>Award Winning Movies “Once Upon a Time”</h2>
                                            <p>Video production work with producing video content. It is the analogical of film making, but the images are digitally recorded instead of film stock. There are three levels of video production: production, pre-production and post-production the images are.</p>
                
                                            <Link href="#">
                                                <a className="default-btn">Learn More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab4" className="tabs-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="products">
                                            <img src="/img/products-img-4.jpg" alt="Image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="products-content">
                                            <span>Vivi Bio</span>
                                            <h2>Award Winning Movies “Once Upon a Time”</h2>
                                            <p>Video production work with producing video content. It is the analogical of film making, but the images are digitally recorded instead of film stock. There are three levels of video production: production, pre-production and post-production the images are.</p>
                
                                            <Link href="#">
                                                <a className="default-btn">Learn More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab5" className="tabs-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="products">
                                            <img src="/img/products-img-3.jpg" alt="Image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="products-content">
                                            <span>Vivi Bio</span>
                                            <h2>Award Winning Movies “Once Upon a Time”</h2>
                                            <p>Video production work with producing video content. It is the analogical of film making, but the images are digitally recorded instead of film stock. There are three levels of video production: production, pre-production and post-production the images are.</p>
                
                                            <Link href="#">
                                                <a className="default-btn">Learn More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AwardWinningMovies;