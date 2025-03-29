import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";

// Определение асинхронного компонента UsersPage
export default async function UsersPage({ searchParams }) {
  // Извлекаем параметры поиска, приводя их к нужному типу
  const q = searchParams?.q ? String(searchParams.q) : "";
  const page = searchParams?.page ? Number(searchParams.page) : 1;

  // Запрашиваем пользователей, передавая параметры поиска
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className={styles.container}>
      {/* Верхняя часть с поиском и кнопкой добавления нового пользователя */}
      <div className={styles.top}>
        <Search placeholder="Search for a user ..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

      {/* Таблица с пользователями */}
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {/* Отображаем список пользователей */}
          {users.map((user) => (
            <tr key={user?._id}>
              <td>
                <div className={styles.user}>
                  {/* Оптимизированное изображение через next/image */}
                  <Image
                    src={user.img || "/profil.png"}
                    alt={user.username}
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt ? new Date(user?.createdAt).toLocaleDateString() : "N/A"}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "Active" : "Passive"}</td>
              <td>
                <div className={styles.buttons}>
                  {/* Ссылка на профиль пользователя */}
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  {/* Кнопка удаления пользователя */}
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Компонент пагинации */}
      <Pagination count={count} />
    </div>
  );
}
