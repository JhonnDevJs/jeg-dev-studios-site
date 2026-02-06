"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/Buttons/ThemeToggle";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    // Función para cerrar el menú si la ventana se redimensiona a escritorio
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Deshabilita el scroll del body cuando el menú está abierto
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Función de limpieza
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Efecto para actualizar el indicador de la navegación de escritorio
  useEffect(() => {
    const updateIndicator = () => {
      if (navRef.current) {
        const activeButton = navRef.current.querySelector<HTMLElement>(
          `a[aria-current="page"]`
        );
        if (activeButton) {
          setIndicatorStyle({
            width: activeButton.offsetWidth,
            height: activeButton.offsetHeight,
            transform: `translateX(${activeButton.offsetLeft}px)`,
          });
        }
      }
    };
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home", title: "Página de inicio del sitio web de jeg dev studios" },
    {
      href: "/servicios",
      label: "Servicios",
      title: "Página de nuestros servicios",
      submenu: [
        {
          category: "Desarrollo",
          items: [
            {
              title: "Web",
              href: "/servicios/desarrollo/web",
              links: [
                { label: "Blogs", href: "/servicios/desarrollo/web/blogs" },
                { label: "E-commerce", href: "/servicios/desarrollo/web/ecommerce" },
                { label: "Invitaciones", href: "/servicios/desarrollo/web/invitacione" },
                { label: "Landing Pages", href: "/servicios/desarrollo/web/landing-pages" },
                { label: "Menus digitales", href: "/servicios/desarrollo/web/menus" },
                { label: "Sitios web y web corporativas", href: "/servicios/desarrollo/web/sitios-web" },
              ]
            },
            {
              title: "Apps",
              href: "/servicios/desarrollo/apps",
              links: [
                { label: "iOS & Android", href: "/servicios/desarrollo/apps" },
              ]
            },
            {
              title: "Software Empresarial",
              href: "/servicios/desarrollo/software-empresarial",
              links: [
                { label: "Sistemas a Medida", href: "/servicios/desarrollo/software-empresarial" },
              ]
            },
          ],
        },
        {
          category: "Diseño",
          items: [
            { label: "Branding & Identidad", href: "/servicios/diseno/branding" },
            { label: "Diseño UX/UI", href: "/servicios/diseno/ux-ui/web" },
            { label: "Material Publicitario", href: "/servicios/diseno/publicidad" },
          ],
        },
        {
          category: "SEO",
          items: [
            { label: "SEO Web & Técnico", href: "/servicios/seo/web" },
            { label: "SEO Local", href: "/servicios/seo/local" },
            // { label: "SEO Local", href: "/servicios/seo/geo" },
          ],
        },
      ],
    },
    { href: "/proyectos", label: "Proyectos", title: "Página de nuestros proyectos" },
    { href: "/sobre-nosotros", label: "Sobre Nosotros", title: "Página sobre nosotros y la empresa jeg dev studios" },
    { href: "https://blog.jegdevstudios.com/", label: "Blog", title: "Página del blog de tecnología de jeg dev studios" },
    { href: "/contacto", label: "Contacto", title: "Página de contacto de jeg dev studios" },
  ];

  const toggleSubmenu = (label: string) => {
    setMobileSubmenuOpen((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <button className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>menu</span>
      </button>
      <ul
        ref={navRef}
        className={`absolute left-0 top-full z-40 w-full origin-top-right md:overflow-visible bg-white/95 dark:bg-background-dark/90 py-4 text-gray-900 dark:text-white shadow-lg transition-all duration-300 backdrop-blur-md md:relative md:top-auto md:z-0 md:flex md:w-auto md:items-center md:bg-transparent md:py-0 md:shadow-none ${isMenuOpen
          ? "max-h-[85vh] overflow-y-auto opacity-100 bg-white dark:bg-[#101922]"
          : "max-h-0 overflow-hidden opacity-0 md:max-h-full md:opacity-100"
          }`}
      >
        <div
          className="md:hidden absolute top-0 left-0 h-2 w-full"
          style={indicatorStyle}
        />
        {navLinks.map((link) => (
          <li key={link.label} className="group relative">
            {link.submenu ? (
              <>
                <div
                  className="flex items-center justify-between md:justify-start cursor-pointer"
                  onClick={() => toggleSubmenu(link.label)}
                >
                  <span
                    className={`block px-6 py-3 text-base font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-500 md:px-3 md:py-2 ${pathname.startsWith(link.href) ? "text-blue-600 dark:text-blue-500" : ""}`}
                  >
                    {link.label}
                  </span>
                  <span className={`material-symbols-outlined text-[18px] text-gray-500 dark:text-slate-400 transition-transform duration-300 mr-6 md:mr-0 md:group-hover:text-blue-500 md:group-hover:rotate-180 ${mobileSubmenuOpen === link.label ? "rotate-180 text-blue-600 dark:text-blue-500 md:rotate-0 md:text-gray-500 dark:md:text-slate-400" : ""}`}>expand_more</span>
                </div>

                {/* Desktop Dropdown */}
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-1/2 -translate-x-1/2 top-full pt-4 w-auto transition-all duration-300 hidden md:block">
                  <div className="flex flex-col gap-6 bg-white/95 dark:bg-[#0B0D10]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-2xl min-w-[600px]">
                    <div className="flex gap-8">
                      {link.submenu.map((section) => (
                        <div key={section.category} className="flex flex-col gap-4 flex-1">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-500 border-b border-gray-200 dark:border-white/10 pb-2">{section.category}</h4>
                          <ul className="flex flex-col gap-2">
                            {section.items.map((item: any, index) => (
                              item.links ? (
                                <li key={index} className="flex flex-col gap-2 mb-1">
                                  {item.href ? (
                                    <Link href={item.href} onClick={() => setIsMenuOpen(false)} className="text-[11px] font-bold text-gray-500 dark:text-white/60 uppercase tracking-wider hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                                      {item.title}
                                    </Link>
                                  ) : (
                                    <span className="text-[11px] font-bold text-gray-500 dark:text-white/60 uppercase tracking-wider">{item.title}</span>
                                  )}
                                  <ul className="flex flex-col gap-1 border-l border-gray-200 dark:border-white/10 pl-3">
                                    {item.links.map((subLink: any) => (
                                      <li key={subLink.href}>
                                        <Link
                                          href={subLink.href}
                                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors block py-1 hover:translate-x-1 duration-200"
                                          onClick={() => setIsMenuOpen(false)}
                                        >
                                          {subLink.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              ) : (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors block py-1 hover:translate-x-1 duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              )
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 dark:border-white/10 pt-4 flex justify-end">
                      <Link
                        href={link.href}
                        className="text-sm font-bold text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-white transition-colors flex items-center gap-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Ver más <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile Submenu */}
                <div className={`flex flex-col gap-4 px-6 pb-4 md:hidden bg-gray-50 dark:bg-black/20 ${mobileSubmenuOpen === link.label ? "block" : "hidden"}`}>
                  {link.submenu.map((section) => (
                    <div key={section.category} className="flex flex-col gap-2">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-blue-600/70 dark:text-blue-500/70 mt-2">{section.category}</h4>
                      <ul className="flex flex-col gap-1 pl-2 border-l border-gray-200 dark:border-white/10">
                        {section.items.map((item: any, index) => (
                          item.links ? (
                            <li key={index} className="flex flex-col gap-1 mt-2">
                              {item.href ? (
                                <Link href={item.href} onClick={() => setIsMenuOpen(false)} className="text-[10px] font-bold text-gray-500 dark:text-white/50 uppercase tracking-wider pl-1 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                                  {item.title}
                                </Link>
                              ) : (
                                <span className="text-[10px] font-bold text-gray-500 dark:text-white/50 uppercase tracking-wider pl-1">{item.title}</span>
                              )}
                              <ul className="flex flex-col gap-1 pl-2 border-l border-gray-200 dark:border-white/5">
                                {item.links.map((subLink: any) => (
                                  <li key={subLink.href}>
                                    <Link
                                      href={subLink.href}
                                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white block py-1"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subLink.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ) : (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white block py-1"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            </li>
                          )
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-gray-200 dark:border-white/10">
                    <Link
                      href={link.href}
                      className="text-sm font-bold text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-white flex items-center gap-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Ver más <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <Link
                href={link.href}
                title={link.title}
                className={`block px-6 py-3 text-base font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-500 md:px-3 md:py-2 ${pathname === link.href
                  ? "text-blue-600 dark:text-blue-500"
                  : ""
                  }`}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
        <ThemeToggle />
      </ul>
    </>
  );
}