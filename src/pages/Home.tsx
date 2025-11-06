import React from "react";
import {
  Sparkles,
  ArrowRight,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useTheme } from "../components/Theme_Context";
import bg from "../assets/images/bg.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const { isDarkMode, setIsDarkMode, themeClasses } = useTheme();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
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
              ? "bg-[radial-linear(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"
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

      {/* Navigation */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Hero Section */}
      <section id="hero" className="relative h-screen overflow-hidden">
        {/* Static Background Image */}
        <div className="absolute inset-0">
          <img
            src={bg}
            alt="Creative Design Background"
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 ${
              isDarkMode
                ? "bg-linear-to-br from-black/75 via-black/60 to-black/75"
                : "bg-linear-to-br from-black/35 via-black/20 to-black/35"
            }`}
          ></div>
        </div>

        {/* Slides Container */}
        <div className="relative z-10 h-full flex items-center -mt-8 sm:-mt-10 md:-mt-13">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Slide 1 */}
            <div
              className={`text-center transition-all duration-1000 ${
                currentSlide === 0
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform -translate-y-8 absolute inset-0 flex items-center justify-center pointer-events-none"
              }`}
            >
              <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-4 sm:mb-6">
                  <span className="text-white drop-shadow-2xl">
                    From Hive to Heart
                  </span>
                </h1>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                  <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                    Designs that Live
                  </span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-lg px-4">
                  We breathe life into your brand with stunning visuals that
                  connect, resonate, and leave lasting impressions. Every design
                  tells your story.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                  <button
                    className={`relative bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold transition-all transform hover:scale-105 shadow-2xl overflow-hidden group`}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      View Portfolio
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>

                  <button className="border-2 border-white/40 hover:border-white/70 text-white hover:bg-white/10 px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold transition-all backdrop-blur-sm flex items-center justify-center">
                    <Sparkles className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div
              className={`text-center transition-all duration-1000 ${
                currentSlide === 1
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform -translate-y-8 absolute inset-0 flex items-center justify-center pointer-events-none"
              }`}
            >
              <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-4 sm:mb-6">
                  <span className="text-white drop-shadow-2xl">
                    Elevate Your Brand
                  </span>
                </h1>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                  <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                    With Visual Power
                  </span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-lg px-4">
                  Logos, branding, social media graphics, and everything in
                  between. We craft designs that make your business stand out in
                  the digital world.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                  <button
                    className={`relative bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold transition-all transform hover:scale-105 shadow-2xl overflow-hidden group`}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Our Services
                      <Zap className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>

                  <button className="border-2 border-white/40 hover:border-white/70 text-white hover:bg-white/10 px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold transition-all backdrop-blur-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div
              className={`text-center transition-all duration-1000 ${
                currentSlide === 2
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform -translate-y-8 absolute inset-0 flex items-center justify-center pointer-events-none"
              }`}
            >
              <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-4 sm:mb-6">
                  <span className="text-white drop-shadow-2xl">
                    Your Vision
                  </span>
                </h1>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                  <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                    Our Masterpiece
                  </span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-lg px-4">
                  Join countless satisfied clients who've transformed their
                  brands with our creative expertise. Let's build something
                  extraordinary together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                  <button
                    className={`relative bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold transition-all transform hover:scale-105 shadow-2xl overflow-hidden group`}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Start Your Project
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>

                  <button className="border-2 border-white/40 hover:border-white/70 text-white hover:bg-white/10 px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold transition-all backdrop-blur-sm">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 sm:bottom-24 md:bottom-30 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {[0, 1, 2].map((slide) => (
            <button
              key={slide}
              onClick={() => setCurrentSlide(slide)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                currentSlide === slide
                  ? "bg-linear-to-r from-blue-400 to-blue-600 w-6 sm:w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        {/* Previous Button */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all duration-200 flex items-center justify-center z-20 group hover:scale-110"
        >
          <ChevronLeft
            className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-0.5 transition-transform"
            strokeWidth={3}
          />
        </button>

        {/* Next Button */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all duration-200 flex items-center justify-center z-20 group hover:scale-110"
        >
          <ChevronRight
            className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform"
            strokeWidth={3}
          />
        </button>
      </section>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} themeClasses={themeClasses} />
    </div>
  );
};

export default Home;
