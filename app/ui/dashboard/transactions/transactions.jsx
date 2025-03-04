import styles from "./transactions.module.css"

export default function Transactions() {
    return (
        <div class name={styles.container}>
            <h2 class name={styles.title}>Latest Transactions</h2>
            <table class name={styles.table}>
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
                        <td>
                            <image src="/profil.png"
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
                </tbody>
            </table>


            Transactions</div>
    )
}
