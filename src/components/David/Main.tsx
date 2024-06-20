import react,{Component} from 'react';
import styles from '@/components/styles/Main.module.css';
import Link from 'next/link';

interface MainProps{
    url:string,
    text:string
}

export default function Main(props:MainProps) {
  return (
    <section className={styles.main}>

        <div className={styles.main_img}>
            <img src={props.url} alt="" />
        </div>
        
        <div className={styles.main_content}>
            <div className={styles.main_content_title}>
            <h2>AirMac</h2>
            <p>{props.text}</p>
            </div>
            <Link href={'/questionnaire'} className={styles.button}>Take Quiz</Link>
        </div>

    </section>
  )
}
