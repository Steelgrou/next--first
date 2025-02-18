"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css"; // Подключаем стили Toastify
import "./styles.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const showToast = (message, type) => {
    Toastify({
      text: message,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      style: {
        background: type === "success" 
          ? "linear-gradient(to right, #4CAF50, #66BB6A)" 
          : "linear-gradient(to right, #E53935, #D32F2F)",
        color: "#fff",
        borderRadius: "8px",
        padding: "12px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      },
    }).showToast();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem("username") || "admin";
    const storedPassword = localStorage.getItem("password") || "password";

    if (username === storedUsername && password === storedPassword) {
      showToast("Успешный вход!", "success");
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } else {
      showToast("Неверный логин или пароль!", "error");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Авторизация</h2>

        <label>Логин</label>
        <input
          type="text"
          placeholder="Введите логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Пароль</label>
        <input
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginForm;
