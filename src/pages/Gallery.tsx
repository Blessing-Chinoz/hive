import React, { useState } from "react";
import { X, ZoomIn, Sparkles, Eye, TrendingUp } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useTheme } from "../components/Theme_Context";

import logo from "../assets/gallery/logo 1.jpg";
import card1 from "../assets/gallery/card1.jpg";
import card2 from "../assets/gallery/card2.jpg";
import photshoot from "../assets/gallery/Photoshoot.jpg";

const GalleryPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[0] | null
  >(null);
  const [filter, setFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { isDarkMode, setIsDarkMode, themeClasses } = useTheme();
  const [popularSlideIndex, setPopularSlideIndex] = useState(0);

  React.useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const galleryItems = [
    {
      id: 1,
      category: "logo",
      title: "Modern Logo",
      description:
        "A sleek, minimalist logo design for a graphics design company. The geometric shapes represent innovation and forward-thinking solutions.",
      image: logo,
      color: "from-blue-500 to-purple-600",
      popular: true,
    },
    {
      id: 2,
      category: "poster",
      title: "Music Festival Poster",
      description:
        "Bold and vibrant poster design for a summer music festival. Eye-catching typography and dynamic layout create instant visual impact.",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
      color: "from-pink-500 to-orange-500",
      popular: true,
    },
    {
      id: 3,
      category: "flyer",
      title: "Restaurant Opening Flyer",
      description:
        "Appetizing flyer design for a new restaurant launch. Clean layout with mouth-watering imagery that drives foot traffic and excitement.",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      color: "from-green-500 to-teal-600",
      popular: false,
    },
    {
      id: 4,
      category: "business-card",
      title: "Executive Business Cards",
      description:
        "Sophisticated business card design with elegant typography. Premium feel that makes networking memorable and professional.",
      image: card1,
      color: "from-gray-700 to-blue-900",
      popular: true,
    },
    {
      id: 5,
      category: "brochure",
      title: "Corporate Brochure",
      description:
        "Multi-page brochure showcasing company services and values. Strategic layout guides readers through information seamlessly and professionally.",
      image:
        "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=800&q=80",
      color: "from-indigo-500 to-blue-700",
      popular: false,
    },
    {
      id: 6,
      category: "banner",
      title: "Trade Show Banner",
      description:
        "Large format banner designed for maximum visibility at events. Bold graphics and clear messaging attract attention from across the room.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      color: "from-red-500 to-yellow-500",
      popular: true,
    },
    {
      id: 7,
      category: "logo",
      title: "Organic Food Brand",
      description:
        "Nature-inspired logo for an organic food company. Warm colors and flowing lines communicate freshness and sustainability perfectly.",
      image:
        "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800&q=80",
      color: "from-green-600 to-lime-500",
      popular: false,
    },
    {
      id: 8,
      category: "poster",
      title: "Photoshot Poster",
      description:
        "Energetic poster design motivating people to join a fitness challenge. Dynamic composition and powerful imagery inspire action immediately.",
      image: photshoot,
      color: "from-orange-600 to-red-600",
      popular: false,
    },
    {
      id: 9,
      category: "web",
      title: "E-Commerce Website",
      description:
        "Modern, responsive website design with intuitive navigation. Clean interface optimized for conversions and exceptional user experience.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      color: "from-cyan-500 to-blue-600",
      popular: true,
    },
    {
      id: 10,
      category: "flyer",
      title: "Real Estate Flyer",
      description:
        "Professional property listing flyer with stunning photography. Strategic information hierarchy helps potential buyers make quick decisions.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      color: "from-purple-600 to-pink-600",
      popular: false,
    },
    {
      id: 11,
      category: "business-card",
      title: "Creative Agency Cards",
      description:
        "Playful yet professional business cards for a creative agency. Unique design elements reflect the agency's innovative approach.",
      image: card2,
      color: "from-yellow-500 to-orange-600",
      popular: false,
    },
    {
      id: 12,
      category: "banner",
      title: "Grand Opening Banner",
      description:
        "Celebratory banner announcing a new store opening. Festive design creates excitement and draws crowds to the launch event.",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      color: "from-pink-600 to-purple-700",
      popular: true,
    },
  ];
  const popularItems = galleryItems.filter((item) => item.popular).slice(0, 5);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPopularSlideIndex((prev) => (prev + 1) % popularItems.length);
    }, 4000); // Changes slide every 4 seconds
    return () => clearInterval(interval);
  }, [popularItems.length]);

  const categories = [
    { id: "all", name: "All Work" },
    { id: "logo", name: "Logos" },
    { id: "poster", name: "Posters" },
    { id: "flyer", name: "Flyers" },
    { id: "business-card", name: "Business Cards" },
    { id: "brochure", name: "Brochures" },
    { id: "banner", name: "Banners" },
    { id: "web", name: "Web Design" },
  ];

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

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
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Designs That
            <span className="block bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Make an Impact
            </span>
          </h1>
          <p
            className={`text-base sm:text-lg lg:text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto leading-relaxed`}
          >
            Explore our portfolio of creative solutions—from bold branding to
            stunning print designs. Each project tells a unique story and solves
            real business challenges.
          </p>
        </div>
      </section>

      {/* Popular This Week Section */}
      <section className="relative pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              Popular this week
            </h2>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex gap-3 sm:gap-4 transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${
                    popularSlideIndex * (window.innerWidth < 640 ? 204 : 272)
                  }px)`,
                }}
              >
                {popularItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`shrink-0 cursor-pointer ${
                      idx === 2 ? "w-64 sm:w-80" : "w-48 sm:w-60"
                    } transition-all duration-300 hover:scale-105`}
                    onClick={() => setSelectedImage(item)}
                  >
                    <div
                      className={`relative rounded-xl sm:rounded-2xl overflow-hidden ${
                        idx === 2 ? "h-80 sm:h-96" : "h-64 sm:h-80"
                      } shadow-xl`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-linear-to-t ${item.color} opacity-60`}
                      ></div>
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="px-2 sm:px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold">
                            {item.category.replace("-", " ").toUpperCase()}
                          </div>
                        </div>
                        <h3 className="text-white text-base sm:text-lg font-bold mb-1">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {popularItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPopularSlideIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    popularSlideIndex === idx
                      ? "bg-blue-600 w-6"
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
            Top Sellers
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`group px-4 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                  filter === cat.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : isDarkMode
                    ? "bg-white/5 hover:bg-white/10 border border-white/10"
                    : "bg-white/60 hover:bg-white/80 border border-gray-200/50"
                }`}
              >
                <span className="text-xs sm:text-sm lg:text-base">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className={`group relative cursor-pointer transform transition-all duration-500 ${
                  hoveredCard === item.id ? "scale-105 z-10" : ""
                }`}
                style={{ animationDelay: `${idx * 0.05}s` }}
                onClick={() => setSelectedImage(item)}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div
                  className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${
                    isDarkMode
                      ? "bg-white/5 backdrop-blur-sm border border-white/10"
                      : "bg-white/80 backdrop-blur-sm border border-gray-200/50"
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-linear-to-t ${item.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                    ></div>

                    {/* Hover Icons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                        <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                      </div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                        <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base sm:text-lg font-bold leading-tight group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <div
                      className={`text-xs px-2.5 sm:px-3 py-1 rounded-full inline-block mb-2 sm:mb-3 ${
                        isDarkMode
                          ? "bg-blue-600/20 text-blue-400"
                          : "bg-blue-600/10 text-blue-600"
                      } font-bold uppercase tracking-wider`}
                    >
                      {item.category.replace("-", " ")}
                    </div>
                    <p
                      className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed line-clamp-2`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Floating Animation */}
                <div
                  className={`absolute -inset-1 bg-linear-to-r ${item.color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          <div
            className={`max-w-5xl w-full ${
              isDarkMode ? "bg-gray-900" : "bg-white"
            } rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in duration-500`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-linear-to-t ${selectedImage.color} opacity-20`}
              ></div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 text-white">
                  {selectedImage.category.replace("-", " ")}
                </div>
              </div>
              <h2
                className={`text-2xl sm:text-3xl font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {selectedImage.title}
              </h2>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 my-16">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p
            className={`text-base sm:text-lg lg:text-xl ${themeClasses.textSecondary} mb-8 max-w-2xl mx-auto`}
          >
            Let's create something amazing together. Get in touch and tell us
            about your vision.
          </p>
          <a
            href="https://wa.me/263784351146?text=Hi!%20I%20loved%20your%20gallery%20and%20I'd%20like%20to%20start%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30 text-sm sm:text-base"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            Start Your Project
          </a>
        </div>
      </section>

      <Footer isDarkMode={isDarkMode} themeClasses={themeClasses} />
    </div>
  );
};

export default GalleryPage;
