import React from 'react'
import styles from '@/components/styles/Countries.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight,faHouse } from '@fortawesome/free-solid-svg-icons';

interface CountriesProps{
    images:image[]
}

interface image{
    url:string,
    title:string,
    content:string,
    ruta:string
}

export default function Countries(props:CountriesProps) {
  return (

    
        <div>
        <div className={styles.tit}>

        <h2>Get to know our destinations</h2>
        <p>Find within our packages the countries to which you and your family can travel. We have packages for the best beaches in the most sought-after countries in the world, come and make your dream of traveling the world a reality.</p>
            </div>
        
    <section className={styles.container}>

        {
            props.images.map((image)=>(
                <div className={styles.country}>
                    <div className={styles.country_img}>
                    <img src={image.url} alt="" />
                    </div>

                    <div className={styles.country_content}>
                        <div className={styles.content_text}>
                    <h2>{image.title}</h2>
                    <p>{image.content}</p>
                    <Link href={'/'} className={styles.link}>
                        {image.title} 
                        <FontAwesomeIcon icon={faCircleChevronRight} className={styles.icons}/>                    
                    </Link>
                        </div>
                    </div>
                </div>
            ))
        }
    </section>

    <div className={styles.iconos}>
        <Link href={'/'} className={styles.iconos_a}>
            <FontAwesomeIcon icon={faHouse} className={styles.a_icon}/>
        </Link>
    </div>
    </div>
  )
}
