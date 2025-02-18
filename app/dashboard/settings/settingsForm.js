"use client";
import { useState, useEffect } from "react";
import "./style.css"; // Подключаем стили

const SettingsForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Загружаем сохраненные данные при загрузке компонента
  useEffect(() => {
    const savedUsername = localStorage.getItem("username") || "";
    const savedPassword = localStorage.getItem("password") || "";
    setUsername(savedUsername);
    setPassword(savedPassword);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Настройки успешно обновлены!");
  };

  return (
    <div className="settings-form-container">
      <h2>Настройки профиля</h2>
      <form onSubmit={handleSubmit} className="settings-form">
        <label>Логин</label>
        <input
          type="text"
          placeholder="Введите новый логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Новый пароль</label>
        <input
          type="password"
          placeholder="Введите новый пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="save-button">Сохранить</button>
      </form>
    </div>
  );
};

export default SettingsForm;
