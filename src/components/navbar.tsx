import React from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../components/Theme_Context";

// Import the logo from assets (adjust the path as needed)
import Logodark from "../assets/images/logo_dark.png";
import Logolight from "../assets/images/logo_light.png";

type NavbarProps = {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigateToPage = (page: string) => {
    navigate(page);
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  // Check if a route is active
  const isActiveRoute = (route: string) => {
    return location.pathname === route;
  };

  // Theme-aware classes with blue color scheme
  const themeClasses = {
    text: isDarkMode ? "text-white" : "text-gray-900",
    textSecondary: isDarkMode ? "text-gray-300" : "text-gray-600",
    navBg: isDarkMode ? "bg-black/20" : "bg-white/20",
    border: isDarkMode ? "border-white/10" : "border-gray-200/30",
    cardBg: isDarkMode ? "bg-black/30" : "bg-white/30",
    hoverBg: isDarkMode ? "hover:bg-white/10" : "hover:bg-gray-100/50",
    glowEffect: isDarkMode ? "shadow-blue-500/25" : "shadow-blue-500/15",
    // Active state classes
    activeText: isDarkMode ? "text-white" : "text-gray-900",
    activeBg: isDarkMode ? "bg-white/10" : "bg-gray-100/50",
  };

  // Navigation items with their routes
  const navItems = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Services", route: "/services" },
    { name: "Gallery", route: "/gallery" },
    { name: "Pricing", route: "/pricing" },
  ];

  return (
    <nav
      className={`relative z-50 ${themeClasses.navBg} backdrop-blur-xl border-b ${themeClasses.border} fixed w-full top-0 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          <div className="flex items-center">
            <div
              className="shrink-0 flex items-center cursor-pointer group"
              onClick={() => navigate("/")}
            >
              <div className="flex items-center justify-center">
                <img
                  src={isDarkMode ? Logodark : Logolight}
                  alt="Viable Travel Tours Logo"
                  className="h-26 w-auto lg:h-45 transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = isActiveRoute(item.route);
                return (
                  <button
                    key={item.name}
                    onClick={() => navigateToPage(item.route)}
                    className={`${
                      isActive
                        ? `${themeClasses.activeText} ${themeClasses.activeBg}`
                        : `${themeClasses.textSecondary} hover:${themeClasses.text}`
                    } px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 relative group`}
                  >
                    {item.name}
                    <div
                      className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-linear-to-r from-blue-500 to-sky-500 transition-all duration-300 ${
                        isActive ? "w-6" : "w-0 group-hover:w-6"
                      }`}
                    ></div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl ${themeClasses.textSecondary} hover:${themeClasses.text} ${themeClasses.hoverBg} transition-all duration-300`}
              title={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => navigate("/contact")}
              className={`relative bg-linear-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all transform hover:scale-105 shadow-lg ${themeClasses.glowEffect} overflow-hidden group`}
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-linear-to-r from-sky-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl ${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors`}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors p-2`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden ${themeClasses.cardBg} backdrop-blur-xl border-t ${themeClasses.border}`}
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = isActiveRoute(item.route);
              return (
                <button
                  key={item.name}
                  onClick={() => navigateToPage(item.route)}
                  className={`flex items-center w-full text-left px-4 py-3 rounded-lg transition-all duration-300 relative ${
                    isActive
                      ? `${themeClasses.activeText} ${themeClasses.activeBg}`
                      : `${themeClasses.textSecondary} hover:${themeClasses.text} ${themeClasses.hoverBg}`
                  }`}
                >
                  <span className="font-medium">{item.name}</span>
                  {isActive && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-linear-to-b from-blue-500 to-sky-500 rounded-r"></div>
                  )}
                </button>
              );
            })}
            <div className={`pt-4 border-t ${themeClasses.border} mt-4`}>
              <button
                onClick={() => {
                  navigate("/contact");
                  setIsMenuOpen(false);
                }}
                className="w-full bg-linear-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[0.98]"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;