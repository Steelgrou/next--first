"use client"; // Обязательно для работы с useState и useRouter
import LoginForm from "./loginForm"; // Подключаем компонент логина

export default function LoginPage() {
  return (
    <div>
      <h1>Вход в систему</h1>
      <LoginForm />
    </div>
  );
}
