import Layout from "@/Componets/Layout/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Layout>
    <>
  <div
    className="th-hero-wrapper hero-1"
    id="hero"
    data-bg-src="/img/hero/hero-bg1-1.png"
  >
    <div className="container">
      <div className="hero-style1 text-center">
        <span
          className="sub-title custom-anim-top wow animated"
          data-wow-duration="1.2s"
          data-wow-delay="0.1s"
        >
          # World Class Convention Center
        </span>
        <h1 className="hero-title">
          <span
            className="title1 custom-anim-top wow animated"
            data-wow-duration="1.1s"
            data-wow-delay="0.3s"
            data-bg-src="/img/hero/hero-title-bg-shape1.svg"
          >
            As your wedding planners
          </span>
          <span
            className="title2 custom-anim-top wow animated"
            data-wow-duration="1.1s"
            data-wow-delay="0.4s"
          >
            MBP
          </span>
        </h1>
        <div
          className="btn-group custom-anim-top wow animated"
          data-wow-duration="1.2s"
          data-wow-delay="0.7s"
        >
          <a href="about.html" className="th-btn">
            EXPLORE MORE <i className="fa-solid fa-arrow-right ms-2" />
          </a>{" "}
          <a href="tournament.html" className="th-btn style2">
            BROWSE GAMES <i className="fa-solid fa-arrow-right ms-2" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div
    className="swiper th-slider hero-cta-slider1"
    id="heroSlider1"
    data-slider-options='{"effect":"fade"}'
  >
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <div className="hero-cta-inner">
          <div className="container th-container2">
            <div className="hero-shape-area">
              <div className="hero-bg-shape">
                <div
                  className="hero-bg-border-anime"
                  data-mask-src="/img/hero/hero-bg-shape.png"
                ></div>
                <svg
                  viewBox="0 0 1600 520"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1599 30V490C1599 506.016 1586.02 519 1570 519H1062.43C1054.74 519 1047.36 515.945 1041.92 510.506L1009.49 478.08C1003.68 472.266 995.795 469 987.574 469H612.426C604.205 469 596.32 472.266 590.506 478.08L558.08 510.506C552.641 515.945 545.265 519 537.574 519H30C13.9837 519 1 506.016 1 490V30C1 13.9837 13.9837 1 30 1H400H537.574C545.265 1 552.641 4.05535 558.08 9.4939L590.506 41.9203C596.32 47.7339 604.205 51 612.426 51H987.574C995.795 51 1003.68 47.7339 1009.49 41.9203L1041.92 9.4939C1047.36 4.05535 1054.74 1 1062.43 1H1200H1570C1586.02 1 1599 13.9837 1599 30Z"
                    fill="black"
                    stroke="url(#paint0_linear1_47_22)"
                    strokeWidth={2}
                  />
                  <mask
                    id="mask0_47_22"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                  >
                    <path
                      d="M1600 490V30C1600 13.4315 1586.57 0 1570 0H1200H1062.43C1054.47 0 1046.84 3.1607 1041.21 8.7868L1008.79 41.2132C1003.16 46.8393 995.53 50 987.574 50H612.426C604.47 50 596.839 46.8393 591.213 41.2132L558.787 8.7868C553.161 3.16071 545.53 0 537.574 0H400H30C13.4315 0 0 13.4314 0 30V490C0 506.569 13.4315 520 30 520H537.574C545.53 520 553.161 516.839 558.787 511.213L591.213 478.787C596.839 473.161 604.47 470 612.426 470H987.574C995.53 470 1003.16 473.161 1008.79 478.787L1041.21 511.213C1046.84 516.839 1054.47 520 1062.43 520H1570C1586.57 520 1600 506.569 1600 490Z"
                      fill="black"
                    />
                  </mask>
                  <g mask="url(#mask0_47_22)">
                    <g filter="url(#filter0_f_47_22)">
                      <circle
                        cx={1413}
                        cy={314}
                        r={287}
                        fill="var(--theme-color2)"
                        fillOpacity="0.2"
                      />
                    </g>
                    <g filter="url(#filter01_f_47_22)">
                      <circle
                        cx={231}
                        cy={172}
                        r={229}
                        fill="var(--theme-color)"
                        fillOpacity="0.5"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_47_22"
                      x={566}
                      y={-533}
                      width={1694}
                      height={1694}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation={280}
                        result="effect1_foregroundBlur_47_22"
                      />
                    </filter>
                    <filter
                      id="filter01_f_47_22"
                      x={-558}
                      y={-617}
                      width={1578}
                      height={1578}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation={280}
                        result="effect1_foregroundBlur_47_22"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear1_47_22"
                      x1={0}
                      y1={0}
                      x2={1600}
                      y2={520}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0} stopColor="var(--theme-color)" />
                      <stop offset={1} stopColor="var(--theme-color2)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="verses-thumb d-xl-none d-block">
                  <img
                    src="/img/tournament/game-vs1.svg"
                    alt="tournament image"
                  />
                </div>
                <div
                  className="hero-img1 z-index-common"
                  data-ani="slideinleft"
                  data-ani-delay="0.4s"
                >
                  <img src="/img/hero/hero-1-1.png" alt="Image" />
                </div>
                <div
                  className="hero-img2 z-index-common"
                  data-ani="slideinright"
                  data-ani-delay="0.4s"
                >
                  <img src="/img/hero/hero-1-2.png" alt="Image" />
                </div>
              </div>
              <div className="title-area mb-0">
                <h2
                  className="sec-title text-white custom-anim-top wow animated"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.1s"
                >
                  We Will Give You A Hassle-Free Event Planning Experience
                </h2>
                <p
                  className="mt-30 mb-30 custom-anim-top wow animated"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore dolor accusantium nulla eius qui quo quod iure
                  inventore cumque consequatur?
                </p>
                <div
                  className="btn-group custom-anim-top wow animated"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  <a href="about.html" className="th-btn style-border">
                    <span className="btn-border">
                      Contact Us <i className="fa-solid fa-arrow-right ms-2" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-cta-inner">
        <div className="container th-container2">
          <div className="hero-shape-area">
            <div className="hero-bg-shape">
              <div
                className="hero-bg-border-anime"
                data-mask-src="/img/hero/hero-bg-shape.png"
              ></div>
              <svg
                viewBox="0 0 1600 520"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1599 30V490C1599 506.016 1586.02 519 1570 519H1062.43C1054.74 519 1047.36 515.945 1041.92 510.506L1009.49 478.08C1003.68 472.266 995.795 469 987.574 469H612.426C604.205 469 596.32 472.266 590.506 478.08L558.08 510.506C552.641 515.945 545.265 519 537.574 519H30C13.9837 519 1 506.016 1 490V30C1 13.9837 13.9837 1 30 1H400H537.574C545.265 1 552.641 4.05535 558.08 9.4939L590.506 41.9203C596.32 47.7339 604.205 51 612.426 51H987.574C995.795 51 1003.68 47.7339 1009.49 41.9203L1041.92 9.4939C1047.36 4.05535 1054.74 1 1062.43 1H1200H1570C1586.02 1 1599 13.9837 1599 30Z"
                  fill="black"
                  stroke="url(#paint0_linear2_47_22)"
                  strokeWidth={2}
                />
                <mask
                  id="mask1_47_22"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                >
                  <path
                    d="M1600 490V30C1600 13.4315 1586.57 0 1570 0H1200H1062.43C1054.47 0 1046.84 3.1607 1041.21 8.7868L1008.79 41.2132C1003.16 46.8393 995.53 50 987.574 50H612.426C604.47 50 596.839 46.8393 591.213 41.2132L558.787 8.7868C553.161 3.16071 545.53 0 537.574 0H400H30C13.4315 0 0 13.4314 0 30V490C0 506.569 13.4315 520 30 520H537.574C545.53 520 553.161 516.839 558.787 511.213L591.213 478.787C596.839 473.161 604.47 470 612.426 470H987.574C995.53 470 1003.16 473.161 1008.79 478.787L1041.21 511.213C1046.84 516.839 1054.47 520 1062.43 520H1570C1586.57 520 1600 506.569 1600 490Z"
                    fill="black"
                  />
                </mask>
                <g mask="url(#mask1_47_22)">
                  <g filter="url(#filter1_f_47_22)">
                    <circle
                      cx={1413}
                      cy={314}
                      r={287}
                      fill="var(--theme-color2)"
                      fillOpacity="0.2"
                    />
                  </g>
                  <g filter="url(#filter02_f_47_22)">
                    <circle
                      cx={231}
                      cy={172}
                      r={229}
                      fill="var(--theme-color)"
                      fillOpacity="0.5"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter1_f_47_22"
                    x={566}
                    y={-533}
                    width={1694}
                    height={1694}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={280}
                      result="effect1_foregroundBlur_47_22"
                    />
                  </filter>
                  <filter
                    id="filter02_f_47_22"
                    x={-558}
                    y={-617}
                    width={1578}
                    height={1578}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={280}
                      result="effect1_foregroundBlur_47_22"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear2_47_22"
                    x1={0}
                    y1={0}
                    x2={1600}
                    y2={520}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0} stopColor="var(--theme-color)" />
                    <stop offset={1} stopColor="var(--theme-color2)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="verses-thumb d-xl-none d-block">
                <img
                  src="/img/tournament/game-vs1.svg"
                  alt="tournament image"
                />
              </div>
              <div
                className="hero-img1 z-index-common"
                data-ani="slideinleft"
                data-ani-delay="0.4s"
              >
                <img src="/img/hero/hero-1-3.png" alt="Image" />
              </div>
              <div
                className="hero-img2 z-index-common"
                data-ani="slideinright"
                data-ani-delay="0.4s"
              >
                <img src="/img/hero/hero-1-4.png" alt="Image" />
              </div>
            </div>
            <div className="title-area mb-0">
              <h2
                className="sec-title text-white custom-anim-top wow animated"
                data-wow-duration="1.3s"
                data-wow-delay="0.1s"
              >
                Join The Big Tournaments
              </h2>
              <p
                className="mt-30 mb-30 custom-anim-top wow animated"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                Beyond esports tournaments, include a broader calendar of gaming
                events, conferences, and conventions. and connect with each
                other.
              </p>
              <div
                className="btn-group custom-anim-top wow animated"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <a href="about.html" className="th-btn style-border">
                  <span className="btn-border">
                    JOIN NOW <i className="fa-solid fa-arrow-right ms-2" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    --&gt;
    <div className="hero-cta-inner">
      <div className="container th-container2">
        <div className="hero-shape-area">
          <div className="hero-bg-shape">
            <div
              className="hero-bg-border-anime"
              data-mask-src="/img/hero/hero-bg-shape.png"
            ></div>
            <svg
              viewBox="0 0 1600 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1599 30V490C1599 506.016 1586.02 519 1570 519H1062.43C1054.74 519 1047.36 515.945 1041.92 510.506L1009.49 478.08C1003.68 472.266 995.795 469 987.574 469H612.426C604.205 469 596.32 472.266 590.506 478.08L558.08 510.506C552.641 515.945 545.265 519 537.574 519H30C13.9837 519 1 506.016 1 490V30C1 13.9837 13.9837 1 30 1H400H537.574C545.265 1 552.641 4.05535 558.08 9.4939L590.506 41.9203C596.32 47.7339 604.205 51 612.426 51H987.574C995.795 51 1003.68 47.7339 1009.49 41.9203L1041.92 9.4939C1047.36 4.05535 1054.74 1 1062.43 1H1200H1570C1586.02 1 1599 13.9837 1599 30Z"
                fill="black"
                stroke="url(#paint0_linear3_47_22)"
                strokeWidth={2}
              />
              <mask
                id="mask2_47_22"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
              >
                <path
                  d="M1600 490V30C1600 13.4315 1586.57 0 1570 0H1200H1062.43C1054.47 0 1046.84 3.1607 1041.21 8.7868L1008.79 41.2132C1003.16 46.8393 995.53 50 987.574 50H612.426C604.47 50 596.839 46.8393 591.213 41.2132L558.787 8.7868C553.161 3.16071 545.53 0 537.574 0H400H30C13.4315 0 0 13.4314 0 30V490C0 506.569 13.4315 520 30 520H537.574C545.53 520 553.161 516.839 558.787 511.213L591.213 478.787C596.839 473.161 604.47 470 612.426 470H987.574C995.53 470 1003.16 473.161 1008.79 478.787L1041.21 511.213C1046.84 516.839 1054.47 520 1062.43 520H1570C1586.57 520 1600 506.569 1600 490Z"
                  fill="black"
                />
              </mask>
              <g mask="url(#mask2_47_22)">
                <g filter="url(#filter3_f_47_22)">
                  <circle
                    cx={1413}
                    cy={314}
                    r={287}
                    fill="var(--theme-color2)"
                    fillOpacity="0.2"
                  />
                </g>
                <g filter="url(#filter03_f_47_22)">
                  <circle
                    cx={231}
                    cy={172}
                    r={229}
                    fill="var(--theme-color)"
                    fillOpacity="0.5"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter3_f_47_22"
                  x={566}
                  y={-533}
                  width={1694}
                  height={1694}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation={280}
                    result="effect1_foregroundBlur_47_22"
                  />
                </filter>
                <filter
                  id="filter03_f_47_22"
                  x={-558}
                  y={-617}
                  width={1578}
                  height={1578}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation={280}
                    result="effect1_foregroundBlur_47_22"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear3_47_22"
                  x1={0}
                  y1={0}
                  x2={1600}
                  y2={520}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="var(--theme-color)" />
                  <stop offset={1} stopColor="var(--theme-color2)" />
                </linearGradient>
              </defs>
            </svg>
            <div className="verses-thumb d-xl-none d-block">
              <img
                src="/img/tournament/game-vs1.svg"
                alt="tournament image"
              />
            </div>
            <div
              className="hero-img1 z-index-common"
              data-ani="slideinleft"
              data-ani-delay="0.4s"
            >
              <img src="/img/hero/hero-1-5.png" alt="Image" />
            </div>
            <div
              className="hero-img2 z-index-common"
              data-ani="slideinright"
              data-ani-delay="0.4s"
            >
              <img src="/img/hero/hero-1-6.png" alt="Image" />
            </div>
          </div>
          <div className="title-area mb-0">
            <h2
              className="sec-title text-white custom-anim-top wow animated"
              data-wow-duration="1.3s"
              data-wow-delay="0.1s"
            >
              Join The Big Tournaments
            </h2>
            <p
              className="mt-30 mb-30 custom-anim-top wow animated"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              Beyond esports tournaments, include a broader calendar of gaming
              events, conferences, and conventions. and connect with each other.
            </p>
            <div
              className="btn-group custom-anim-top wow animated"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              <a href="about.html" className="th-btn style-border">
                <span className="btn-border">
                  JOIN NOW <i className="fa-solid fa-arrow-right ms-2" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
  --&gt;
  <div className="slider-pagination" />
  <div
    className="marquee-area-1 bg-repeat overflow-hidden"
    data-bg-src="/img/bg/jiji-bg.png"
  >
    <div className="container-fluid">
      <div
        className="swiper th-slider"
        id="marqueeSlider1"
        data-slider-options='{"breakpoints":{"0":{"slidesPerView":"auto"}},"autoplay":{"delay":1500,"disableOnInteraction":false},"spaceBetween":50}'
      >
        <div className="swiper-wrapper">
          <div className="marquee-item swiper-slide">
            <div className="marquee_icon">
              <img src="/img/normal/star.png" alt="Icon" />
            </div>
            <h3 className="marquee-title">
              <a href="service-details.html">Tokyo Square Convention Center</a>
            </h3>
          </div>
          <div className="marquee-item swiper-slide">
            <div className="marquee_icon">
              <img src="/img/normal/star.png" alt="Icon" />
            </div>
            <h3 className="marquee-title">
              <a href="service-details.html">
                Bangabandhu International Convention
              </a>
            </h3>
          </div>
          <div className="marquee-item swiper-slide">
            <div className="marquee_icon">
              <img src="/img/normal/star.png" alt="Icon" />
            </div>
            <h3 className="marquee-title">
              <a href="service-details.html">Sena Malancha</a>
            </h3>
          </div>
          <div className="marquee-item swiper-slide">
            <div className="marquee_icon">
              <img src="/img/normal/star.png" alt="Icon" />
            </div>
            <h3 className="marquee-title">
              <a href="service-details.html">Fortune Square Convention</a>
            </h3>
          </div>
          <div className="marquee-item swiper-slide">
            <div className="marquee_icon">
              <img src="/img/normal/star.png" alt="Icon" />
            </div>
            <h3 className="marquee-title">
              <a href="service-details.html">Zaara Convention Center</a>
            </h3>
          </div>
          <div className="marquee-item swiper-slide">
            <div className="marquee_icon">
              <img src="/img/normal/star.png" alt="Icon" />
            </div>
            <h3 className="marquee-title">
              <a href="service-details.html">Paragon Convention Hall</a>
            </h3>
          </div>
          <div className="marquee-item swiper-slide">
            <div className="marquee_icon">
              <img src="/img/normal/star.png" alt="Icon" />
            </div>
            <h3 className="marquee-title">
              <a href="service-details.html">Mirpur DOHS Avenue</a>
            </h3>
          </div>
          <div className="marquee-item swiper-slide">
            <div className="marquee_icon">
              <img src="/img/normal/star.png" alt="Icon" />
            </div>
            <h3 className="marquee-title">
              <a href="service-details.html">Police Convention Hall</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="overflow-hidden space" id="about-sec">
    <div className="about-bg-img shape-mockup" data-top={0} data-left={0}>
      <img src="/img/bg/about-bg1.png" alt="img" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="about-title-wrap mb-n1">
            <div
              className="title-area custom-anim-left wow animated"
              data-wow-duration="1.5s"
              data-wow-delay="0.1s"
            >
              <span className="sub-title">WELCOME TO MBP</span>
              <h2 className="sec-title mb-0">
                It Is Our Goal To Give You The Wedding Of Your Dreams
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-xl-6 mb-50 mb-xl-0">
          <div className="img-box1">
            <div
              className="img1 custom-anim-left wow animated"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <img src="/img/normal/about1-1.png" alt="About" />
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="about-wrap1">
            <div className="about-grid">
              <div
                className="icon custom-anim-top wow animated"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img src="/img/icon/about_feature_1.svg" alt="img" />
              </div>
              <div
                className="about-grid-details custom-anim-left wow animated"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <h3 className="about-grid_title h5">Choose Convention Hall</h3>
                <p className="about-grid_text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias harum dignissimos deserunt.
                </p>
              </div>
            </div>
            <div className="about-grid">
              <div
                className="icon custom-anim-top wow animated"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img src="/img/icon/about_feature_2.svg" alt="img" />
              </div>
              <div
                className="about-grid-details custom-anim-left wow animated"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <h3 className="about-grid_title h5">Customize your Wedding</h3>
                <p className="about-grid_text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias harum dignissimos deserunt.
                </p>
              </div>
            </div>
            <div className="about-grid">
              <div
                className="icon custom-anim-top wow animated"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img src="/img/icon/about_feature_3.svg" alt="img" />
              </div>
              <div
                className="about-grid-details custom-anim-left wow animated"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <h3 className="about-grid_title h5">Choose Flower</h3>
                <p className="about-grid_text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias harum dignissimos deserunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="about-sec-3 overflow-hidden space-top position-relative z-index-common"
    data-bg-src="/img/bg/about-bg2.png"
  >
    <div className="gr-bg1 overlay" />
    <div className="container">
      <div className="about-wrap3">
        <div className="row gy-40">
          <div className="col-xl-6">
            <div
              className="title-area custom-anim-left wow animated"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <span className="sub-title">Why Choose Us</span>
              <h2 className="sec-title">
                Our Values Inspire And Drive Our Every Move{" "}
                <span className="text-theme">!</span>
              </h2>
              <div className="checklist">
                <ul>
                  <li>
                    <i className="fas fa-circle-check" /> List item 1
                  </li>
                  <li>
                    <i className="fas fa-circle-check" /> List item 2
                  </li>
                  <li>
                    <i className="fas fa-circle-check" /> List item 3
                  </li>
                  <li>
                    <i className="fas fa-circle-check" /> List item 4
                  </li>
                  <li>
                    <i className="fas fa-circle-check" /> List item 5
                  </li>
                  <li>
                    <i className="fas fa-circle-check" /> List item 6
                  </li>
                </ul>
              </div>
            </div>
            <div className="img-box3">
              <div className="img1">
                <img src="/img/normal/about3-2.png" alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="img-box3">
              <div className="img1">
                <img src="/img/normal/about3-1.png" alt="About" />
              </div>
            </div>
            <div
              className="about-content custom-anim-left wow animated"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis sed consequuntur, obcaecati quidem sit tempora magni
                nam eveniet accusantium ducimus perspiciatis quisquam ad
                recusandae debitis.
              </p>
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis sed consequuntur, obcaecati quidem sit tempora magni
                nam eveniet accusantium ducimus perspiciatis quisquam ad
                recusandae debitis.
              </p>
            </div>
          </div>
        </div>
        <div className="about-tag">
          <div className="about-experience-tag">
            <span className="circle-title-anime">
              {" "}
              24 YEARS EXPERIENCE OF Wedding{" "}
            </span>
          </div>
          <div className="about-tag-icon">
            <img src="/img/logo-icon.svg" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="overflow-hidden">
    <div className="container th-container2">
      <div
        className="game-sec-wrap1 space"
        data-bg-src="/img/bg/game-sec1-bg.png"
      >
        <div
          className="title-area text-center custom-anim-top wow animated"
          data-wow-duration="1.5s"
          data-wow-delay="0.1s"
        >
          <span className="sub-title"># Releases The Latest Game</span>
          <h2 className="sec-title">
            Game On, Power Up, Win Big <span className="text-theme">!</span>
          </h2>
        </div>
        <div className="slider-area">
          <div
            className="swiper th-slider game-slider-1"
            id="gameSlider1"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="game-card gradient-border">
                  <div className="game-card-img">
                    <a href="game-details.html">
                      <img src="/img/game/1-1.png" alt="game image" />
                    </a>
                    <div className="game-logo">
                      <img src="/img/game/logo1-1.png" alt="game logo" />
                    </div>
                  </div>
                  <div className="game-card-details">
                    <h3 className="box-title">
                      <a href="game-details.html">The Hunter Killer</a>
                    </h3>
                    <p className="game-content">
                      Entry Fee:<span className="text-theme">$10.00</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="game-card gradient-border">
                  <div className="game-card-img">
                    <a href="game-details.html">
                      <img src="/img/game/1-2.png" alt="game image" />
                    </a>
                    <div className="game-logo">
                      <img src="/img/game/logo1-2.png" alt="game logo" />
                    </div>
                  </div>
                  <div className="game-card-details">
                    <h3 className="box-title">
                      <a href="game-details.html">Net Remaining Monies</a>
                    </h3>
                    <p className="game-content">
                      Entry Fee:<span className="text-theme">Free</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="game-card gradient-border">
                  <div className="game-card-img">
                    <a href="game-details.html">
                      <img src="/img/game/1-3.png" alt="game image" />
                    </a>
                    <div className="game-logo">
                      <img src="/img/game/logo1-3.png" alt="game logo" />
                    </div>
                  </div>
                  <div className="game-card-details">
                    <h3 className="box-title">
                      <a href="game-details.html">Duty Balck Ops</a>
                    </h3>
                    <p className="game-content">
                      Entry Fee:<span className="text-theme">$10.00</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="game-card gradient-border">
                  <div className="game-card-img">
                    <a href="game-details.html">
                      <img src="/img/game/1-4.png" alt="game image" />
                    </a>
                    <div className="game-logo">
                      <img src="/img/game/logo1-4.png" alt="game logo" />
                    </div>
                  </div>
                  <div className="game-card-details">
                    <h3 className="box-title">
                      <a href="game-details.html">League of Legends</a>
                    </h3>
                    <p className="game-content">
                      Entry Fee:<span className="text-theme">$10.00</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="game-card gradient-border">
                  <div className="game-card-img">
                    <a href="game-details.html">
                      <img src="/img/game/1-1.png" alt="game image" />
                    </a>
                    <div className="game-logo">
                      <img src="/img/game/logo1-1.png" alt="game logo" />
                    </div>
                  </div>
                  <div className="game-card-details">
                    <h3 className="box-title">
                      <a href="game-details.html">The Hunter Killer</a>
                    </h3>
                    <p className="game-content">
                      Entry Fee:<span className="text-theme">$10.00</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="game-card gradient-border">
                  <div className="game-card-img">
                    <a href="game-details.html">
                      <img src="/img/game/1-2.png" alt="game image" />
                    </a>
                    <div className="game-logo">
                      <img src="/img/game/logo1-2.png" alt="game logo" />
                    </div>
                  </div>
                  <div className="game-card-details">
                    <h3 className="box-title">
                      <a href="game-details.html">Net Remaining Monies</a>
                    </h3>
                    <p className="game-content">
                      Entry Fee:<span className="text-theme">Free</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="game-card gradient-border">
                  <div className="game-card-img">
                    <a href="game-details.html">
                      <img src="/img/game/1-3.png" alt="game image" />
                    </a>
                    <div className="game-logo">
                      <img src="/img/game/logo1-3.png" alt="game logo" />
                    </div>
                  </div>
                  <div className="game-card-details">
                    <h3 className="box-title">
                      <a href="game-details.html">Duty Balck Ops</a>
                    </h3>
                    <p className="game-content">
                      Entry Fee:<span className="text-theme">$10.00</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="game-card gradient-border">
                  <div className="game-card-img">
                    <a href="game-details.html">
                      <img src="/img/game/1-4.png" alt="game image" />
                    </a>
                    <div className="game-logo">
                      <img src="/img/game/logo1-4.png" alt="game logo" />
                    </div>
                  </div>
                  <div className="game-card-details">
                    <h3 className="box-title">
                      <a href="game-details.html">League of Legends</a>
                    </h3>
                    <p className="game-content">
                      Entry Fee:<span className="text-theme">$10.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-pagination" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="container-fluid p-0">
    <div className="gallery-area-1 overflow-hidden text-center">
      <div className="slider-area gallery-slider1">
        <div
          className="swiper th-slider"
          id="gallerySlider1"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}},"effect":"coverflow","coverflowEffect":{"rotate":"0","stretch":"0","depth":"150","modifier":"1"},"centeredSlides":"true"}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide gallery-wrap1">
              <div className="th-video">
                <img src="/img/video/1-1.png" alt="img" />{" "}
                <a
                  href="/img/video/1-1.png"
                  className="play-btn popup-image style3"
                >
                  <i className="fa-solid fa-arrow-up-right" />
                </a>
              </div>
            </div>
            <div className="swiper-slide gallery-wrap1">
              <div className="th-video">
                <img src="/img/video/1-2.png" alt="img" />{" "}
                <a
                  href="/img/video/1-2.png"
                  className="play-btn popup-image style3"
                >
                  <i className="fa-solid fa-arrow-up-right" />
                </a>
              </div>
            </div>
            <div className="swiper-slide gallery-wrap1">
              <div className="th-video">
                <img src="/img/video/1-3.png" alt="img" />{" "}
                <a
                  href="/img/video/1-3.png"
                  className="play-btn popup-image style3"
                >
                  <i className="fa-solid fa-arrow-up-right" />
                </a>
              </div>
            </div>
            <div className="swiper-slide gallery-wrap1">
              <div className="th-video">
                <img src="/img/video/1-1.png" alt="img" />{" "}
                <a
                  href="/img/video/1-1.png"
                  className="play-btn popup-image style3"
                >
                  <i className="fa-solid fa-arrow-up-right" />
                </a>
              </div>
            </div>
            <div className="swiper-slide gallery-wrap1">
              <div className="th-video">
                <img src="/img/video/1-2.png" alt="img" />{" "}
                <a
                  href="/img/video/1-2.png"
                  className="play-btn popup-image style3"
                >
                  <i className="fa-solid fa-arrow-up-right" />
                </a>
              </div>
            </div>
            <div className="swiper-slide gallery-wrap1">
              <div className="th-video">
                <img src="/img/video/1-3.png" alt="img" />{" "}
                <a
                  href="/img/video/1-3.png"
                  className="play-btn popup-image style3"
                >
                  <i className="fa-solid fa-arrow-up-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          data-slider-prev="#gallerySlider1"
          className="slider-arrow slider-prev"
        >
          <i className="fas fa-angle-left" />
        </button>
        <button
          data-slider-next="#gallerySlider1"
          className="slider-arrow slider-next"
        >
          <i className="fas fa-angle-right" />
        </button>
      </div>
    </div>
  </div>
  <section className="team-sec-1 space">
    <div className="team-shape1-1 shape-mockup" data-top={0} data-right={0}>
      <img src="/img/bg/team-sec1-bg.png" alt="img" />
    </div>
    <div className="container th-container3">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-7 col-md-8">
          <div
            className="title-area text-center custom-anim-top wow animated"
            data-wow-duration="1.5s"
            data-wow-delay="0.2s"
          >
            <span className="sub-title"># Top World Class Planners</span>
            <h2 className="sec-title">Let’s See Our Pro Planners</h2>
          </div>
        </div>
      </div>
      <div className="slider-area team-slider1">
        <div
          className="swiper th-slider has-shadow"
          id="teamSlider1"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"4"},"1200":{"slidesPerView":"5"}}}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="th-team team-card">
                <div className="team-card-corner team-card-corner1" />
                <div className="team-card-corner team-card-corner2" />
                <div className="team-card-corner team-card-corner3" />
                <div className="team-card-corner team-card-corner4" />
                <div className="img-wrap">
                  <div className="team-img">
                    <img src="/img/team/1-1.png" alt="Team" />
                  </div>
                  <img
                    className="game-logo"
                    src="/img/team/game-logo1-1.png"
                    alt="Team"
                  />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="team-details.html">Max Alexis</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="th-team team-card">
                <div className="team-card-corner team-card-corner1" />
                <div className="team-card-corner team-card-corner2" />
                <div className="team-card-corner team-card-corner3" />
                <div className="team-card-corner team-card-corner4" />
                <div className="img-wrap">
                  <div className="team-img">
                    <img src="/img/team/1-2.png" alt="Team" />
                  </div>
                  <img
                    className="game-logo"
                    src="/img/team/game-logo1-2.png"
                    alt="Team"
                  />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="team-details.html">Wilium Lili</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="th-team team-card">
                <div className="team-card-corner team-card-corner1" />
                <div className="team-card-corner team-card-corner2" />
                <div className="team-card-corner team-card-corner3" />
                <div className="team-card-corner team-card-corner4" />
                <div className="img-wrap">
                  <div className="team-img">
                    <img src="/img/team/1-3.png" alt="Team" />
                  </div>
                  <img
                    className="game-logo"
                    src="/img/team/game-logo1-3.png"
                    alt="Team"
                  />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="team-details.html">Mac Marsh</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="th-team team-card">
                <div className="team-card-corner team-card-corner1" />
                <div className="team-card-corner team-card-corner2" />
                <div className="team-card-corner team-card-corner3" />
                <div className="team-card-corner team-card-corner4" />
                <div className="img-wrap">
                  <div className="team-img">
                    <img src="/img/team/1-4.png" alt="Team" />
                  </div>
                  <img
                    className="game-logo"
                    src="/img/team/game-logo1-4.png"
                    alt="Team"
                  />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="team-details.html">Eva Raina</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="th-team team-card">
                <div className="team-card-corner team-card-corner1" />
                <div className="team-card-corner team-card-corner2" />
                <div className="team-card-corner team-card-corner3" />
                <div className="team-card-corner team-card-corner4" />
                <div className="img-wrap">
                  <div className="team-img">
                    <img src="/img/team/1-5.png" alt="Team" />
                  </div>
                  <img
                    className="game-logo"
                    src="/img/team/game-logo1-5.png"
                    alt="Team"
                  />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="team-details.html">Robin Cloth</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="th-team team-card">
                <div className="team-card-corner team-card-corner1" />
                <div className="team-card-corner team-card-corner2" />
                <div className="team-card-corner team-card-corner3" />
                <div className="team-card-corner team-card-corner4" />
                <div className="img-wrap">
                  <div className="team-img">
                    <img src="/img/team/1-1.png" alt="Team" />
                  </div>
                  <img
                    className="game-logo"
                    src="/img/team/game-logo1-1.png"
                    alt="Team"
                  />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="team-details.html">Max Alexis</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="th-team team-card">
                <div className="team-card-corner team-card-corner1" />
                <div className="team-card-corner team-card-corner2" />
                <div className="team-card-corner team-card-corner3" />
                <div className="team-card-corner team-card-corner4" />
                <div className="img-wrap">
                  <div className="team-img">
                    <img src="/img/team/1-2.png" alt="Team" />
                  </div>
                  <img
                    className="game-logo"
                    src="/img/team/game-logo1-2.png"
                    alt="Team"
                  />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="team-details.html">Wilium Lili</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="th-team team-card">
                <div className="team-card-corner team-card-corner1" />
                <div className="team-card-corner team-card-corner2" />
                <div className="team-card-corner team-card-corner3" />
                <div className="team-card-corner team-card-corner4" />
                <div className="img-wrap">
                  <div className="team-img">
                    <img src="/img/team/1-3.png" alt="Team" />
                  </div>
                  <img
                    className="game-logo"
                    src="/img/team/game-logo1-3.png"
                    alt="Team"
                  />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="team-details.html">Mac Marsh</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="th-team team-card">
                <div className="team-card-corner team-card-corner1" />
                <div className="team-card-corner team-card-corner2" />
                <div className="team-card-corner team-card-corner3" />
                <div className="team-card-corner team-card-corner4" />
                <div className="img-wrap">
                  <div className="team-img">
                    <img src="/img/team/1-4.png" alt="Team" />
                  </div>
                  <img
                    className="game-logo"
                    src="/img/team/game-logo1-4.png"
                    alt="Team"
                  />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="team-details.html">Eva Raina</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="th-team team-card">
                <div className="team-card-corner team-card-corner1" />
                <div className="team-card-corner team-card-corner2" />
                <div className="team-card-corner team-card-corner3" />
                <div className="team-card-corner team-card-corner4" />
                <div className="img-wrap">
                  <div className="team-img">
                    <img src="/img/team/1-5.png" alt="Team" />
                  </div>
                  <img
                    className="game-logo"
                    src="/img/team/game-logo1-5.png"
                    alt="Team"
                  />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="team-details.html">Robin Cloth</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          data-slider-prev="#teamSlider1"
          className="slider-arrow slider-prev"
        >
          <i className="far fa-arrow-left" />
        </button>
        <button
          data-slider-next="#teamSlider1"
          className="slider-arrow slider-next"
        >
          <i className="far fa-arrow-right" />
        </button>
      </div>
    </div>
  </section>
  <div className="container th-container4">
    <div className="cta-area-1">
      <div className="cta-bg-shape-border">
        <svg
          width={1464}
          height={564}
          viewBox="0 0 1464 564"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1463.5 30V534C1463.5 550.292 1450.29 563.5 1434 563.5H1098H927.426C919.603 563.5 912.099 560.392 906.567 554.86L884.14 532.433C878.42 526.713 870.663 523.5 862.574 523.5H601.426C593.337 523.5 585.58 526.713 579.86 532.433L557.433 554.86C551.901 560.392 544.397 563.5 536.574 563.5H366H30C13.7076 563.5 0.5 550.292 0.5 534V30C0.5 13.7076 13.7076 0.5 30 0.5H366H536.574C544.397 0.5 551.901 3.60802 557.433 9.14034L579.86 31.5668C585.58 37.2866 593.337 40.5 601.426 40.5H862.574C870.663 40.5 878.42 37.2866 884.14 31.5668L906.567 9.14035C912.099 3.60803 919.603 0.5 927.426 0.5H1098H1434C1450.29 0.5 1463.5 13.7076 1463.5 30Z"
            stroke="url(#paint0_linear_202_547)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_202_547"
              x1={0}
              y1={0}
              x2="1505.47"
              y2="412.762"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="var(--theme-color)" />
              <stop offset={1} stopColor="var(--theme-color2)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="cta-wrap-bg bg-repeat"
        data-bg-src="/img/bg/jiji-bg.png"
        data-mask-src="/img/shape/cta-bg-shape1.svg"
      >
        <div className="cta-bg-img">
          <img src="/img/bg/cta-sec1-bg.png" alt="img" />
        </div>
        <div className="cta-thumb">
          <img src="/img/normal/cta1-1.png" alt="img" />
        </div>
      </div>
      <div className="cta-wrap">
        <div className="row">
          <div className="col-xl-5">
            <div
              className="title-area mb-0 custom-anim-left wow animated"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <span className="sub-title">Best Consultancy</span>
              <h2 className="sec-title">
                Join Our Facebook Community To Become{" "}
                <span className="text-theme fw-medium">
                  Next Level Program For You !
                </span>
              </h2>
              <p className="mt-30 mb-30">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis enim delectus nisi iusto quas minima, molestiae a
                deleniti, atque temporibus magnam dolore unde eveniet? In.
              </p>
              <a href="contact.html" className="th-btn">
                JOIN COMMUNITY <i className="fa-solid fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="space">
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-auto">
          <div
            className="title-area custom-anim-left wow animated text-md-start text-center"
            data-wow-duration="1.5s"
            data-wow-delay="0.2s"
          >
            <span className="sub-title"># Gamer Shop</span>
            <h2 className="sec-title">
              Our Latest Gaming Products <span className="text-theme">!</span>
            </h2>
          </div>
        </div>
        <div className="col-md-auto d-none d-md-block">
          <div className="sec-btn">
            <div className="icon-box">
              <button
                data-slider-prev="#productSlider1"
                className="slider-arrow style2 default"
              >
                <i className="far fa-arrow-left" />
              </button>
              <button
                data-slider-next="#productSlider1"
                className="slider-arrow style2 default"
              >
                <i className="far fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="swiper th-slider has-shadow"
        id="productSlider1"
        data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="th-product product-grid">
              <div className="product-img">
                <img
                  src="/img/product/product_1_1.png"
                  alt="Product Image"
                />
                <div className="overlay gradient-border" />
                <div className="actions">
                  <a href="cart.html" className="icon-btn">
                    <i className="far fa-cart-plus" />
                  </a>{" "}
                  <a href="wishlist.html" className="icon-btn">
                    <i className="fas fa-heart" />
                  </a>
                  <a href="#QuickView" className="icon-btn popup-content">
                    <i className="fas fa-eye" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a href="shop-details.html">Gaming Headphone</a>
                </h3>
                <span className="price">$177.85</span>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="th-product product-grid">
              <div className="product-img">
                <img
                  src="/img/product/product_1_2.png"
                  alt="Product Image"
                />
                <div className="overlay gradient-border" />
                <div className="actions">
                  <a href="cart.html" className="icon-btn">
                    <i className="far fa-cart-plus" />
                  </a>{" "}
                  <a href="wishlist.html" className="icon-btn">
                    <i className="fas fa-heart" />
                  </a>
                  <a href="#QuickView" className="icon-btn popup-content">
                    <i className="fas fa-eye" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a href="shop-details.html">Gaming Mouse</a>
                </h3>
                <span className="price">$120.00</span>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="th-product product-grid">
              <div className="product-img">
                <img
                  src="/img/product/product_1_3.png"
                  alt="Product Image"
                />
                <div className="overlay gradient-border" />
                <div className="actions">
                  <a href="cart.html" className="icon-btn">
                    <i className="far fa-cart-plus" />
                  </a>{" "}
                  <a href="wishlist.html" className="icon-btn">
                    <i className="fas fa-heart" />
                  </a>
                  <a href="#QuickView" className="icon-btn popup-content">
                    <i className="fas fa-eye" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a href="shop-details.html">Gaming Keyboard</a>
                </h3>
                <span className="price">$96.85</span>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="th-product product-grid">
              <div className="product-img">
                <img
                  src="/img/product/product_1_4.png"
                  alt="Product Image"
                />
                <div className="overlay gradient-border" />
                <div className="actions">
                  <a href="cart.html" className="icon-btn">
                    <i className="far fa-cart-plus" />
                  </a>{" "}
                  <a href="wishlist.html" className="icon-btn">
                    <i className="fas fa-heart" />
                  </a>
                  <a href="#QuickView" className="icon-btn popup-content">
                    <i className="fas fa-eye" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a href="shop-details.html">Gaming Chair</a>
                </h3>
                <span className="price">
                  $08.85<del>$06.99</del>
                </span>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="th-product product-grid">
              <div className="product-img">
                <img
                  src="/img/product/product_1_5.png"
                  alt="Product Image"
                />
                <div className="overlay gradient-border" />
                <div className="actions">
                  <a href="cart.html" className="icon-btn">
                    <i className="far fa-cart-plus" />
                  </a>{" "}
                  <a href="wishlist.html" className="icon-btn">
                    <i className="fas fa-heart" />
                  </a>
                  <a href="#QuickView" className="icon-btn popup-content">
                    <i className="fas fa-eye" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a href="shop-details.html">Microphone G9000</a>
                </h3>
                <span className="price">$32.85</span>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="th-product product-grid">
              <div className="product-img">
                <img
                  src="/img/product/product_1_6.png"
                  alt="Product Image"
                />
                <div className="overlay gradient-border" />
                <div className="actions">
                  <a href="cart.html" className="icon-btn">
                    <i className="far fa-cart-plus" />
                  </a>{" "}
                  <a href="wishlist.html" className="icon-btn">
                    <i className="fas fa-heart" />
                  </a>
                  <a href="#QuickView" className="icon-btn popup-content">
                    <i className="fas fa-eye" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a href="shop-details.html">Play Station Controller</a>
                </h3>
                <span className="price">$30.85</span>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="th-product product-grid">
              <div className="product-img">
                <img
                  src="/img/product/product_1_7.png"
                  alt="Product Image"
                />
                <div className="overlay gradient-border" />
                <div className="actions">
                  <a href="cart.html" className="icon-btn">
                    <i className="far fa-cart-plus" />
                  </a>{" "}
                  <a href="wishlist.html" className="icon-btn">
                    <i className="fas fa-heart" />
                  </a>
                  <a href="#QuickView" className="icon-btn popup-content">
                    <i className="fas fa-eye" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a href="shop-details.html">PlayStation VR</a>
                </h3>
                <span className="price">$232.85</span>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="th-product product-grid">
              <div className="product-img">
                <img
                  src="/img/product/product_1_8.png"
                  alt="Product Image"
                />
                <div className="overlay gradient-border" />
                <div className="actions">
                  <a href="cart.html" className="icon-btn">
                    <i className="far fa-cart-plus" />
                  </a>{" "}
                  <a href="wishlist.html" className="icon-btn">
                    <i className="fas fa-heart" />
                  </a>
                  <a href="#QuickView" className="icon-btn popup-content">
                    <i className="fas fa-eye" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a href="shop-details.html">Wireless speaker</a>
                </h3>
                <span className="price">$30.85</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-md-none mt-40 text-center">
        <div className="icon-box">
          <button
            data-slider-prev="#productSlider1"
            className="slider-arrow style2 default"
          >
            <i className="far fa-arrow-left" />
          </button>
          <button
            data-slider-next="#productSlider1"
            className="slider-arrow style2 default"
          >
            <i className="far fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  </section>
  <section className="" id="blog-sec">
    <div className="container">
      <div
        className="title-area text-center custom-anim-top wow animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
      >
        <span className="sub-title"># Latest News</span>
        <h2 className="sec-title">
          Stay Updated With Our Blog <span className="text-theme">!</span>
        </h2>
      </div>
      <div className="slider-area">
        <div
          className="swiper th-slider has-shadow"
          id="blogSlider1"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="/img/blog/blog_1_1.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="far fa-user" />
                      By Jonson
                    </a>{" "}
                    <a href="blog.html">
                      <i className="far fa-calendar" />
                      30 Nov, 2024
                    </a>
                  </div>
                  <h3 className="blog-title">
                    <a href="blog-details.html">
                      Strategies for Dominating Your Favorite Game
                    </a>
                  </h3>
                  <a href="blog-details.html" className="link-btn style2">
                    Read More <i className="fas fa-arrow-right ms-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="/img/blog/blog_1_2.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="far fa-user" />
                      By Jonson
                    </a>{" "}
                    <a href="blog.html">
                      <i className="far fa-calendar" />
                      25 Dec, 2024
                    </a>
                  </div>
                  <h3 className="blog-title">
                    <a href="blog-details.html">
                      Breaking Barriers and Shaping the Future
                    </a>
                  </h3>
                  <a href="blog-details.html" className="link-btn style2">
                    Read More <i className="fas fa-arrow-right ms-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="/img/blog/blog_1_3.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="far fa-user" />
                      By Jonson
                    </a>{" "}
                    <a href="blog.html">
                      <i className="far fa-calendar" />
                      23 Jun, 2024
                    </a>
                  </div>
                  <h3 className="blog-title">
                    <a href="blog-details.html">
                      Taking Customization to the Next Level
                    </a>
                  </h3>
                  <a href="blog-details.html" className="link-btn style2">
                    Read More <i className="fas fa-arrow-right ms-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="/img/blog/blog_1_1.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="far fa-user" />
                      By Jonson
                    </a>{" "}
                    <a href="blog.html">
                      <i className="far fa-calendar" />
                      30 Nov, 2024
                    </a>
                  </div>
                  <h3 className="blog-title">
                    <a href="blog-details.html">
                      Strategies for Dominating Your Favorite Game
                    </a>
                  </h3>
                  <a href="blog-details.html" className="link-btn style2">
                    Read More <i className="fas fa-arrow-right ms-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="/img/blog/blog_1_2.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="far fa-user" />
                      By Jonson
                    </a>{" "}
                    <a href="blog.html">
                      <i className="far fa-calendar" />
                      25 Dec, 2024
                    </a>
                  </div>
                  <h3 className="blog-title">
                    <a href="blog-details.html">
                      Breaking Barriers and Shaping the Future
                    </a>
                  </h3>
                  <a href="blog-details.html" className="link-btn style2">
                    Read More <i className="fas fa-arrow-right ms-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="/img/blog/blog_1_3.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="far fa-user" />
                      By Jonson
                    </a>{" "}
                    <a href="blog.html">
                      <i className="far fa-calendar" />
                      23 Jun, 2024
                    </a>
                  </div>
                  <h3 className="blog-title">
                    <a href="blog-details.html">
                      Taking Customization to the Next Level
                    </a>
                  </h3>
                  <a href="blog-details.html" className="link-btn style2">
                    Read More <i className="fas fa-arrow-right ms-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="client-area-1 overflow-hidden space">
    <div className="container-fluid p-0">
      <div
        className="swiper th-slider client-slider1"
        data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"400":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"4"},"1200":{"slidesPerView":"7"},"1300":{"slidesPerView":"9"}}, "spaceBetween": "0", "loop": "true"}'
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <a href="#" className="client-card">
              <img src="/img/client/1-1.png" alt="Image" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="client-card">
              <img src="/img/client/1-2.png" alt="Image" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="client-card">
              <img src="/img/client/1-3.png" alt="Image" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="client-card">
              <img src="/img/client/1-4.png" alt="Image" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="client-card">
              <img src="/img/client/1-5.png" alt="Image" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="client-card">
              <img src="/img/client/1-6.png" alt="Image" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="client-card">
              <img src="/img/client/1-7.png" alt="Image" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="client-card">
              <img src="/img/client/1-8.png" alt="Image" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="client-card">
              <img src="/img/client/1-9.png" alt="Image" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="client-card">
              <img src="/img/client/1-1.png" alt="Image" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="client-card">
              <img src="/img/client/1-2.png" alt="Image" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="client-card">
              <img src="/img/client/1-3.png" alt="Image" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="client-card">
              <img src="/img/client/1-4.png" alt="Image" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="client-card">
              <img src="/img/client/1-5.png" alt="Image" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="client-card">
              <img src="/img/client/1-6.png" alt="Image" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="client-card">
              <img src="/img/client/1-7.png" alt="Image" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="client-card">
              <img src="/img/client/1-8.png" alt="Image" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="client-card">
              <img src="/img/client/1-9.png" alt="Image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </Layout>
    </>
  );
}
