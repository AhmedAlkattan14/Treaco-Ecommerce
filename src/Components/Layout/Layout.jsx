import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container  mx-auto">
        <Outlet>{children}</Outlet>
      </div>
      <Footer />
    </>
  );
}
