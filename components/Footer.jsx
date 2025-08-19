import Link from "next/link";

export default function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Quick links</h3>
          <Link href="/"> <i className="fas fa-angle-right"></i> Home</Link>
          <Link href="/about"> <i className="fas fa-angle-right"></i> About</Link>
          <Link href="/package"> <i className="fas fa-angle-right"></i> Services</Link>
          <Link href="/schedule"> <i className="fas fa-angle-right"></i> Book</Link>
        </div>
        <div className="box">
          <h3>Extra links</h3>
          <Link href="/about"> <i className="fas fa-angle-right"></i> About Us</Link>
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
  );
}


