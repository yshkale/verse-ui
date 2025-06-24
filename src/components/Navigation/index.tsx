/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import navigationData from "../../config/navigation.json";

export const Navigation = ({ currentSection }: any) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActiveLink = (sectionHref: any, subHref: any) => {
    const fullPath = `/app/${sectionHref}/${subHref}`;
    return location.pathname === fullPath;
  };

  const isActiveSection = (sectionHref: any) => {
    return currentSection === sectionHref;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const NavigationContent = () => (
    <ul className="space-y-6 text-sm">
      {navigationData.map((item, index) => (
        <li key={index} className="space-y-1.5">
          <div
            className={`font-semibold ${
              isActiveSection(item.href)
                ? "text-indigo-600"
                : "text-neutral-900"
            }`}
          >
            {item.label}
          </div>
          {item.subMenu && (
            <ul className="space-y-1">
              {item.subMenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    to={`/app/${item.href}/${subItem.href}`}
                    onClick={closeMobileMenu}
                    className={`block px-2 py-1 rounded transition-colors duration-150 ${
                      isActiveLink(item.href, subItem.href)
                        ? "bg-neutral-100 text-neutral-700 font-medium"
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                    }`}
                  >
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden fixed top-3 right-4 z-40 p-2"
        aria-label="Open navigation menu"
      >
        <Menu size={20} className="text-neutral-700" />
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:block w-64 flex-shrink-0">
        <NavigationContent />
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeMobileMenu}
          />

          {/* Mobile Menu */}
          <div className="relative w-full h-full bg-white">
            {/* Close Button */}
            <button
              onClick={closeMobileMenu}
              className="absolute top-4 right-4 p-2 rounded-md hover:bg-neutral-100 transition-colors"
              aria-label="Close navigation menu"
            >
              <X size={24} className="text-neutral-700" />
            </button>

            {/* Navigation Content */}
            <div className="pt-16 px-6 h-full overflow-y-auto">
              <NavigationContent />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
