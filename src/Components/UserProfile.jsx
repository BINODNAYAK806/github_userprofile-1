import React from 'react'
import styles from "./Comp.module.css"

export default function UserProfile(props) {

    const{name,avatar_url,title,skillsets} = props
    
  return (
        
    <div className={styles.head}>
        <div >
            <div className={styles.name}>
                <h1 >{name}</h1>
                <button className={styles.button} >Follow</button>

            </div>
            <h2 className={styles.name2}>{title}</h2>
            <div className={styles.skill}>
            {skillsets.map((item)=>{

                return  <p>{item}</p>
            })}

            </div>

        </div>
        <div>

        <img className={styles.img} src={avatar_url} alt="123" srcset="" />            
        </div>

    </div>
  )
}
