import React from "react";
import Navbar from "@/components/Layout/Navbar";
import FrontPage from "@/components/Rafael/FrontPage";
import Carousel from "@/components/Layout/destinations";
import MainCountry from "@/components/David/MainCountry";
import Footer from "@/components/David/Footer";
import Main from '@/components/David/Main';

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

    <Main
    url='/IMG/img_main.jpg'
    text='Airmac is a travel agency specialized in taking you to the most incredible countries in the world, with the best beaches, hotels and transportation.
    It is necessary that you complete a brief questionnaire in order to provide you with the best destination with the best price:'
    />

      <Carousel/>

      <MainCountry
        images={
          [
            {resort:'Cancún',desription:'Cancun is a city in Mexico located on the Yucatan Peninsula bordering the Caribbean Sea and known for its beaches, numerous resorts and nightlife.'},
            {resort:'France',desription:'France, in Western Europe, encompasses medieval cities, Alpine villages and Mediterranean beaches.'},
            {resort:'Acapulco',desription:'Acapulco, a beach resort on Mexico Pacific coast, sits on a large bay lined with high-rise buildings and the mountains of the Sierra Madre del Sur.'},
            {resort:'England',desription:'England, the birthplace of Shakespeare and The Beatles, is a country in the British Isles that borders Scotland and Wales'},
            {resort:'China',desription:'Hong Kong is an autonomous territory and former British colony in southeast China'},
            {resort:'Argentina',desription:'Argentina is a large South American country with terrain that includes the Andes mountains, glacial lakes and grasslands in the Pampas, the traditional grazing land of its famous cattle.'}
            
          ]
        }
      />
    
    
    <Footer/>
      
    </div>

    
  );
}
