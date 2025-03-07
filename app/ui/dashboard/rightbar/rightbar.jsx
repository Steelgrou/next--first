import {MdReadMore } from "react-icons/md"
import styles from "./rightbar.module.css"

export default function Rightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <img style={{width:"100px"}} src="/profil.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>How  to use the new version of the admin dashboard</h3>
          <span className={styles.subtitle} >Takes 4 minutes to learn</span>
          <p className={styles.desc}> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
          <button className={styles.button}>
            <MdReadMore/> Watch
          </button>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.bgContainer} >
          <img style={{width:"100px"}} src="/profil.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>How  to use the new version of the admin dashboard</h3>
          <span className={styles.subtitle} >Takes 4 minutes to learn</span>
          <p className={styles.desc}> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
          <button className={styles.button}>
            <MdReadMore/> Watch
          </button>
        </div>
      </div>
    </div>
  )
}
