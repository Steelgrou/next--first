import styles from "./transactions.module.css"

export default function Transactions() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.user}>
                            <img src="/profil.png"
                                alt=""
                                width={40}
                                height={40}
                                className={styles.userImage}
                            />
                            John Doe
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td className={styles.user}>
                            <img src="/profil.png"
                                alt=""
                                width={40}
                                height={40}
                                className={styles.userImage}
                            />
                            John Doe
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td className={styles.user}>
                            <img src="/profil.png"
                                alt=""
                                width={40}
                                height={40}
                                className={styles.userImage}
                            />
                            John Doe
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}
