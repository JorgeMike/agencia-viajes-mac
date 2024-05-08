import React, { Component } from "react";
import styles from '@/components/styles/Bento.module.css';

interface BentoProps{
    images:image[]
}

interface image{
    url:string,
    alt:string
}

export default function Bento(props:BentoProps) {
  return (
    
    <div>
        <section className={styles.destinys}>

        </section>


    </div>
   
  )
}

//style={{backgroundImage:`url('${imagen.url}')`}}

/* 
<div className={`${styles.Bento}`}>
       
      {
        props.imagenes.map((imagen,index)=>(
            <div style={{backgroundImage:`url('${imagen.url}')`}} className={styles.it}>
                <p>Hola</p>
            </div>
        ))
      }

    </div>
*/