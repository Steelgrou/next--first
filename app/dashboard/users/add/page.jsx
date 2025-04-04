import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

export default function AddUserPage() {
    return (
        <div className={styles.container}>
            <form action={addUser} className={styles.form}>
                <input type="text" placeholder='username' name='username' required />
                <input type="text" placeholder='email' name='email' required />
                <input type="text" placeholder='password' name='password' required />
                <input type="text" placeholder='phone' name='phone' required />
                <select name="isAdmin" id="isAdmin">
                    <option value={false} >Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <select name="isActive" id="isActive">
                    <option value={true} >Is Active?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <textarea
                    name="address"
                    placeholder='address'
                    id="address"
                    rows="16"
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
