import React from "react";
import Navbar from "@/components/Layout/Navbar";
import FrontPage from "@/components/Rafael/FrontPage";
import Carousel from "@/components/Layout/destinations";
import Destinys from "@/components/David/Destinys";


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

    <Destinys
      images={
        [
          {url:"/IMG/bento1.jpg",resort:'Cancún',description:'Cancun is a city in Mexico located on the Yucatan Peninsula bordering the Caribbean Sea and known for its beaches, numerous resorts and nightlife.',buton:'Read More'},

          {url:"/IMG/bento2.jpg",resort:'Questionnaire',description:'Take a questionnaire to identify the best destination for you vacations',buton:'Read More'},

          {url:"/IMG/bento3.jpg",resort:'Acapulco',description:"It is known for its nightlife and beache.",buton:'Read More'},

          {url:"/IMG/bento4.jpg",resort:'Londres',description:"Capital of England and the United Kingdom.",buton:'Read More'},

          {url:"/IMG/bento5.jpg",resort:'Hong Kong',description:"Hong Kong is an autonomous territory and former British colony in southeastern China. Its active, densely populated urban center is a major port and global financial center with a skyscraper-filled landscape.",buton:'Read More'},
          
          {url:"/IMG/bento6.jpg",resort:'Las Maldivas',description:"Maldives is a tropical country in the Indian Ocean encompassing 26 ring-shaped atolls that are made up of more than 1,000 coral islands.",buton:'Read More'}
        ]
      
      }
    />
      
      
    </div>

    
  );
}
