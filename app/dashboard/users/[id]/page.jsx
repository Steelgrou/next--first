import styles from "@/app/ui/dashboard/products/singleUser/singleUser.module.css"
import Image from "next/image"


export default function SingleUserPage() {
    return (
        <div className={styles.container}>

            <div className={styles.infoContainer}>
                <div className="imgContainer">
                    <img src="/profil.png" alt="user" width={200} height={200} />

                </div>
                John Doe
            </div>

            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='hello' />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='steelgrou03@gmail.com' />
                    <label htmlFor="">Password</label>
                    <input type="password"  />
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder='123456789' />
                    <texarea type="text" placeholder='address'>Address</texarea>
                    <input type="text" placeholder='street name' />
                    <select name="isAdmin" id="isAdmin">
                        <option value={false} selected>No</option>
                        <option value={true}>Yes</option>
                    </select>
                    <select name="isActive" id="isActive">
                        <option value={false} selected>No</option>
                        <option value={true}>Yes</option>
                    </select>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}
