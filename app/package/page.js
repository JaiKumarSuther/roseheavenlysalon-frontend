export default function Services() {
  return (
    <>
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
        <h1>Services</h1>
      </div>

      <section className="packages">
        <h1 className="heading-title">our services</h1>
        <div className="box-container">
          <div className="box" id="hair">
            <div className="image"><img src="/images/hairservice.jpg" alt="" /></div>
            <div className="content">
              <h3>Hair</h3>
              <p>Haircut - ₱50</p>
              <p>Haircut (with Style) - ₱70</p>
              <p>Hair Color (Ordinary) - ₱350</p>
              <p>Hair Color (Organic) - ₱500</p>
              <p>Special Color (with Amonia) - ₱600 </p>
              <p>Hair Color (with Brazillian Treatment) - ₱1000 </p>
              <p>Brazillian Treatment(Organic) - ₱700</p>
              <p>Special Brazillian Treatment - ₱1200</p>
              <p>Rebond (Organic) - ₱700</p>
              <p>Rebond (with Semi Di Lina) - ₱1000</p>
              <p>Rebond (with Hair Color and Brazillian Treatment) - ₱1800</p>
            </div>
          </div>

          <div className="box">
            <div className="image"><img src="/images/nailservices.jpg" alt="" /></div>
            <div className="content">
              <h3>Nails</h3>
              <p>Manicure - ₱60</p>
              <p>Pedicure - ₱70</p>
              <p>Nail Art - ₱50*</p>
              <p>Parrafin Hand - ₱150</p>
              <p>Parrafin Foot - ₱200</p>
              <p>Gel Polish - ₱300</p>
              <p>Manicure & Pedicure (with Footspa) - ₱300</p>
              <p>Manicure & Handspa (with Whitening Mask) - ₱300</p>
              <p>Manicure & Pedicure (w/ Footspa Detox & Whitening - ₱500</p>
              <p>Manicure & Pedicure (with Signature Footspa) - ₱500</p>
              <p>Nail Extension Polygel - ₱999</p>
            </div>
          </div>

          <div className="box">
            <div className="image"><img src="/images/massageservice.jpg" alt="" /></div>
            <div className="content">
              <h3>Massasge</h3>
              <p>Basic Massage (1 hour) - ₱300</p>
              <p>Swedish Whole Body (1 hour) - ₱350</p>
              <p>Thai Whole Cody (1 hour) - ₱350</p>
              <p>Stone Whole Body (1 hour) - ₱350</p>
              <p>Signature Whole Body (1.5 hour) - ₱450</p>
              <br />
              <h3>Bleaching</h3>
              <p>Whole Body Scrub With Bleaching - ₱500</p>
            </div>
          </div>

          <div className="box">
            <div className="image"><img src="/images/facialservice.jpg" alt="" /></div>
            <div className="content">
              <h3>Facial</h3>
              <p>Regular Facial with Vitamin C - ₱300</p>
              <p>Facial wtih Skin Scrubber - ₱330</p>
              <p>Facial with Diamond Peel - ₱350</p>
              <p>Facial with Galvanic Spa - ₱400</p>
              <p>Facial with Lifting - ₱400</p>
              <br />
              <h3>EyeLash</h3>
              <p>Eyelash Perm - ₱300</p>
              <p>Russian Volume</p>
              <p>(Human Hair) 3D Applying - ₱500</p>
            </div>
          </div>

          <div className="box">
            <div className="image"><img src="/images/IPLservices.jpg" alt="" /></div>
            <div className="content">
              <h3>IPL Hair Removal</h3>
              <p>Under Arms - ₱300</p>
              <p>Under Arms Package <br/>(10 sessions) - ₱2200</p>
              <p>Leg (1 session) - ₱1200</p>
              <br />
              <h3>Waxing</h3>
              <p>Underarm Waxing - ₱200</p>
              <p>Brazilian Waxing - ₱500 </p>
            </div>
          </div>

          <div className="box" id="warts">
            <div className="image"><img src="/images/wartservice.jpg" alt="" /></div>
            <div className="content">
              <h3>Warts Removal</h3>
              <p>Face - ₱500</p>
              <p>Neck - ₱700</p>
              <p>Chest - ₱750</p>
              <p>Back - ₱1000</p>
              <p>Whole Body - ₱2500</p>
              <p>Face & Neck with Healing Cream <br />+ Honey Cleansing Milk Package - ₱1600 </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-offer">
        <div className="content">
          <h3></h3>
          <p>The prices indicated for hair services are the starting price. Price range may varies depending on customers hair.</p>
          <a href="/schedule" className="btn">Book Now</a>
        </div>
      </section>

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Quick links</h3>
            <a href="/"> <i className="fas fa-angle-right"></i> Home</a>
            <a href="/about"> <i className="fas fa-angle-right"></i> About</a>
            <a href="/package"> <i className="fas fa-angle-right"></i> Servies</a>
            <a href="/schedule"> < i className="fas fa-angle-right"></i> Book</a>
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

