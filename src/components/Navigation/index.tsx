/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import navigationData from "../../config/navigation.json";

export const Navigation = ({ currentSection }: any) => {
  const location = useLocation();

  const isActiveLink = (sectionHref: any, subHref: any) => {
    const fullPath = `/app/${sectionHref}/${subHref}`;
    return location.pathname === fullPath;
  };

  const isActiveSection = (sectionHref: any) => {
    return currentSection === sectionHref;
  };

  return (
    <nav className="w-48 flex-shrink-0">
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
    </nav>
  );
};
