import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const Root = () => {
  return (
    <div className="container mx-auto font-poppins">
      <Navbar></Navbar>
      <div className="min-h-96">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;