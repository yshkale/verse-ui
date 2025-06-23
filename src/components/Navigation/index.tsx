import navigationData from "../../config/navigation.json";

export const Navigation = () => {
  return (
    <nav>
      <ul className="space-y-6 text-sm">
        {navigationData.map((item, index) => (
          <li key={index} className="space-y-1.5">
            <span className="font-semibold text-neutral-900 pointer-events-none">
              {item.label}
            </span>
            {item.subMenu && (
              <ul>
                {item.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="space-y-1">
                    <a
                      href={`/${item.href}/${subItem.href}`}
                      className="text-neutral-600"
                    >
                      {subItem.label}
                    </a>
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
