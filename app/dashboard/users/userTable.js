"use client";
import { useState } from "react";
import "./style.css"; // Подключаем стили

const UserTable = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Иван Иванов", email: "ivan@example.com", role: "Админ" },
    { id: 2, name: "Анна Смирнова", email: "anna@example.com", role: "Пользователь" },
    { id: 3, name: "Петр Петров", email: "petr@example.com", role: "Редактор" },
  ]);

  return (
    <div className="user-table-container">
      <h2>Список пользователей</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Email</th>
            <th>Роль</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
