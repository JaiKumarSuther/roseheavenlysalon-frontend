export default function Calendar() {
  return (
    <>
      <link rel="stylesheet" href="/css/styleCal.css" />
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

      <div className="calendar-container">
        <div id="calendar_div"></div>
      </div>

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
