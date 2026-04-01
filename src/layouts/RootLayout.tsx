import { Outlet } from "react-router";
// import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import LetsBuildSomething from "../components/letsBuildSomething/LetsBuildSomething";
import FaqSection from "../components/faqSection/FaqSection";
import { useLocation } from "react-router";

export default function RootLayout() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <main>
      <Navbar />
      <Outlet />
      <FaqSection />
      <LetsBuildSomething />
      <Footer />
    </main>
  );
}
