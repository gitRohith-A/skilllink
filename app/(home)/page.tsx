import Footer from "@/components/Home/Footer";
// import ServiceModal from "@/components/service/ServiceModal";
import React from "react";
import Page from '@/app/(home)/home/page'

export default function Home() {
  return (
    <React.Fragment>
      {/* <ServiceModal /> */}
      <Page />
      <Footer />
    </React.Fragment>
  );
}
