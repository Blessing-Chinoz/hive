import React, { useState } from "react";
import {
  FileText,
  Palette,
  FileImage,
  Monitor,
  Smartphone,
  MessageCircle,
  Check,
  ArrowRight,
  Zap,
  Star,
} from "lucide-react";
import { useTheme } from "../components/Theme_Context";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const PricingPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isDarkMode, setIsDarkMode, themeClasses } = useTheme();

  React.useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const pricingPlans = [
    {
      icon: FileImage,
      title: "Posters & Flyers",
      startingPrice: "$6",
      category: "Print Design",
      description:
        "Eye-catching designs for events, promotions, and announcements. Perfect for getting your message out there.",
      features: [
        "Custom design concepts",
        "Print-ready files",
        "Multiple size options",
        "Revisions included",
        "Fast turnaround",
      ],
      popular: false,
      whatsappMessage:
        "Hi HIVE Graphix! I'm interested in your Poster & Flyer design service starting at $6. Can we discuss my project?",
    },
    {
      icon: Palette,
      title: "Logo Design",
      startingPrice: "$8",
      category: "Brand Identity",
      description:
        "Professional logos that represent your brand. Simple, memorable, and versatile for all your needs.",
      features: [
        "Multiple design concepts",
        "Unlimited revisions",
        "Vector files (AI, EPS, SVG)",
        "Color & B&W versions",
        "Brand guidelines",
      ],
      popular: true,
      whatsappMessage:
        "Hi HIVE Graphix! I'm interested in your Logo Design service starting at $8. Can we discuss my project?",
    },
    {
      icon: FileText,
      title: "Brochures",
      startingPrice: "$15",
      category: "Print Design",
      description:
        "Multi-page brochures that tell your story. Great for catalogs, company overviews, and detailed information.",
      features: [
        "Bi-fold or tri-fold options",
        "Custom page layouts",
        "Professional typography",
        "Image optimization",
        "Print specifications",
      ],
      popular: false,
      whatsappMessage:
        "Hi HIVE Graphix! I'm interested in your Brochure design service starting at $15. Can we discuss my project?",
    },
    {
      icon: Monitor,
      title: "Website Development",
      startingPrice: "$100",
      category: "Digital Services",
      description:
        "Responsive websites that work perfectly on all devices. Clean, functional, and easy to manage.",
      features: [
        "Responsive design",
        "Modern frameworks",
        "SEO-friendly",
        "Content management",
        "Hosting assistance",
      ],
      popular: true,
      priceNote: "Price varies by complexity",
      whatsappMessage:
        "Hi HIVE Graphix! I'm interested in your Website Development service starting at $100. Can we discuss my project requirements?",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      startingPrice: "$200",
      category: "Digital Services",
      description:
        "Custom mobile applications for Android and iOS. Built to work flawlessly and meet your specific needs.",
      features: [
        "Native or cross-platform",
        "Intuitive UI/UX",
        "Backend integration",
        "App store deployment",
        "Ongoing support",
      ],
      popular: false,
      whatsappMessage:
        "Hi HIVE Graphix! I'm interested in your Mobile App Development service starting at $200. Can we discuss my project requirements?",
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
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-600 text-sm font-bold mb-6">
              <Zap className="w-4 h-4" />
              Transparent Pricing
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Simple, Honest Pricing
            </h1>
            <p
              className={`text-base sm:text-lg lg:text-xl ${themeClasses.textSecondary} leading-relaxed`}
            >
              No hidden fees, no surprises. Just straightforward pricing for
              quality work. All packages include revisions and our commitment to
              your satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm border ${
                  plan.popular
                    ? "border-blue-600 shadow-2xl shadow-blue-600/20"
                    : isDarkMode
                    ? "bg-white/5 border-white/10"
                    : "bg-white/60 border-gray-200/50"
                } hover:shadow-2xl transition-all duration-300 flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600/10 rounded-xl flex items-center justify-center mb-4">
                    <plan.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      {plan.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {plan.title}
                  </h3>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-xs sm:text-sm text-gray-500">
                      Starting at
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-bold text-blue-600">
                      {plan.startingPrice}
                    </span>
                    <span className={`text-sm ${themeClasses.textSecondary}`}>
                      & up
                    </span>
                  </div>
                  {plan.priceNote && (
                    <p className="text-xs text-gray-500 mt-1">
                      {plan.priceNote}
                    </p>
                  )}
                </div>

                <p
                  className={`text-sm sm:text-base ${themeClasses.textSecondary} mb-6 leading-relaxed`}
                >
                  {plan.description}
                </p>

                <div className="mb-6 grow">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIdx) => (
                      <div
                        key={featureIdx}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0 mt-0.5" />
                        <span
                          className={`text-sm ${themeClasses.textSecondary}`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={getWhatsAppLink(plan.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base w-full ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : isDarkMode
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  Get Started
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="relative py-16 sm:py-20 my-12 sm:my-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`p-8 sm:p-12 rounded-2xl sm:rounded-3xl backdrop-blur-sm border ${
              isDarkMode
                ? "bg-linear-to-br from-blue-900/20 to-blue-800/20 border-blue-600/30"
                : "bg-linear-to-br from-blue-50 to-white border-blue-200/50"
            } text-center`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Need a Custom Quote?
            </h2>
            <p
              className={`text-base sm:text-lg ${themeClasses.textSecondary} mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed`}
            >
              Every project is unique. If you need something specific or want to
              discuss your requirements in detail, let's chat. We'll provide a
              tailored quote based on your exact needs.
            </p>
            <a
              href={getWhatsAppLink(
                "Hi HIVE Graphix! I'd like to get a custom quote for my project. Can we discuss the details?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Request Custom Quote
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Our Pricing */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              What You Get With Every Project
            </h2>
            <p
              className={`text-base sm:text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto`}
            >
              Quality work shouldn't break the bank
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div
              className={`p-6 sm:p-8 rounded-2xl backdrop-blur-sm border ${
                isDarkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white/60 border-gray-200/50"
              } text-center hover:shadow-xl transition-all duration-300`}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔄</div>
              <h3 className="text-lg font-bold mb-2">Revisions Included</h3>
              <p
                className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}
              >
                We'll refine until you're 100% satisfied
              </p>
            </div>

            <div
              className={`p-6 sm:p-8 rounded-2xl backdrop-blur-sm border ${
                isDarkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white/60 border-gray-200/50"
              } text-center hover:shadow-xl transition-all duration-300`}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</div>
              <h3 className="text-lg font-bold mb-2">Fast Delivery</h3>
              <p
                className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}
              >
                Most projects completed within a week
              </p>
            </div>

            <div
              className={`p-6 sm:p-8 rounded-2xl backdrop-blur-sm border ${
                isDarkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white/60 border-gray-200/50"
              } text-center hover:shadow-xl transition-all duration-300`}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📁</div>
              <h3 className="text-lg font-bold mb-2">All File Formats</h3>
              <p
                className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}
              >
                Print-ready and web-optimized files
              </p>
            </div>

            <div
              className={`p-6 sm:p-8 rounded-2xl backdrop-blur-sm border ${
                isDarkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white/60 border-gray-200/50"
              } text-center hover:shadow-xl transition-all duration-300`}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💬</div>
              <h3 className="text-lg font-bold mb-2">Direct Support</h3>
              <p
                className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}
              >
                Easy communication via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer isDarkMode={isDarkMode} themeClasses={themeClasses} />
    </div>
  );
};

export default PricingPage;
