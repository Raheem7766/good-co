import React from "react";
import "./style.css";
import "https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css";
import "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css";

const HomeSection = () => {
  return (
    <div>
      <div id="nav">
        <div id="logo">
          {/* SVG Logo */}
          <svg
            className="logo"
            viewBox="0 0 62 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M46.8316 0C...Z" fill="currentColor" />
            {/* Other <path> elements from logo */}
          </svg>
        </div>
        <div id="nav-part2">
          <div id="links"></div>
          <div id="icons">
            <i className="ri-menu-fill" id="menu-button"></i>
            <i className="ri-shopping-cart-2-line" id="cart-button"></i>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="mobile-menu">
        <a href="/butterfky/shop">Shop</a>
        <a href="/butterfky/studio">Studio</a>
        <a href="/butterfky/donate">Donate</a>
        <a href="/butterfky/main">Footer</a>
      </div>

      {/* Cart overlay */}
      <div className="cart-overlay">
        <span className="close-button">&times;</span>
        <div className="cart-content">
          <h2 className="cart-empty-message">Your cart is empty.</h2>
          <a className="cart-button" href="/butterfky/gallery">
            SEE ALL GOOD THINGS
          </a>
        </div>
        <div className="scrolling-wrapper">
          <div className="scrolling-text">
            CART EMPTY CART EMPTY CART EMPTY CART EMPTY
          </div>
          <div className="scrolling-text" aria-hidden="true">
            CART EMPTY CART EMPTY CART EMPTY CART EMPTY
          </div>
        </div>
      </div>

      <div id="cursor"></div>

      <div id="main">
        <div id="page1">
          <h1>Change</h1>
          <h1>the course</h1>
          <div id="video-container">
            <div id="play">PLAY</div>
            <video autoPlay loop muted src="./video.mp4"></video>
          </div>
        </div>

        <div id="page2">
          {[1, 2, 3].map((num) => (
            <div key={num} id={`elem${num}`} className="elem">
              <img
                data-scroll
                data-scroll-speed="1"
                src={
                  num === 1
                    ? "https://cdn.sanity.io/images/w8f1ak3c/production/ee1c2e8894a4c47c4f4ce71b8973589f8a5045b2-902x1500.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format"
                    : num === 2
                    ? "https://cdn.sanity.io/images/w8f1ak3c/production/bb84b7106e978c37f5aa92c8d5781751b2e9d9f2-900x1500.png?w=640&h=1067&auto=format"
                    : "https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format"
                }
                alt=""
              />
              <div data-scroll data-scroll-speed="-2" className="dets"></div>
            </div>
          ))}
        </div>

        <section className="hero-section">
          <div className="tagline-container">
            <h1 className="tagline">
              <div className="line">
                <span className="word">WE</span>
                <span className="word">BELIEVE</span>
                <span className="word">IN</span>
                <span className="word">PEOPLE,</span>
              </div>
              <div className="line">
                <span className="word">UNTIL</span>
                <span className="word">THEY</span>
                <span className="word">BELIEVE</span>
                <span className="word">IN</span>
              </div>
              <div className="line">
                <span className="word">THEMSELVES</span>
                <span className="word">AGAIN.</span>
              </div>
            </h1>
          </div>

          <div className="mission-container">
            <p className="mission-text">
              Everything we do is designed to rebuild self worth and
              independence, in order to break free from the cycle of
              disadvantage.
            </p>

            <p className="impact-text">
              With every purchase you make with us, you're helping to change the
              course of someone's life; you're walking alongside vulnerable
              women as they find their way home again.
            </p>

            <button className="cta">
              <span>Get more info</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>
        </section>

        <div id="page3">
          <div className="child" id="child1">
            <img
              src="https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format"
              alt=""
            />
          </div>
          {/* Continue rest of #page3 */}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
