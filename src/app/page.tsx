import React from "react";
import Navbar from "@/components/Layout/Navbar";
import FrontPage from "@/components/Rafael/FrontPage";
import Carousel from "@/components/Layout/destinations";
export default function Home() {
  return (
    <div>
      <div className="d-flex gap-2">
        <Navbar
          Title="AirMAC"
          HomeText="Home"
          SearchText="Search your destiny"
          Buttontext="Stays"
          image="https://i.pinimg.com/736x/55/a3/5a/55a35a4a9676243cc55b3fd8faed896b.jpg"
        />
      </div>
      <FrontPage 
        title="AirMAC"
        description="Find your ideal destination with us"
        image="lugares-turisticos-los-cabos.jpg"
      />
      <Carousel/>
    </div>
  );
}
