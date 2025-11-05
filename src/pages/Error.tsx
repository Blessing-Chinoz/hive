import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search, MapPin } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useTheme } from "../components/Theme_Context";


const NotFound = () => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const { isDarkMode, setIsDarkMode, themeClasses } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  React.useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  

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
              ? "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"
              : "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"
          }`}
        ></div>
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-[radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.1),transparent_50%)]"
              : "bg-[radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.05),transparent_50%)]"
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

      {/* Navigation */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* 404 Content */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* 404 Badge */}
          <div
            className={`inline-flex items-center px-4 py-2 bg-linear-to-r ${
              isDarkMode
                ? "from-red-500/20 to-red-600/20 border-red-500/30"
                : "from-red-500/10 to-red-600/10 border-red-500/20"
            } rounded-full border backdrop-blur-sm mb-8`}
          >
            <MapPin className="w-4 h-4 mr-2 text-red-400" />
            <span className="text-sm font-semibold text-red-400 tracking-wide uppercase">
              Lost in cyberspace
            </span>
          </div>

          {/* Large 404 Number */}
          <div className="mb-8">
            <h1 className="text-[12rem] lg:text-[16rem] font-black leading-none bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className={`text-4xl lg:text-6xl font-bold ${themeClasses.text} mb-6`}>
              Oops! Page not found
            </h2>
            <p className={`text-xl ${themeClasses.textSecondary} leading-relaxed max-w-2xl mx-auto mb-4`}>
              The page you're looking for seems to have wandered off on its own adventure. 
              Don't worry, even the best explorers sometimes take a wrong turn!
            </p>
            <p className={`text-lg ${themeClasses.textMuted} font-mono`}>
              Requested path: <span className="text-red-400">{location.pathname}</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="/"
              className={`relative bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-110 shadow-2xl ${themeClasses.glowEffect} overflow-hidden group inline-flex items-center justify-center`}
            >
              <span className="relative z-10 flex items-center justify-center">
                <Home className="mr-2 w-5 h-5" />
                Return Home
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>

            <button
              onClick={() => window.history.back()}
              className={`border-2 ${
                isDarkMode
                  ? "border-white/20 hover:border-white/40 text-white hover:bg-white/10"
                  : "border-gray-300 hover:border-gray-500 text-gray-900 hover:bg-gray-100/50"
              } px-10 py-4 rounded-2xl text-lg font-semibold transition-all backdrop-blur-sm flex items-center justify-center`}
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div
            className={`${themeClasses.cardBg} backdrop-blur-sm border ${themeClasses.border} rounded-3xl p-8`}
          >
            <h3 className={`text-2xl font-bold ${themeClasses.text} mb-6`}>
              Perhaps you were looking for:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="/"
                className={`${themeClasses.hoverBg} p-4 rounded-xl transition-all duration-300 border ${themeClasses.border} hover:${themeClasses.borderHover} group`}
              >
                <Home className="w-6 h-6 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                <h4 className={`font-semibold ${themeClasses.text} mb-1`}>Home Page</h4>
                <p className={`text-sm ${themeClasses.textMuted}`}>Start your journey here</p>
              </a>
              
              <a
                href="/packages"
                className={`${themeClasses.hoverBg} p-4 rounded-xl transition-all duration-300 border ${themeClasses.border} hover:${themeClasses.borderHover} group`}
              >
                <MapPin className="w-6 h-6 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                <h4 className={`font-semibold ${themeClasses.text} mb-1`}>Travel Packages</h4>
                <p className={`text-sm ${themeClasses.textMuted}`}>Explore our destinations</p>
              </a>
              
              <a
                href="/contact"
                className={`${themeClasses.hoverBg} p-4 rounded-xl transition-all duration-300 border ${themeClasses.border} hover:${themeClasses.borderHover} group`}
              >
                <Search className="w-6 h-6 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                <h4 className={`font-semibold ${themeClasses.text} mb-1`}>Contact Us</h4>
                <p className={`text-sm ${themeClasses.textMuted}`}>Get help from our team</p>
              </a>
            </div>
          </div>

          {/* Fun Animation */}
          <div className="mt-12">
            <div className="flex justify-center space-x-2 opacity-50">
              <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-blue-400' : 'bg-blue-500'} animate-bounce`} style={{animationDelay: '0s'}}></div>
              <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-blue-400' : 'bg-blue-500'} animate-bounce`} style={{animationDelay: '0.1s'}}></div>
              <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-blue-400' : 'bg-blue-500'} animate-bounce`} style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} themeClasses={themeClasses} />
    </div>
  );
};

export default NotFound;