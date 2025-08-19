import Image from "next/image";

export default function About() {
  return (
    <>
      <link rel="stylesheet" href="/css/about-style.css" />

      <div className="heading" style={{ background: 'url(/images/brush-2.png) no-repeat' }}>
        <h1>about us</h1>
      </div>

      <section className="about">
        <div className="about-container">
          <div className="image"><Image src="/images/about-2.jpg" alt="" width={600} height={400} /></div>
          <div className="content">
            <h3>Why Choose us?</h3>
            <p>We are committed to providing an exceptional experience for our customers. We have a passion for making people feel beautiful, relaxed and refreshed! Our goal is to provide a relaxing environment that you can enjoy from Tuesday to Sunday from 8am to 8pm.</p>
          </div>
        </div>

        <div className="about-container">
          <div className="image"><Image src="/images/about-m.jpg" alt="" width={600} height={400} /></div>
          <div className="content">
            <h3>Mission</h3>
            <p>Our mission is to create an environment that promotes healing, wellness, relaxation and beauty. We strive to offer the highest quality of service, in a private, relaxing atmosphere where people can come for beauty and rejuvenation needs.</p>
          </div>
        </div>

        <div className="about-container">
          <div className="image"><Image src="/images/about-v.jpg" alt="" width={600} height={400} /></div>
          <div className="content">
            <h3>Vision</h3>
            <p>Our vision is to help people look good and feel good about themselves by providing high quality services at reasonable prices in a clean and comfortable environment.</p>
          </div>
        </div>
      </section>
    </>
  );
}


