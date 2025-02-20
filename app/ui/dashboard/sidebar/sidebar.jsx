import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css"

import { MdDashboard, MdSupervisedUserCircle, MdSettings } from "react-icons/md";

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
        <div clasName={styles.container}>
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
        </div>
    );
}
export default Sidebar