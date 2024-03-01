import Banner from "@/components/Home/Banner";
import Footer from "@/components/Home/Footer";
import NavBar from "@/components/Home/NavBar";
import SearchandFilters from "@/components/Home/SearchandFilters";
import ServicesCard from "@/components/Home/ServicesCard";
import React from "react";


export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <Banner />
      <SearchandFilters />
      <ServicesCard />
      <Footer />
    </React.Fragment>
  );
}
