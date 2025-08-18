import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <section className="header">
        <img src="/images/image-logo.png" alt="" className="image-logo" />
        <a href="#" className="logo">Rose Heavenly Salon and Spa</a>
        <nav className="navbar">
          <a href="/about">About us</a>
          <a href="/package">Services</a>
          <a href="/calendar">Calendar</a>
          <a href="/schedule">Schedule</a>
          <a href="/login">Sign In</a>
        </nav>
        <div id="menu-btn" className="fas fa-bars"></div>
      </section>

      <section className="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide" style={{ background: 'url(/images/chairs.jpg) no-repeat' }}>
              <div className="content">
                <span>style, rejuvenate, relax </span>
                <h3>style your hair beautifully</h3>
                <a href="/package" className="btn">Discover more</a>
              </div>
            </div>
            <div className="swiper-slide slide" style={{ background: 'url(/images/spatable2.jpeg) no-repeat' }}>
              <div className="content">
                <span>style, rejuvenate, relax </span>
                <h3>rejuvenate the skin</h3>
                <a href="/package" className="btn">discover more</a>
              </div>
            </div>
            <div className="swiper-slide slide" style={{ background: 'url(/images/spatable.jpg) no-repeat' }}>
              <div className="content">
                <span>style, rejuvenate, relax </span>
                <h3>be more relaxed</h3>
                <a href="/package" className="btn">Discover more</a>
              </div>
            </div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>

      <section className="services">
        <h1 className="heading-title"> our services </h1>
        <div className="box-container">
          <div className="box">
            <img src="/images/icon-1.png" alt="" />
            <h3>Hair</h3>
          </div>
          <div className="box">
            <img src="/images/icon-2.png" alt="" />
            <h3>Nail</h3>
          </div>
          <div className="box">
            <img src="/images/icon-3.png" alt="" />
            <h3>Massage</h3>
          </div>
          <div className="box">
            <img src="/images/icon-4.png" alt="" />
            <h3>Facial</h3>
          </div>
          <div className="box">
            <img src="/images/icon-5.png" alt="" />
            <h3>IPL Hair Removal</h3>
          </div>
          <div className="box">
            <img src="/images/icon-6.png" alt="" />
            <h3>Warts Removal</h3>
          </div>
        </div>
      </section>

      <section className="home-about">
        <div className="image">
          <img src="/images/about-1.jpg" alt="" />
        </div>
        <div className="content">
          <h3>About Us</h3>
          <p>Rose Heavenly Salon and Spa was opened to the public on December 8, 2020 in Dapdap, Bamban, Tarlac in conjunction with the Feast of the Immaculate Conception of Our Mother, Mary.</p>
          <a href="/about" className="btn">Read more</a>
        </div>
      </section>

      <section className="home-packages">
        <h1 className="heading-title"> our promos </h1>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="/images/promo-1.png" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="/images/promo-2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="load-more"> <a href="/package" className="btn">Load More</a> </div>
      </section>

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Quick links</h3>
            <a href="/"> <i className="fas fa-angle-right"></i> Home</a>
            <a href="/about"> <i className="fas fa-angle-right"></i> About</a>
            <a href="/package"> <i className="fas fa-angle-right"></i> Servies</a>
            <a href="/schedule"> <i className="fas fa-angle-right"></i> Book</a>
          </div>
          <div className="box">
            <h3>Extra links</h3>
            <a href="/about"> <i className="fas fa-angle-right"></i> About Us</a>
            <a href="#"> <i className="fas fa-angle-right"></i> Privacy Policy</a>
            <a href="#"> <i className="fas fa-angle-right"></i> Terms of Use</a>
          </div>
          <div className="box">
            <h3>Contact info</h3>
            <a href="#"> <i className="fas fa-phone"></i> +63 968 312 3303 </a>
            <a href="#"> <i className="fas fa-envelope"></i> rhsalonandspa@gmail.com </a>
            <a href="#"> <i className="fas fa-map"></i> Dapdap, Bamban, Tarlac </a>
          </div>
          <div className="box">
            <h3>Follow us</h3>
            <a href="https://www.facebook.com/roseheavenlysalon"> <i className="fab fa-facebook-f"></i> Facebook </a>
            <a href="#"> <i className="fab fa-instagram"></i> Instagram </a>
          </div>
        </div>
      </section>

      <Script src="https://unpkg.com/swiper@7/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/js/script.js" strategy="afterInteractive" />
    </>
  );
}
