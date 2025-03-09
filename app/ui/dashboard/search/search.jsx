import { MdSearch } from "react-icons/md"
import styles from "./search.module.css"

export default function Search({placeholder}) {
  return (
    <div clasName={styles.container}>
    <MdSearch/>
    <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  ) 
}
