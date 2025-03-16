import styles from "@/app/ui/login/login.module.css";
export default function LoginPage() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input type="email" placeholder="username" className={styles.username} />
        <input type="password" placeholder="password" className={styles.password} />
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
}
