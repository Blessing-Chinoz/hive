import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Zap,
  Users,
  Palette,
  Target,
  Layers,
  Sparkles,
  Eye,
  Rocket,
  PenTool,
  Monitor,
  Package,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useTheme } from "../components/Theme_Context";
import founder from "../assets/images/founder.jpg";
import cup from "../assets/images/cup.jpg";
import logo from "../assets/images/logo 1.jpg";

const AboutPage = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const { isDarkMode, setIsDarkMode, themeClasses } = useTheme();
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const principles = [
    {
      icon: Eye,
      title: "Vision",
      description:
        "Every client has a story worth telling. Whether you're a business, individual, school, or church, we help you find the visual language that expresses it authentically. No cookie-cutter solutions—just design that fits who you are and where you're going.",
    },
    {
      icon: Rocket,
      title: "Mission",
      description:
        "Turn ideas into visuals that actually work. We combine creative thinking with practical strategy to build brands that look professional and feel right. Design that serves your goals, not just our portfolio.",
    },
    {
      icon: Sparkles,
      title: "Philosophy",
      description:
        "Good design is intentional. We research, plan, and craft with purpose—making sure every color, shape, and word choice has a reason. Think of it like building a hive: every piece matters.",
    },
  ];

  const services = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description:
        "Logos, colors, typography, and visual systems that define your brand. We build the foundation that makes your business recognizable and gives you something consistent to work with across all platforms.",
    },
    {
      icon: PenTool,
      title: "Graphic Design",
      description:
        "Print materials, posters, packaging, social media graphics—anything you need to communicate visually. Clean, professional work that fits your brand and gets your message across.",
    },
    {
      icon: Monitor,
      title: "Web Design",
      description:
        "Responsive websites that work on any device. We design with both aesthetics and usability in mind, so your site looks good and functions smoothly. No bloated code, just clean design.",
    },
  ];

  const features = [
    { icon: Target, label: "Strategic Thinking" },
    { icon: Layers, label: "Timeless Creativity" },
    { icon: Users, label: "Collaborative Process" },
    { icon: Zap, label: "Quick Turnaround" },
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
          className={`absolute w-64 h-64 md:w-96 md:h-96 bg-linear-to-r ${
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
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Creative design workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 sm:px-6 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              We're Hive Graphix
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90">
              A small studio doing honest design work for real businesses
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="relative py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                <img
                  src={logo}
                  alt="Design process"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight mb-1 text-blue-500">
                About Us
              </h2>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6">
                We make brands look good
              </h2>

              <p
                className={`text-base sm:text-lg ${themeClasses.textSecondary} mb-4 sm:mb-6 leading-relaxed`}
              >
                Started as a one-person operation, Hive Graphix has grown into a
                collaborative space where design meets purpose. We work with
                businesses, individuals, schools, churches, and anyone in need
                of clear, professional graphic design—no fluff, just solid
                visual work that gets the job done.
              </p>

              <p
                className={`text-base sm:text-lg ${themeClasses.textSecondary} mb-6 sm:mb-8 leading-relaxed`}
              >
                Whether you're a startup finding your identity, an individual
                needing a personal brand, or an organization refreshing your
                look, we're here to help. Good design shouldn't be complicated
                or pretentious—it should work.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-linear-to-r from-blue-500 to-blue-600 flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <span
                      className={`text-sm font-medium ${themeClasses.text}`}
                    >
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="relative py-12 sm:py-15 md:py-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              <span className={themeClasses.text}>
                How we think about design
              </span>
            </h2>
            <p
              className={`text-base sm:text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto px-4`}
            >
              Three things that guide our work
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {principles.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm border ${
                  isDarkMode
                    ? "bg-white/5 border-white/10"
                    : "bg-white/50 border-gray-200/50"
                } hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-2">
                  {item.title}
                </h3>
                <p
                  className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="relative py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Design inspiration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 via-blue-800/80 to-blue-900/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 leading-relaxed">
            "Design should solve problems, not create them"
          </blockquote>
          <p className="text-white/80 text-base sm:text-lg">
            Simple, effective, human
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl order-2 lg:order-1">
              <img
                src={founder}
                alt="Blessing Chinokopota"
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                    Blessing Chinokopota
                  </h3>
                  <p className="text-sm sm:text-base text-white/90">
                    Founder & Creative Lead
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-lg sm:text-xl font-bold text-blue-500 mb-2">
                Meet the Founder
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                One person, two skillsets
              </h3>

              <p
                className={`text-base sm:text-lg ${themeClasses.textSecondary} mb-4 sm:mb-6 leading-relaxed`}
              >
                Blessing Chinokopota is a freelance software developer and
                graphic designer who started Hive Graphix to bridge the gap
                between code and creativity. With a background in both
                disciplines, he understands that great brands need more than
                just pretty pictures—they need structure, strategy, and systems
                that work.
              </p>

              <p
                className={`text-base sm:text-lg ${themeClasses.textSecondary} mb-4 sm:mb-6 leading-relaxed`}
              >
                The dual expertise means your brand gets design that not only
                looks good but functions seamlessly across digital platforms.
                From logos to websites, everything is built with both form and
                function in mind.
              </p>

              <p
                className={`text-base sm:text-lg ${themeClasses.textSecondary} leading-relaxed`}
              >
                Based in Zimbabwe, Blessing works with clients locally and
                internationally—from businesses and individuals to schools and
                churches—bringing a practical, no-nonsense approach to every
                project. The goal is simple: help everyone look professional and
                communicate clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              <span className={themeClasses.text}>What we offer</span>
            </h2>
            <p
              className={`text-base sm:text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto px-4`}
            >
              Three core services, done well
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`grid lg:grid-cols-[200px_1fr] gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm border ${
                  isDarkMode
                    ? "bg-white/5 border-white/10"
                    : "bg-white/50 border-gray-200/50"
                } hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className="flex flex-col items-center lg:items-start justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-500 text-center lg:text-left">
                    {service.title}
                  </h3>
                </div>
                <div className="flex items-center">
                  <p
                    className={`text-sm sm:text-base md:text-lg ${themeClasses.textSecondary} leading-relaxed text-center lg:text-left`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Showcase */}
      <section className="relative py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6">
                <span className={themeClasses.text}>Research.</span>
                <br />
                <span className={themeClasses.text}>Storytelling.</span>
                <br />
                <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Clean Design.
                </span>
              </h2>

              <p
                className={`text-base sm:text-lg ${themeClasses.textSecondary} mb-4 sm:mb-6 leading-relaxed`}
              >
                We don't just make things look pretty. Every project starts with
                understanding you or your organization, your audience, and what
                you're trying to achieve. Then we design something that actually
                serves those goals.
              </p>

              <p
                className={`text-base sm:text-lg ${themeClasses.textSecondary} leading-relaxed`}
              >
                Whether starting from scratch or refining what you have, the
                process is the same: listen, research, create, refine. No
                shortcuts, no templates. Just honest work that fits your needs.
              </p>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                <img
                  src={cup}
                  alt="Creative workspace"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-sm border ${
              isDarkMode
                ? "bg-white/5 border-white/10"
                : "bg-white/50 border-gray-200/50"
            } shadow-2xl`}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
              <span className={themeClasses.text}>Let's work together</span>
            </h2>

            <p
              className={`text-sm sm:text-base ${themeClasses.textSecondary} mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto`}
            >
              Have a project in mind? Need a rebrand? Just want to chat about
              design? Get in touch and let's see if we're a good fit.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => navigate("/services")}
                className="relative bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 
                 text-white px-6 sm:px-8 py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold 
                 transition-all transform hover:scale-105 shadow-lg overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get Started
                  <Package className="ml-2 w-4 h-4" />
                </span>
              </button>

              <button
                onClick={() => navigate("/gallery")}
                className={`px-6 sm:px-8 py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold border-2 ${
                  isDarkMode
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                } transition-all transform hover:scale-105`}
              >
                See Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer isDarkMode={isDarkMode} themeClasses={themeClasses} />
    </div>
  );
};

export default AboutPage;
