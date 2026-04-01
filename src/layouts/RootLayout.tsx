import { Outlet } from "react-router";
// import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import LetsBuildSomething from "../components/letsBuildSomething/LetsBuildSomething";
import { useLocation } from "react-router";

export default function RootLayout() {
  const location = useLocation();
  const shouldHaveBackgroundImage =
    location.pathname === "/" || location.pathname === "/know-us";
  return (
    <main className={shouldHaveBackgroundImage ? "layout" : ""}>
      <Navbar />
      <Outlet />
      <LetsBuildSomething />
      <Footer />
    </main>
  );
}
