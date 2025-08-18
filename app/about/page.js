export default function About() {
  return (
    <>
      <link rel="stylesheet" href="/css/about-style.css" />
      <section className="header">
        <a href="/" className="logo">Rose Heavenly Salon and Spa</a>
        <nav className="navbar">
          <a href="/about">About Us</a>
          <a href="/package">Services</a>
          <a href="/calendar">Calendar</a>
          <a href="/schedule">Schedule</a>
          <a href="/account">My Account</a>
        </nav>
        <div id="menu-btn" className="fas fa-bars"></div>
      </section>

      <div className="heading" style={{ background: 'url(/images/brush-2.png) no-repeat' }}>
        <h1>about us</h1>
      </div>

      <section className="about">
        <div className="about-container">
          <div className="image"><img src="/images/about-2.jpg" alt="" /></div>
          <div className="content">
            <h3>Why Choose us?</h3>
            <p>We are committed to providing an exceptional experience for our customers. We have a passion for making people feel beautiful, relaxed and refreshed! Our goal is to provide a relaxing environment that you can enjoy from Tuesday to Sunday from 8am to 8pm.</p>
          </div>
        </div>

        <div className="about-container">
          <div className="image"><img src="/images/about-m.jpg" alt="" /></div>
          <div className="content">
            <h3>Mission</h3>
            <p>Our mission is to create an environment that promotes healing, wellness, relaxation and beauty. We strive to offer the highest quality of service, in a private, relaxing atmosphere where people can come for beauty and rejuvenation needs.</p>
          </div>
        </div>

        <div className="about-container">
          <div className="image"><img src="/images/about-v.jpg" alt="" /></div>
          <div className="content">
            <h3>Vision</h3>
            <p>Our vision is to help people look good and feel good about themselves by providing high quality services at reasonable prices in a clean and comfortable environment.</p>
          </div>
        </div>
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
    </>
  );
}

