import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: "hair",
      title: "Hair Services",
      image: "/images/hairservice.jpg",
      services: [
        "Haircut - ₱50",
        "Haircut (with Style) - ₱70", 
        "Hair Color (Ordinary) - ₱350",
        "Hair Color (Organic) - ₱500",
        "Special Color (with Amonia) - ₱600",
        "Hair Color (with Brazilian Treatment) - ₱1000",
        "Brazilian Treatment (Organic) - ₱700",
        "Special Brazilian Treatment - ₱1200",
        "Rebond (Organic) - ₱700",
        "Rebond (with Semi Di Lina) - ₱1000",
        "Rebond (with Hair Color and Brazilian Treatment) - ₱1800",
      ],
    },
    {
      id: "nails",
      title: "Nail Services",
      image: "/images/nailservices.jpg",
      services: [
        "Manicure - ₱60",
        "Pedicure - ₱70",
        "Nail Art - ₱50*",
        "Parrafin Hand - ₱150",
        "Parrafin Foot - ₱200",
        "Gel Polish - ₱300",
        "Manicure & Pedicure (with Footspa) - ₱300",
        "Manicure & Handspa (with Whitening Mask) - ₱300",
        "Manicure & Pedicure (w/ Footspa Detox & Whitening) - ₱500",
        "Manicure & Pedicure (with Signature Footspa) - ₱500",
        "Nail Extension Polygel - ₱999",
      ],
    },
    {
      id: "massage",
      title: "Massage & Bleaching",
      image: "/images/massageservice.jpg",
      services: [
        "Basic Massage (1 hour) - ₱300",
        "Swedish Whole Body (1 hour) - ₱350",
        "Thai Whole Body (1 hour) - ₱350",
        "Stone Whole Body (1 hour) - ₱350",
        "Signature Whole Body (1.5 hour) - ₱450",
        "Whole Body Scrub With Bleaching - ₱500",
      ],
    },
    {
      id: "facial",
      title: "Facial & Eyelash",
      image: "/images/facialservice.jpg",
      services: [
        "Regular Facial with Vitamin C - ₱300",
        "Facial with Skin Scrubber - ₱330",
        "Facial with Diamond Peel - ₱350",
        "Facial with Galvanic Spa - ₱400",
        "Facial with Lifting - ₱400",
        "Eyelash Perm - ₱300",
        "Russian Volume (Human Hair) 3D Applying - ₱500",
      ],
    },
    {
      id: "ipl",
      title: "IPL Hair Removal & Waxing",
      image: "/images/IPLservices.jpg",
      services: [
        "Under Arms - ₱300",
        "Under Arms Package (10 sessions) - ₱2200",
        "Leg (1 session) - ₱1200",
        "Underarm Waxing - ₱200",
        "Brazilian Waxing - ₱500",
      ],
    },
    {
      id: "warts",
      title: "Warts Removal",
      image: "/images/wartservice.jpg",
      services: [
        "Face - ₱500",
        "Neck - ₱700",
        "Chest - ₱750",
        "Back - ₱1000",
        "Whole Body - ₱2500",
        "Face & Neck with Healing Cream + Honey Cleansing Milk Package - ₱1600",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">Our Services</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-black">
            Discover our comprehensive range of beauty and wellness treatments
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((category) => (
              <div key={category.id} className="overflow-hidden bg-gradient-card border-primary/10 hover:shadow-elegant transition-all rounded-2xl">
                <div className="relative h-48">
                  <Image 
                    src={category.image} 
                    alt={category.title}
                    width={640}
                    height={420}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-2">
                    {category.services.map((service, index) => (
                      <div key={index} className="flex justify-between items-center py-1 border-b border-primary/10 last:border-b-0">
                        <span className="text-sm">{service.split(' - ')[0]}</span>
                        <span className="font-semibold text-primary">{service.split(' - ')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-card rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Ready to Book Your Treatment?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              The prices indicated for hair services are the starting price. Price range may vary depending on customer's hair.
            </p>
            <Link href="/schedule" className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-bounce shadow-elegant inline-block">
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


