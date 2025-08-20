import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">About Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-black">
            Learn more about Rose Heavenly Salon and Spa's story and commitment to excellence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          {/* Our Story */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-black">
                Our Story
              </h2>
              <div className="bg-gradient-card rounded-2xl p-8 border border-primary/10 shadow-soft">
                <p className="text-lg leading-relaxed mb-6">
                  Rose Heavenly Salon and Spa opened to the public on <strong>December 8, 2020</strong>, in Dapdap, Bamban, Tarlac, 
                  in conjunction with the Feast of the Immaculate Conception of Our Mother, Mary.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to providing an exceptional experience for our customers. We have a passion for 
                  making people feel beautiful, relaxed, and refreshed! Our goal is to provide a relaxing environment 
                  that you can enjoy from Tuesday to Sunday from 8am to 8pm.
                </p>
              </div>
            </div>
          </div>

          {/* About Containers */}
          <div className="space-y-16">
            {/* Why Choose Us */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <Image 
                  src="/images/about-2.jpg" 
                  alt="Why Choose Us" 
                  width={600} 
                  height={400}
                  className="w-full h-[500px] object-cover object-bottom"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Why Choose Us?
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are committed to providing an exceptional experience for our customers. We have a passion for 
                  making people feel beautiful, relaxed and refreshed! Our goal is to provide a relaxing environment 
                  that you can enjoy from Tuesday to Sunday from 8am to 8pm.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h3 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Mission
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to create an environment that promotes healing, wellness, relaxation and beauty. 
                  We strive to offer the highest quality of service, in a private, relaxing atmosphere where people 
                  can come for beauty and rejuvenation needs.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-elegant order-1 lg:order-2">
                <Image 
                  src="/images/about-m.jpg" 
                  alt="Mission" 
                  width={600} 
                  height={400}
                  className="w-full h-[500px] object-cover object-bottom"
                />
              </div>
            </div>

            {/* Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <Image 
                  src="/images/about-v.jpg" 
                  alt="Vision" 
                  width={600} 
                  height={400}
                  className="w-full h-[500px] object-cover object-bottom"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Vision
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our vision is to help people look good and feel good about themselves by providing high quality 
                  services at reasonable prices in a clean and comfortable environment.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center bg-gradient-card rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Experience the Rose Heavenly Difference
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have experienced our exceptional beauty and wellness services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-bounce shadow-elegant">
                Book Your Visit
              </button>
              <button className="bg-gradient-card text-foreground border border-primary/20 px-8 py-3 rounded-lg font-semibold hover:shadow-rose hover:scale-[1.02] transition-bounce">
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


