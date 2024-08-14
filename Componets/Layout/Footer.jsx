import React from 'react'
import Script from 'next/script'

function Footer() {
  return (
    <>
  <footer
    className="footer-wrapper footer-layout2"
    data-bg-src="/img/bg/footer2-bg.png"
  >
    <div className="container">
      <div className="text-center">
        <div
          className="footer-top-shape bg-repeat"
          data-bg-src="/img/bg/jiji-bg.png"
        />
      </div>
    </div>
    <div className="widget-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-xl-auto">
            <div className="widget footer-widget">
              <div className="th-widget-about">
                <div className="about-logo">
                  <a href="/">
                    <span
                      data-mask-src="/img/mbp.png"
                      className="logo-mask"
                    />{" "}
                    <img src="/img/mbp.png" alt="Bame" />
                  </a>
                </div>
                <p className="about-text">
                  Beyond esports tournaments, include a broader calendar of
                  gaming events, conferences, and conventions.
                </p>
                <h3 className="widget_title">
                  Follow <span className="text-theme">With Us:</span>
                </h3>
                <div className="th-widget-contact">
                  <div className="th-social">
                    <a className="facebook" href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="twitter" href="https://www.twitter.com/">
                      <img
                        src="/img/icon/x-twitter-icon.svg"
                        alt="icon"
                      />
                    </a>
                    <a className="instagram" href="https://www.instagram.com/">
                      <img
                        src="/img/icon/instagram-icon.svg"
                        alt="icon"
                      />{" "}
                    </a>
                    <a className="linkedin" href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a className="google-play" href="https://www.google.com/">
                      <img
                        src="/img/icon/google-playstore-icon.svg"
                        alt="icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-auto">
            <div className="widget widget_nav_menu footer-widget">
              <h3 className="widget_title">Useful Link</h3>
              <div className="menu-all-pages-container">
                <ul className="menu">
                  <li>
                    <a href="#">
                      <i className="far fa-angle-right" />
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-angle-right" />
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-angle-right" />
                      Service
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-angle-right" />
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-angle-right" />
                      Page
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-angle-right" />
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-auto">
            <div className="widget widget_nav_menu footer-widget">
              <h3 className="widget_title">Supports</h3>
              <div className="menu-all-pages-container">
                <ul className="menu">
                  <li>
                    <a href="#">
                      <i className="far fa-angle-right" /> Help &amp; Support
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-angle-right" /> Live Auctions
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-angle-right" /> 24/7 Supports
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-angle-right" /> Item Details
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-angle-right" /> Setting &amp; Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-angle-right" /> Our News
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-auto">
            <div className="widget newsletter-widget footer-widget">
              <h3 className="widget_title">Newsletter</h3>
              <p className="footer-text">
                Subscribe to our newsletter to get our latest update &amp; news
                consenter
              </p>
              <form className="newsletter-form">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email Address"
                    required=""
                  />
                  <button type="submit" className="th-btn">
                    <i className="fas fa-paper-plane" />
                  </button>
                </div>
                <div className="btn-wrap">
                  <a href="#">
                    <img
                      src="/img/normal/footer-apple-btn.png"
                      alt="img"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/img/normal/footer-playstore-btn.png"
                      alt="img"
                    />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="copyright-wrap text-center bg-repeat"
      data-bg-src="/img/bg/jiji-bg.png"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <p
              className="copyright-text bg-repeat"
              data-bg-src="/img/bg/jiji-bg.png"
            >
              <i className="fal fa-copyright" /> Copyright 2024{" "}
              <a href="/">Mbp.</a> All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className="scroll-top">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style={{
          transition: "stroke-dashoffset 10ms linear 0s",
          strokeDasharray: "307.919, 307.919",
          strokeDashoffset: "307.919"
        }}
      ></path>
    </svg>
  </div>

  <Script src="/js/vendor/jquery-3.7.1.min.js"></Script>
    <Script src="/js/app.min.js"></Script>
    <Script src="/js/main.js"></Script>
</>

  )
}

export default Footer