import React from 'react'
import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
        <div>

            <h1>
                CoolMintCompany
            </h1>

        </div>
        <div>
            
           <ul className={styles.li}>
               <li> <a href="">Über uns</a> </li>
               <li>Leistungen</li>
               <li>Jobs</li>
           </ul>

        </div>
    
    </div>
  )
}
