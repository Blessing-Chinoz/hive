import React, { useState } from "react";
import {
  FileText,
  CreditCard,
  Palette,
  FileImage,
  Layout,
  Monitor,
  Smartphone,
  MessageCircle,
  Check,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useTheme } from "../components/Theme_Context";

const ServicesPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isDarkMode, setIsDarkMode, themeClasses } = useTheme();

  React.useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      icon: FileImage,
      title: "Poster Design",
      category: "Print Design",
      description:
        "Eye-catching posters that grab attention and communicate your message clearly. Whether for events, promotions, or announcements, we design posters that people actually stop to read.",
      details: [
        "Event posters",
        "Promotional materials",
        "Educational posters",
        "Size customization",
        "Print-ready files",
      ],
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
      whatsappMessage:
        "Hi! HIVE Graphix. I'm interested in getting a Poster Design. Can you provide more details and a quote?",
    },
    {
      icon: FileText,
      title: "Flyer Design",
      category: "Print Design",
      description:
        "Compact, informative flyers that pack a punch. Perfect for handouts, mailings, or leaving at local businesses. We make sure your key information stands out without overwhelming the reader.",
      details: [
        "Single or double-sided",
        "A4, A5, or custom sizes",
        "Business promotions",
        "Event announcements",
        "Multiple formats (PDF, JPG)",
      ],
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      whatsappMessage:
        "Hi! HIVE Graphix.I'm interested in getting a Flyer Design. Can you provide more details and a quote?",
    },
    {
      icon: CreditCard,
      title: "Business Cards",
      category: "Brand Essentials",
      description:
        "Professional business cards that make a lasting first impression. Clean layouts, readable text, and designs that reflect your brand identity. Because networking still matters.",
      details: [
        "Standard or custom sizes",
        "Front and back design",
        "Multiple design concepts",
        "Print-ready with bleeds",
        "QR code integration",
      ],
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      whatsappMessage:
        "Hi! HIVE GraphixI. I'm interested in getting Business Cards designed. Can you provide more details and a quote?",
    },
    {
      icon: Palette,
      title: "Logo Design",
      category: "Brand Identity",
      description:
        "Logos that represent what you're about. We create marks that are simple enough to remember, unique enough to stand out, and versatile enough to work everywhere—from business cards to billboards.",
      details: [
        "Multiple concepts",
        "Unlimited revisions",
        "Vector files (AI, EPS, SVG)",
        "Color and B&W versions",
        "Usage guidelines",
      ],
      image:
        "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=80",
      whatsappMessage:
        "Hi! HIVE Graphix. I'm interested in getting a Logo designed. Can you provide more details and a quote?",
    },
    {
      icon: FileText,
      title: "Brochures",
      category: "Print Design",
      description:
        "Multi-page brochures that tell your story in detail. Great for product catalogs, company overviews, or service breakdowns. We organize information so it's easy to follow and pleasant to look at.",
      details: [
        "Bi-fold or tri-fold",
        "Custom page counts",
        "Layout and typography",
        "Image placement",
        "Print specifications",
      ],
      image:
        "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=800&q=80",
      whatsappMessage:
        "Hi! I'm interested in getting a Brochure designed. Can you provide more details and a quote?",
    },
    {
      icon: Layout,
      title: "Banners",
      category: "Large Format",
      description:
        "Big, bold banners for indoor and outdoor use. Trade shows, storefronts, events—whatever you need. We design for visibility and impact, making sure your message reads clearly from a distance.",
      details: [
        "Roll-up banners",
        "Outdoor signage",
        "Event backdrops",
        "Custom dimensions",
        "High-resolution output",
      ],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      whatsappMessage:
        "Hi! I'm interested in getting a Banner designed. Can you provide more details and a quote?",
    },
    {
      icon: Monitor,
      title: "Website Development",
      category: "Digital Services",
      description:
        "Clean, functional websites that work on phones, tablets, and desktops. We build sites that load fast, look professional, and are easy for you to update. No unnecessary complexity, just what you need.",
      details: [
        "Responsive design",
        "Modern frameworks",
        "SEO-friendly structure",
        "Content management",
        "Hosting setup assistance",
      ],
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      whatsappMessage:
        "Hi! I'm interested in getting a Website developed. Can you provide more details and a quote?",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      category: "Digital Services",
      description:
        "Custom mobile applications for Android and iOS. Whether you need an app for your business, a tool for your organization, or something completely new, we build apps that actually work the way they should.",
      details: [
        "Native or cross-platform",
        "User-friendly interfaces",
        "Backend integration",
        "App store deployment",
        "Ongoing support available",
      ],
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      whatsappMessage:
        "Hi! I'm interested in getting a Mobile App developed. Can you provide more details and a quote?",
    },
  ];

  const whatsappNumber = "263784351146";

  const getWhatsAppLink = (message: string | number | boolean) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  return (
    <div
      className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} overflow-hidden transition-colors duration-300`}
    >
      {/* Animated Background */}
      <div
        className={`fixed inset-0 ${themeClasses.backgroundGradient} transition-all duration-300`}
      >
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]"
              : "bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.05),transparent_50%)]"
          }`}
        ></div>
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-[radial-gradient(circle_at_70%_80%,rgba(147,197,253,0.1),transparent_50%)]"
              : "bg-[radial-gradient(circle_at_70%_80%,rgba(147,197,253,0.05),transparent_50%)]"
          }`}
        ></div>
        <div
          className={`absolute w-96 h-96 bg-linear-to-r ${
            isDarkMode
              ? "from-blue-500/20 to-blue-600/20"
              : "from-blue-500/10 to-blue-600/10"
          } rounded-full blur-3xl transition-all duration-1000 ease-out`}
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1920&q=80"
            alt="Creative services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Services That Work
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90">
              From print design to digital development—straightforward solutions
              for real businesses
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className={`text-base sm:text-lg lg:text-xl ${themeClasses.textSecondary} leading-relaxed`}
          >
            Whether you need posters for an event, a website that actually
            works, or a complete brand identity, we've got you covered. No
            unnecessary complexity, no corporate speak—just honest work that
            fits your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="mb-2 sm:mb-3">
                    <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                    {service.title}
                  </h2>
                  <p
                    className={`text-base sm:text-lg ${themeClasses.textSecondary} mb-4 sm:mb-6 leading-relaxed`}
                  >
                    {service.description}
                  </p>

                  <div className="mb-5 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-bold mb-2 sm:mb-3 uppercase tracking-wide">
                      What's included:
                    </h4>
                    <div className="space-y-2">
                      {service.details.map((detail, detailIdx) => (
                        <div
                          key={detailIdx}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0 mt-0.5" />
                          <span
                            className={`text-sm sm:text-base ${themeClasses.textSecondary}`}
                          >
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={getWhatsAppLink(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    Get a Quote
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="relative py-16 sm:py-20 my-12 sm:my-16 lg:my-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80"
            alt="Collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 via-blue-800/80 to-blue-900/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-relaxed">
            Need something we haven't listed?
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
            These are our main services, but if you need packaging design,
            social media graphics, presentation decks, or anything else—just
            ask. We're flexible and ready to help.
          </p>
          <a
            href={getWhatsAppLink(
              "Hi! I'd like to inquire about a custom service that's not listed on your services page. Can you help?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-blue-900 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105 text-sm sm:text-base"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            Ask About Custom Work
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Why Work With Us
            </h2>
            <p
              className={`text-base sm:text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto`}
            >
              A few reasons clients keep coming back
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div
              className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm border ${
                isDarkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white/60 border-gray-200/50"
              } hover:shadow-2xl transition-all duration-300`}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Fast Turnaround
              </h3>
              <p
                className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}
              >
                We understand deadlines matter. Most projects wrap up within a
                week, often faster for simpler work.
              </p>
            </div>

            <div
              className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm border ${
                isDarkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white/60 border-gray-200/50"
              } hover:shadow-2xl transition-all duration-300`}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💬</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Easy Communication
              </h3>
              <p
                className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}
              >
                No complicated processes or forms. Just WhatsApp, email, or
                call—whatever works for you.
              </p>
            </div>

            <div
              className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm border ${
                isDarkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white/60 border-gray-200/50"
              } hover:shadow-2xl transition-all duration-300 sm:col-span-2 md:col-span-1`}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔄</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Revisions Included
              </h3>
              <p
                className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}
              >
                We don't charge extra for reasonable revisions. If something
                needs tweaking, we'll fix it until you're happy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer isDarkMode={isDarkMode} themeClasses={themeClasses} />
    </div>
  );
};

export default ServicesPage;
