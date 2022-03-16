import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Router from 'next/router'

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
               <li style={{textDecoration:"underline" }}> <Link href="/">Über uns</Link> </li>
               <li style={{textDecoration:"underline"}}> <Link href="/leistungen">Leistungen</Link> </li>
               <li style={{textDecoration:"underline"}}> <Link href="/jobs">Jobs</Link> </li>
           </ul>

        </div>
    
    </div>
  )
}
