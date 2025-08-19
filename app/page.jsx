import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide" style={{ background: 'url(/images/chairs.jpg) no-repeat' }}>
              <div className="content">
                <span>style, rejuvenate, relax </span>
                <h3>style your hair beautifully</h3>
                <Link href="/package" className="btn">Discover more</Link>
              </div>
            </div>
            <div className="swiper-slide slide" style={{ background: 'url(/images/spatable2.jpeg) no-repeat' }}>
              <div className="content">
                <span>style, rejuvenate, relax </span>
                <h3>rejuvenate the skin</h3>
                <Link href="/package" className="btn">discover more</Link>
              </div>
            </div>
            <div className="swiper-slide slide" style={{ background: 'url(/images/spatable.jpg) no-repeat' }}>
              <div className="content">
                <span>style, rejuvenate, relax </span>
                <h3>be more relaxed</h3>
                <Link href="/package" className="btn">Discover more</Link>
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
            <Image src="/images/icon-1.png" alt="" width={64} height={64} />
            <h3>Hair</h3>
          </div>
          <div className="box">
            <Image src="/images/icon-2.png" alt="" width={64} height={64} />
            <h3>Nail</h3>
          </div>
          <div className="box">
            <Image src="/images/icon-3.png" alt="" width={64} height={64} />
            <h3>Massage</h3>
          </div>
          <div className="box">
            <Image src="/images/icon-4.png" alt="" width={64} height={64} />
            <h3>Facial</h3>
          </div>
          <div className="box">
            <Image src="/images/icon-5.png" alt="" width={64} height={64} />
            <h3>IPL Hair Removal</h3>
          </div>
          <div className="box">
            <Image src="/images/icon-6.png" alt="" width={64} height={64} />
            <h3>Warts Removal</h3>
          </div>
        </div>
      </section>

      <section className="home-about">
        <div className="image">
          <Image src="/images/about-1.jpg" alt="" width={600} height={400} />
        </div>
        <div className="content">
          <h3>About Us</h3>
          <p>Rose Heavenly Salon and Spa was opened to the public on December 8, 2020 in Dapdap, Bamban, Tarlac in conjunction with the Feast of the Immaculate Conception of Our Mother, Mary.</p>
          <Link href="/about" className="btn">Read more</Link>
        </div>
      </section>

      <section className="home-packages">
        <h1 className="heading-title"> our promos </h1>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <Image src="/images/promo-1.png" alt="" width={600} height={400} />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <Image src="/images/promo-2.png" alt="" width={600} height={400} />
            </div>
          </div>
        </div>
        <div className="load-more"> <Link href="/package" className="btn">Load More</Link> </div>
      </section>

      <Script src="https://unpkg.com/swiper@7/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/js/script.js" strategy="afterInteractive" />
    </>
  );
}


