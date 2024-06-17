import React,{Component} from "react";
import styles from '@/components/styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF,faXTwitter,faInstagram,faYoutube,} from '@fortawesome/free-brands-svg-icons'; 
import {faMapLocationDot,faPhoneSquare,faEnvelope} from '@fortawesome/free-solid-svg-icons';

 

export default function Footer() {
  return (
   <footer className={styles.footer}>

      <div className={styles.footer_us}>
    <h2 className={styles.title}>WE ARE</h2>
    <p className={styles.p_content}>MAC Airlines is a company in charge of providing the best type of tourist trips around the world. We help you schedule the best trip with the best cost and the best days to vacation. Follow us on our social networks:</p>
    <div className={styles.us_links}>
    <a href="#"><FontAwesomeIcon icon={faFacebookF} className={styles.icon}/></a>
    <a href="#"><FontAwesomeIcon icon={faXTwitter} className={styles.icon}/></a>
    <a href="#"><FontAwesomeIcon icon={faInstagram} className={styles.icon}/></a>
    <a href="#"><FontAwesomeIcon icon={faYoutube} className={styles.icon}/></a>
    </div>
      </div>  



      <div className={styles.footer_link}>
        
      <h2>suggested links</h2>
      <a href="">Us</a>
      <a href="">FAQ</a>
      <a href="">Policies</a>
      <a href="">Help</a>
      <a href="">Terms and condition</a>
      <a href="">Contact</a>

      </div>

      <div className={styles.footer_shop}>
      <h2>Shop</h2>
      <a href="">Hotel</a>
      <a href="">Transport</a>
      <a href="">Foods</a>
      <a href="">WaterParks</a>
      <a href="">Nightclubs</a>
      
      </div>

      <div className={styles.footer_contact}>

          <h2>CONTACTS</h2>

        <div className={styles.contact_map}>
          <FontAwesomeIcon icon={faMapLocationDot} className={styles.icon}/>
          <p>Av. Jardines de San Mateo s/n, Sta Cruz Acatlan, 53150 Naucalpan de Juárez, Méx.</p>
        </div>

        <div className={styles.contact_tel}>
          <FontAwesomeIcon icon={faPhoneSquare} className={styles.icon}/>
          <div className={styles.tel_number}>
            <a href="">+52 55 5623 1715</a>
            <a href="">+52 55 1236 4568</a>
          </div>
        </div>

        <div className={styles.contact_email}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
        <a href="">123456@pcpuma.acatlan.unam.mx</a>
        </div>
        
      </div>

   </footer>
  )
}
