import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <main className="min-h-screen bg-base-300">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
