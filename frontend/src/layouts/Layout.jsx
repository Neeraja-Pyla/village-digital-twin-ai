import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

function Layout() {
  return (
    <div className="min-h-screen flex bg-slate-950 text-white">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Navbar />

        <main className="flex-1 p-8">
          <Outlet />
        </main>

        <Footer />

      </div>

    </div>
  );
}

export default Layout;