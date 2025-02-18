"use client";
import Link from "next/link";


const Dashboard = () => {


  return (
    <div>
      <h1>Добро пожаловать в админ-панель!</h1>

      <nav>
        <ul>
          <li><Link href="/dashboard">Главная</Link></li>
          <li><Link href="/dashboard/users">Пользователи</Link></li>
          <li><Link href="/dashboard/settings">Настройки</Link></li>
        </ul>
      </nav>

      <button>Выход</button>
    </div>
  );
};

export default Dashboard;
