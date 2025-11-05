import React from "react";
import { Star, Shield, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../components/Theme_Context";

// Import the logos from assets
import LogoDark from "../assets/images/logo_dark.png";
import LogoLight from "../assets/images/logo_light.png";

interface FooterProps {
  isDarkMode: boolean;
  themeClasses: {
    cardBg: string;
    border: string;
    text: string;
    textSecondary: string;
    textMuted: string;
    glowEffect: string;
  };
}

const Footer: React.FC<FooterProps> = () => {
  const { isDarkMode, themeClasses } = useTheme();
  const navigate = useNavigate();

  return (
    <footer
      className={`${themeClasses.cardBg} backdrop-blur-xl border-t ${themeClasses.border} py-2`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Company Name Section */}
        <div className="flex items-center justify-center mb-2">
          <img
            src={isDarkMode ? LogoDark : LogoLight}
            alt="Hive Graphix Logo"
            className="h-32 w-auto mr-1"
          />
         
        </div>

        {/* Company Description */}
        <div className="text-center mb-4">
          <p
            className={`${themeClasses.textSecondary} max-w-lg mx-auto text-sm`}
          >
            Crafting stunning designs and creative solutions that bring your vision to life.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex justify-center mb-6">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <Star className="w-4 h-4" />, label: "5.0 Rating" },
              {
                icon: <Shield className="w-4 h-4" />,
                label: "Trusted Quality",
              },
              {
                icon: <Clock className="w-4 h-4" />,
                label: "Fast Delivery",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 ${themeClasses.textMuted} text-xs`}
              >
                <div className="text-blue-500">{item.icon}</div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-2xl mx-auto">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className={`text-base font-semibold ${themeClasses.text} mb-3`}>
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
                { name: "Pricing", path: "/pricing" },
                { name: "Gallery", path: "/gallery" },
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => navigate(link.path)}
                  className={`${themeClasses.textSecondary} hover:${themeClasses.text} hover:text-blue-500 transition-colors duration-300 text-sm text-left`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className={`text-base font-semibold ${themeClasses.text} mb-3`}>
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li>
                <div className={`${themeClasses.textMuted} text-sm space-y-1`}>
                  <div>
                    <span className="font-medium">Email:</span> blessingchinozz@gmail.com
                  </div>
                  <div>
                    <span className="font-medium">Phone:</span> +263 78 435 1146
                  </div>
                  <div>
                    <span className="font-medium">Alt:</span> +263 78 972 8547
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className={`border-t ${themeClasses.border} mt-6 pt-4 text-center`}
        >
          <p className={`${themeClasses.textMuted} text-xs`}>
            © 2025 Hive Graphix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;