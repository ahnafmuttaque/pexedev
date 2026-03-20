import { Outlet } from "react-router";
// import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

export default function RootLayout() {
  return (
    <main className="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
