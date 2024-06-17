import react,{Component} from 'react';
import styles from '@/components/styles/MainCountry.module.css';



interface BentoProps{

  images:image[]
  
}

interface image{
  resort:string
  desription:string
}


export default function MainCountry(props:BentoProps){
  return (


    
    <section className={styles.bento}>
        
      {
        props.images.map((image,index)=>(
            <div className={styles.bento__im}>
                <div className={styles.bento__content}>
                    <h3>{image.resort}</h3>
                    <p>{image.desription}</p>
                    
                </div>
            </div>
        ))
      }

    </section>

  )
}
