import { Outlet, useLocation } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scroll-to-top/ScrollToTop";

export default function RootLayout() {
  const location = useLocation();

  const setsOfpaths = new Set<string>(["/know-us", "/contact-us"]);
  const shouldHaveBackgroundImage = setsOfpaths.has(location.pathname);

  const isHomepage = location.pathname === "/";
  const isDarkTheme = location.pathname === "/portfolio";

  return (
    <main
      className={shouldHaveBackgroundImage ? "layout" : ""}
      data-theme={isDarkTheme ? "dark" : undefined}
    >
      <ScrollToTop />
      {!isHomepage && <Navbar />}
      <Outlet />
      <Footer />
    </main>
  );
}
