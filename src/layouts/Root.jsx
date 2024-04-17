import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <div className="min-h-[450px] container mx-auto justify-center items-center">
      <Outlet>

      <ToastContainer className='w-full' />
      </Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;