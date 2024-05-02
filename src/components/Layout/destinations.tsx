import React from 'react'
import  styles  from "@/components/styles/Carouselstye.module.css"

export default function Carousel() {
  return (
    <div className="w-100 d-flex">
    
    <section className={`d-flex ${styles.section}`}>
    <img  src="https://i.pinimg.com/564x/28/65/fc/2865fcd11432db2111eccf5c9248b0f8.jpg" alt="San francisco" />
    <img src="https://i.pinimg.com/564x/69/4d/70/694d702936b3fcd111808f42c4a6c7c6.jpg" alt="England" />
    <img src="https://i.pinimg.com/736x/9b/f7/15/9bf715b76ccdd027ed3135ac0787551f.jpg" alt="Argentina"/>
    <img src="https://i.pinimg.com/564x/0b/7f/e5/0b7fe51e2436493d75ff0fc0369d1fff.jpg" alt="Mexico" />
    </section>
    </div>
  )
}
