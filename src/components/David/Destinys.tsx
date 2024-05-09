import React,{Component} from 'react';
import styles from '@/components/styles/Destinys.module.css';

interface BentoProps{
    images:image[]
}

interface image{
    url:string
    resort:string
    description:string
    buton:string
}

export default function Destinys(props:BentoProps) {
  return (
    

        <section className={styles.container}>

       {
        props.images.map((image,index)=>(
            <div className={styles.container__img} style={{backgroundImage:`url(${image.url})`}}>
                
                <div className={styles.container__contenido}>
                    <h3>{image.resort}</h3>
                    <p>{image.description}</p>
                    <a className={styles.buton}>{image.buton}</a>
                </div>

            </div>

        ))
       }

        </section>

    
  )
}
