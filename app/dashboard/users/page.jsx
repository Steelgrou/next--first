import { fetchUsers } from "@/app/lib/data"; // Импорт функции для получения списка пользователей
import Pagination from "@/app/ui/dashboard/pagination/pagination"; // Импорт компонента пагинации
import Search from "@/app/ui/dashboard/search/search"; // Импорт компонента поиска
import styles from "@/app/ui/dashboard/users/users.module.css"; // Импорт CSS-модуля стилей
import Link from "next/link"; // Импорт компонента Link для навигации

// Определение асинхронного компонента UsersPage
export default async function UsersPage({ searchParams }) {
  // Получаем параметр поиска из searchParams (если его нет, устанавливаем пустую строку)
  const q = searchParams?.q || "";

  // Запрашиваем пользователей, передавая параметр поиска
  const users = await fetchUsers(q);

  return (
    <div className={styles.container}>
      {/* Верхняя часть с поиском и кнопкой добавления нового пользователя */}
      <div className={styles.top}>
        <Search placeholder="Search for a user ..." /> {/* Компонент поиска */}
        <Link href="/dashboard/users/add"> {/* Ссылка для перехода на страницу добавления пользователя */}
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

      {/* Таблица с пользователями */}
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td> {/* Заголовок для имени */}
            <td>Email</td> {/* Заголовок для email */}
            <td>Created</td> {/* Заголовок для даты создания */}
            <td>Role</td> {/* Заголовок для роли */}
            <td>Status</td> {/* Заголовок для статуса */}
            <td>Action</td> {/* Заголовок для действий */}
          </tr>
        </thead>
        <tbody>
          {/* Отображаем список пользователей */}
          {users.map((user) => (
            <tr key={user.id}> {/* Уникальный ключ для React */}
              <td>
                <div className={styles.user}>
                  {/* Изображение пользователя, если нет — ставим стандартное */}
                  <img
                    src={user.img || "/profil.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username} {/* Отображаем имя пользователя */}
                </div>
              </td>
              <td>{user.email}</td> {/* Отображаем email пользователя */}
              <td>{user.createdAt?.toString().slice(4, 16)}</td> {/* Дата создания (обрезанный формат) */}
              <td>{user.isAdmin ? "Admin" : "Client"}</td> {/* Проверяем, является ли пользователь админом */}
              <td>{user.isActive ? "active" : "passive"}</td> {/* Проверяем, активен ли пользователь */}
              <td>
                <div className={styles.buttons}>
                  {/* Кнопка для просмотра профиля пользователя */}
                  <Link href={`/dashboard/users/${user.id}`}>
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
      <Pagination />
    </div>
  );
}
