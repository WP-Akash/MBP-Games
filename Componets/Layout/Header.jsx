import Link from 'next/link'
import React from 'react'
function Header() {
  return (
    <>

      <div id="QuickView" className="white-popup mfp-hide">
        <div className="container bg-black3 rounded-10">
          <div className="row gx-60">
            <div className="col-lg-6">
              <div className="product-big-img">
                <div className="img">
                  <img
                    src="/img/product/product_details_1_1.png"
                    alt="Product Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="product-about">
                <p className="price">
                  $120.85<del>$150.99</del>
                </p>
                <h2 className="product-title">Microphone G9000</h2>
                <div className="product-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style={{ width: "100%" }}>
                      Rated <strong className="rating">5.00</strong> out of 5 based
                      on
                      <span className="rating">1</span> customer rating
                    </span>
                  </div>
                  <Link href="shop-details.html" className="woocommerce-review-link">
                    (<span className="count">4</span>
                    customer reviews)
                  </Link>
                </div>
                <p className="text">
                  Syndicate customized growth strategies prospective human capital
                  leverage other's optimal e-markets without transparent catalysts
                  for change. Credibly coordinate highly efficient methods of
                  empowerment cross unit solutions.
                </p>
                <div className="mt-2 link-inherit">
                  <p>
                    <strong className="text-white me-3">Availability:</strong>{" "}
                    <span className="stock in-stock">
                      <i className="far fa-check-square me-2 ms-1" />
                      In Stock
                    </span>
                  </p>
                </div>
                <div className="actions">
                  <div className="quantity">
                    <input
                      type="number"
                      className="qty-input"
                      step={1}
                      min={1}
                      max={100}
                      name="quantity"
                      defaultValue={1}
                      title="Qty"
                    />{" "}
                    <button className="quantity-plus qty-btn">
                      <i className="far fa-chevron-up" />
                    </button>
                    <button className="quantity-minus qty-btn">
                      <i className="far fa-chevron-down" />
                    </button>
                  </div>
                  <button className="th-btn">
                    Add to Cart{" "}
                    <span className="icon">
                      <i className="fa-solid fa-arrow-right ms-3" />
                    </span>
                  </button>
                  <Link href="#" className="icon-btn">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="product_meta">
                  <span className="sku_wrapper">
                    SKU: <span className="sku">Wheel-fits-chevy-camaro</span>
                  </span>{" "}
                  <span className="posted_in">
                    Category: <Link href="#">Dresses &amp; Bags</Link>
                  </span>
                  <span>
                    Tags: <Link href="#">Products</Link>
                    <Link href="#">Bags</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            title="Close (Esc)"
            type="button"
            className="mfp-close text-white"
          >
            ×
          </button>
        </div>
      </div>
      <div className="sidemenu-wrapper sidemenu-cart">
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls">
            <i className="far fa-times" />
          </button>
          <div className="widget woocommerce widget_shopping_cart">
            <h3 className="widget_title">Shopping cart</h3>
            <div className="widget_shopping_cart_content">
              <ul className="woocommerce-mini-cart cart_list product_list_widget">
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <Link href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </Link>{" "}
                  <Link href="#">
                    <img
                      src="/img/product/product_thumb_1_1.png"
                      alt="Cart Image"
                    />
                    Gaming Headphone
                  </Link>
                  <span className="quantity">
                    1 ×{" "}
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">$</span>
                      940.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <Link href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </Link>{" "}
                  <Link href="#">
                    <img
                      src="/img/product/product_thumb_1_2.png"
                      alt="Cart Image"
                    />
                    Gaming Mouse
                  </Link>
                  <span className="quantity">
                    1 ×{" "}
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">$</span>
                      899.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <Link href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </Link>{" "}
                  <Link href="#">
                    <img
                      src="/img/product/product_thumb_1_3.png"
                      alt="Cart Image"
                    />
                    Gaming Keyboard
                  </Link>
                  <span className="quantity">
                    1 ×{" "}
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">$</span>
                      756.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <Link href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </Link>{" "}
                  <Link href="#">
                    <img
                      src="/img/product/product_thumb_1_4.png"
                      alt="Cart Image"
                    />
                    Gaming Chair
                  </Link>
                  <span className="quantity">
                    1 ×{" "}
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">$</span>
                      723.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <Link href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </Link>{" "}
                  <Link href="#">
                    <img
                      src="/img/product/product_thumb_1_5.png"
                      alt="Cart Image"
                    />
                    Microphone G9000
                  </Link>
                  <span className="quantity">
                    1 ×{" "}
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">$</span>
                      1080.00
                    </span>
                  </span>
                </li>
              </ul>
              <p className="woocommerce-mini-cart__total total">
                <strong>Subtotal:</strong>{" "}
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">$</span>4398.00
                </span>
              </p>
              <p className="woocommerce-mini-cart__buttons buttons">
                <Link href="#" className="th-btn wc-forward">
                  View cart{" "}
                  <span className="icon">
                    <i className="fa-solid fa-arrow-up-right ms-3" />
                  </span>
                </Link>
                <Link href="#" className="th-btn checkout wc-forward">
                  Checkout{" "}
                  <span className="icon">
                    <i className="fa-solid fa-arrow-up-right ms-3" />
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidemenu-wrapper sidemenu-info d-none d-lg-block">
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls">
            <i className="far fa-times" />
          </button>
          <div className="widget footer-widget">
            <div className="th-widget-about">
              <div className="about-logo">
                <Link href="#">
                  <span data-mask-src="/img/mbp.png" className="logo-mask" />{" "}
                  <img src="/img/mbp.png" alt="Bame" />
                </Link>
              </div>
              <p className="about-text">
                Beyond esports tournaments, include a broader calendar of gaming
                events, conferences, and conventions.
              </p>
              <h3 className="widget_title">
                Follow <span className="text-theme">With Us:</span>
              </h3>
              <div className="th-widget-contact">
                <div className="th-social">
                  <Link className="facebook" href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link className="twitter" href="https://www.twitter.com/">
                    <img src="/img/icon/x-twitter-icon.svg" alt="icon" />
                  </Link>
                  <Link className="instagram" href="https://www.instagram.com/">
                    <img src="/img/icon/instagram-icon.svg" alt="icon" />{" "}
                  </Link>
                  <Link className="linkedin" href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin" />
                  </Link>
                  <Link className="google-play" href="https://www.google.com/">
                    <img
                      src="/img/icon/google-playstore-icon.svg"
                      alt="icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="widget">
            <h3 className="widget_title">Recent Posts</h3>
            <div className="recent-post-wrap">
              <div className="recent-post">
                <div className="media-img">
                  <Link href="#">
                    <img
                      src="/img/blog/recent-post-1-1.jpg"
                      alt="Blog Image"
                    />
                  </Link>
                </div>
                <div className="media-body">
                  <h4 className="post-title">
                    <Link className="text-inherit" href="#">
                      A Day in the Life of an Esports Event &amp; Enjoy
                    </Link>
                  </h4>
                  <div className="recent-post-meta">
                    <Link href="#">
                      <i className="fa-light fa-calendar" />
                      30 Nov, 2024
                    </Link>
                  </div>
                </div>
              </div>
              <div className="recent-post">
                <div className="media-img">
                  <Link href="#">
                    <img
                      src="/img/blog/recent-post-1-2.jpg"
                      alt="Blog Image"
                    />
                  </Link>
                </div>
                <div className="media-body">
                  <h4 className="post-title">
                    <Link className="text-inherit" href="#">
                      Strategies for Dominating Your Favorite Game
                    </Link>
                  </h4>
                  <div className="recent-post-meta">
                    <Link href="#">
                      <i className="fa-light fa-calendar" />
                      05 Dec, 2024
                    </Link>
                  </div>
                </div>
              </div>
              <div className="recent-post">
                <div className="media-img">
                  <Link href="#">
                    <img
                      src="/img/blog/recent-post-1-3.jpg"
                      alt="Blog Image"
                    />
                  </Link>
                </div>
                <div className="media-body">
                  <h4 className="post-title">
                    <Link className="text-inherit" href="#">
                      Behind the Scenes of Your Favorite Game
                    </Link>
                  </h4>
                  <div className="recent-post-meta">
                    <Link href="#">
                      <i className="fa-light fa-calendar" />
                      09 Sep, 2024
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="widget newsletter-widget">
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
                />{" "}
                <button type="submit" className="th-btn">
                  <i className="far fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="popup-search-box d-none d-lg-block">
        <button className="searchClose">
          <i className="fal fa-times" />
        </button>
        <form action="#">
          <input type="text" placeholder="What are you looking for?" />{" "}
          <button type="submit">
            <i className="fal fa-search" />
          </button>
        </form>
      </div>
      <div className="th-menu-wrapper">
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle">
            <i className="fal fa-times" />
          </button>
          <div className="mobile-logo">
            <Link href="/">
              <span data-mask-src="/img/mbp.png" className="logo-mask" />
              <img src="/img/mbp.png" alt="Bame" />
            </Link>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li className="menu-item-has-children">
                <Link href="/">HOME</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="#">Home Esports</Link>
                  </li>
                  <li>
                    <Link href="#">Home Streaming</Link>
                  </li>
                  <li>
                    <Link href="#">Home Video Gaming</Link>
                  </li>
                  <li>
                    <Link href="#">Home Tournament</Link>
                  </li>
                  <li>
                    <Link href="#">Home Gamer</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">ABOUT US</Link>
              </li>
              <li className="menu-item-has-children">
                <Link href="#">TOURNAMENT</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="#">Tournament</Link>
                  </li>
                  <li>
                    <Link href="#">Tournament Details</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link href="#">BLOG</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                  <li>
                    <Link href="#">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link href="#">PAGES</Link>
                <ul className="sub-menu">
                  <li className="menu-item-has-children">
                    <Link href="#">Shop</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="#">Shop</Link>
                      </li>
                      <li>
                        <Link href="#">Shop Details</Link>
                      </li>
                      <li>
                        <Link href="#">Cart Page</Link>
                      </li>
                      <li>
                        <Link href="#">Checkout</Link>
                      </li>
                      <li>
                        <Link href="#">Wishlist</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">Players</Link>
                  </li>
                  <li>
                    <Link href="#">Players Details</Link>
                  </li>
                  <li>
                    <Link href="#">Game</Link>
                  </li>
                  <li>
                    <Link href="#">Game Details</Link>
                  </li>
                  <li>
                    <Link href="#">Gallery</Link>
                  </li>
                  <li>
                    <Link href="#">Point Table</Link>
                  </li>
                  <li>
                    <Link href="#">Error Page</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="color-scheme-wrap active">
        <button className="switchIcon">
          <i className="fa-solid fa-palette" />
        </button>
        <h4 className="color-scheme-wrap-title">
          <i className="far fa-palette" /> Color Switcher
        </h4>
        <div className="color-switch-btns">
          <button data-color="#6240CF">
            <i className="fa-solid fa-droplet" />
          </button>{" "}
          <button data-color="#FFBE18">
            <i className="fa-solid fa-droplet" />
          </button>{" "}
          <button data-color="#24FFF2">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#45F882">
            <i className="fa-solid fa-droplet" />
          </button>{" "}
          <button data-color="#FF7E02">
            <i className="fa-solid fa-droplet" />
          </button>
        </div>
      </div>
      <header className="th-header header-layout1">
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link href="#">
                      <span
                        data-mask-src="/img/mbp.png"
                        className="logo-mask"
                      />
                      <img src="/img/mbp.png" alt="Bame" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li className="menu-item-has-children">
                        <Link href="#">HOME</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="#">Home Esports</Link>
                          </li>
                          <li>
                            <Link href="#">Home Streaming</Link>
                          </li>
                          <li>
                            <Link href="#">Home Video Gaming</Link>
                          </li>
                          <li>
                            <Link href="#">Home Tournament</Link>
                          </li>
                          <li>
                            <Link href="#">Home Gamer</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="#">ABOUT US</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">TOURNAMENT</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="#">Tournament</Link>
                          </li>
                          <li>
                            <Link href="#">Tournament Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">BLOG</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="#">Blog</Link>
                          </li>
                          <li>
                            <Link href="#">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">PAGES</Link>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <Link href="#">Shop</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link href="#">Shop</Link>
                              </li>
                              <li>
                                <Link href="#">Shop Details</Link>
                              </li>
                              <li>
                                <Link href="#">Cart Page</Link>
                              </li>
                              <li>
                                <Link href="#">Checkout</Link>
                              </li>
                              <li>
                                <Link href="#">Wishlist</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link href="#">Players</Link>
                          </li>
                          <li>
                            <Link href="#">Players Details</Link>
                          </li>
                          <li>
                            <Link href="#">Game</Link>
                          </li>
                          <li>
                            <Link href="#">Game Details</Link>
                          </li>
                          <li>
                            <Link href="#">Gallery</Link>
                          </li>
                          <li>
                            <Link href="#">Point Table</Link>
                          </li>
                          <li>
                            <Link href="#">Error Page</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="#">CONTACT</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="header-button d-flex d-lg-none">
                    <button type="button" className="th-menu-toggle">
                      <span className="btn-border" />
                      <i className="far fa-bars" />
                    </button>
                  </div>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <button type="button" className="simple-icon searchBoxToggler">
                      <i className="far fa-search" />
                    </button>{" "}
                    <button type="button" className="simple-icon sideMenuInfo">
                      <i className="fa-solid fa-bars" />
                    </button>
                    <div className="d-xxl-block d-none">
                      <Link href="#" className="th-btn">
                        <i className="fa-brands fa-twitch me-1" /> Live Streaming
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="logo-bg" />
          </div>
        </div>
      </header>


    </>
  )
}

export default Header