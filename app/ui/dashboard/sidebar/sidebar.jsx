import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css"


// icons

import { MdDashboard, MdSupervisedUserCircle, MdSettings, MdLogin } from "react-icons/md";
// data
const menuItems = [
    {
        title: "Pages",
        list: [
            { title: "Dashboard", icon: <MdDashboard />, path: "/dashboard" },
            { title: "Users", icon: <MdSupervisedUserCircle />, path: "/dashboard/users" },
            { title: "Products", icon: <MdSupervisedUserCircle />, path: "/dashboard/products" },
            { title: "Transactions", icon: <MdSupervisedUserCircle />, path: "/dashboard/transactions" },
            { title: "Settings", icon: <MdSettings />, path: "/dashboard/settings" },
        ]
    },
    {
        title: "Analytics",
        list: [
            { title: "Revenue", icon: <MdDashboard />, path: "/dashboard/revenue" },
            { title: "Reports", icon: <MdSupervisedUserCircle />, path: "/dashboard/reports" },
            { title: "Teams", icon: <MdSupervisedUserCircle />, path: "/dashboard/teams" }

        ]
    },
    {
        title: "User",
        list: [
            { title: "Settings", icon: <MdSettings />, path: "/dashboard/settings" },
            { title: "Help", icon: <MdSupervisedUserCircle />, path: "/dashboard/help" },
        ]
    }
]
const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <img className={styles.userImage} src="/profil.png" alt="saidbar-pic" width="50" height="50" />

                <div className={styles.userDetail}>
                    <span className={styles.username}>Aziz Adilov</span>
                    <span className={styles.userTitle} >Administrator</span>
                </div>
            </div>
            <ul>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
                
            </ul>
            <button className={styles.logout}>
               <MdLogin/> Logout
            </button>
        </div>
    );
}
export default Sidebar
