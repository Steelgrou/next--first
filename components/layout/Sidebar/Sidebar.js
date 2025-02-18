// src/components/layout/Sidebar.js

import Link from "next/link";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <button className={styles.toggleBtn} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "⬅" : "➡"}
      </button>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard">🏠 Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/users">👥 Users</Link>
          </li>
          <li>
            <Link href="/dashboard/settings">⚙ Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
