import { Outlet } from "react-router";
// import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import LetsBuildSomething from "../components/letsBuildSomething/LetsBuildSomething";
import FaqSection from "../components/faqSection/FaqSection";

export default function RootLayout() {
  return (
    <main className="layout">
      <Navbar />
      <Outlet />
      <LetsBuildSomething />
      <FaqSection />
      <Footer />
    </main>
  );
}
