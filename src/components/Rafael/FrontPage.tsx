import React, { Component } from 'react';
import styles from '@/components/styles/FrontPage.module.css';

export default function FrontPage() {
  return (
    <div>
       <section className={`p-3 mt-3 d-flex flex-column justify-content-center ${styles.frontPageImage}`}>
            <h1 className="display-3 text-white position-relative">AirMAC</h1>
            <h2 className="lead text-white position-relative">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
        </section>
    </div>
  )
}
