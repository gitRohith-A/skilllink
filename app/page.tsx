import Footer from "@/components/Home/Footer";
import NavBar from "@/components/Home/NavBar";
import React from "react";
import Page from '@/app/home/page'


export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <Page />
      <Footer />
    </React.Fragment>
  );
}
