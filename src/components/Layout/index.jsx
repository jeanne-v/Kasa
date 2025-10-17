import { Outlet } from "react-router";

import Header from "../Header";
import Footer from "../Footer";

import "./Layout.scss";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__content">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
