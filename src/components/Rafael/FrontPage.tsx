import React, { Component } from 'react';
import styles from '@/components/styles/FrontPage.module.css';

interface FrontPageProps{
  title:string;
  description:string;
  image:string;
}

export default function FrontPage({title,description,image}:FrontPageProps) {
  return (
    <div>
      <section className={`p-3 d-flex flex-column justify-content-center ${styles.frontPageImage}`} style={{backgroundImage: `url('/IMG/${image}')`}}>
        <h1 className="display-3 text-white position-relative">{title}</h1>
        <h2 className="lead text-white position-relative">{description}</h2>
      </section>
    </div>
  )
}
