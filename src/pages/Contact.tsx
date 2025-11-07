import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  Zap,
} from "lucide-react";
import { useTheme } from "../components/Theme_Context";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [] = useState(false);
  const [] = useState({ type: "", message: "" });
  const { isDarkMode, setIsDarkMode, themeClasses } = useTheme();

  React.useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Chat with us instantly",
      action: "Send Message",
      link: "https://wa.me/263784351146",
      color: "green",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "blessingchinozz@gmail.com",
      action: "Send Email",
      link: "mailto:blessingchinozz@gmail.com",
      color: "red",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+263 78 435 1146",
      action: "Make a Call",
      link: "tel:+263784351146",
      color: "blue",
    },
    {
      icon: Phone,
      title: "Alternative Line",
      description: "+263 78 972 8547",
      action: "Call Now",
      link: "tel:+263789728547",
      color: "purple",
    },
    {
      icon: Send,
      title: "SMS",
      description: "Text us your inquiry",
      action: "Send Text",
      link: "sms:+263784351146",
      color: "orange",
    },
  ];

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
              Let's Work Together
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Get in Touch
            </h1>
            <p
              className={`text-base sm:text-lg lg:text-xl ${themeClasses.textSecondary} leading-relaxed`}
            >
              Have a project in mind? Want to chat about design? We're here and
              ready to help bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="relative py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.link}
                target={method.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`p-6 rounded-2xl backdrop-blur-sm border ${
                  isDarkMode
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-white/60 border-gray-200/50 hover:bg-white/80"
                } transition-all duration-300 hover:shadow-xl hover:scale-105 group`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    method.color === "green"
                      ? "bg-green-600/10"
                      : method.color === "red"
                      ? "bg-red-600/10"
                      : method.color === "blue"
                      ? "bg-blue-600/10"
                      : method.color === "purple"
                      ? "bg-purple-600/10"
                      : "bg-orange-600/10"
                  }`}
                >
                  <method.icon
                    className={`w-6 h-6 ${
                      method.color === "green"
                        ? "text-green-600"
                        : method.color === "red"
                        ? "text-red-600"
                        : method.color === "blue"
                        ? "text-blue-600"
                        : method.color === "purple"
                        ? "text-purple-600"
                        : "text-orange-600"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-bold mb-1">{method.title}</h3>
                <p className={`text-sm ${themeClasses.textSecondary} mb-3`}>
                  {method.description}
                </p>
                <span
                  className={`text-sm font-bold ${
                    method.color === "green"
                      ? "text-green-600"
                      : method.color === "red"
                      ? "text-red-600"
                      : method.color === "blue"
                      ? "text-blue-600"
                      : method.color === "purple"
                      ? "text-purple-600"
                      : "text-orange-600"
                  } group-hover:underline`}
                >
                  {method.action} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Drop Us a Line
              </h2>
              <p
                className={`${themeClasses.textSecondary} mb-8 leading-relaxed`}
              >
                Whether you need a quick quote or want to discuss a big project,
                we're all ears. Pick whichever way works best for you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      isDarkMode ? "bg-white/10" : "bg-gray-100"
                    }`}
                  >
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <a
                      href="mailto:blessingchinozz@gmail.com"
                      className={`text-sm ${themeClasses.textSecondary} hover:text-blue-600 transition-colors`}
                    >
                      blessingchinozz@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      isDarkMode ? "bg-white/10" : "bg-gray-100"
                    }`}
                  >
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>
                      +263 78 435 1146
                    </p>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>
                      +263 78 972 8547
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      isDarkMode ? "bg-white/10" : "bg-gray-100"
                    }`}
                  >
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Response Time</h4>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>
                      Usually within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      isDarkMode ? "bg-white/10" : "bg-gray-100"
                    }`}
                  >
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>
                      Harare, Zimbabwe
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div
              className={`p-6 sm:p-8 rounded-2xl backdrop-blur-sm border ${
                isDarkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white/60 border-gray-200/50"
              }`}
            >
              <h3 className="text-xl font-bold mb-6">Why Work With Us?</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Fast Response</h4>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>
                      We typically respond within 24 hours, often much faster
                      via WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center shrink-0 mt-1">
                    <MessageCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Multiple Channels</h4>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>
                      Reach us via WhatsApp, email, phone, or SMS - whatever
                      works best for you
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Professional Service</h4>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>
                      Quality work, clear communication, and commitment to your
                      project's success
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Flexible & Available</h4>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>
                      We're here when you need us, ready to discuss your ideas
                      and bring them to life
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
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
              Prefer to Chat?
            </h2>
            <p
              className={`text-base sm:text-lg ${themeClasses.textSecondary} mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed`}
            >
              WhatsApp is usually the quickest way to reach us. We're pretty
              active there and can share examples, discuss ideas, and answer
              questions in real-time.
            </p>
            <a
              href="https://wa.me/263784351146"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Open WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer isDarkMode={isDarkMode} themeClasses={themeClasses} />
    </div>
  );
};

export default ContactPage;
