// Импорт библиотеки mongoose для работы с MongoDB
import mongoose from "mongoose";

// Определение схемы пользователя (User)
const userScheme = mongoose.Schema(
  {
    username: {
      type: String, // Имя пользователя - строка
      required: true, // Поле обязательно для заполнения
      unique: true, // Имя должно быть уникальным
      min: 3, // Минимальная длина 3 символа
      max: 20, // Максимальная длина 20 символов
    },
    email: {  
      type: String, // Email - строка
      required: true, // Поле обязательно для заполнения
      unique: true, // Email должен быть уникальным
    },
    password: {
      type: String, // Пароль - строка
      required: true, // Поле обязательно для заполнения
    },
    img: {
      type: String, // Поле для ссылки на изображение профиля
    },
    isAdmin: {
      type: Boolean, // Флаг, указывающий, является ли пользователь администратором
      default: false, // По умолчанию пользователь НЕ администратор
    },
    isActive: {
      type: Boolean, // Флаг активности пользователя
      default: true, // По умолчанию пользователь активен
    },
    phone: {
      type: String, // Телефон - строка
    },
    address: {
      type: String, // Адрес - строка
    },
  },
  { timestamps: true } // Автоматически добавляет поля createdAt и updatedAt
);

// Определение схемы продукта (Product)
const productScheme = mongoose.Schema(
  {
    title: {
      type: String, // Название продукта - строка
      required: true, // Поле обязательно для заполнения
    },
    desc: {
      type: String, // Описание продукта - строка
      required: true, // Поле обязательно для заполнения
      min: 0, // Минимальная длина 0 (фактически любое описание допустимо)
    },
    price: {
      type: Number, // Цена - число
    },
    stock: {
      type: Number, // Количество товара на складе - число
      required: true, // Поле обязательно для заполнения
      min: 0, // Минимальное значение 0 (не может быть отрицательным)
    },
    img: {
      type: String, // Поле для ссылки на изображение продукта
    },
    color: {
      type: String, // Цвет продукта - строка
    },
    size: {
      type: String, // Размер продукта - строка
    },
  },
  { timestamps: true } // Автоматически добавляет поля createdAt и updatedAt
);

// Экспортируем модели User и Product. Если они уже существуют, используем их, иначе создаем новые.
export const User = mongoose.models.User || mongoose.model("User", userScheme);
export const Product = mongoose.models.Product || mongoose.model("Product", productScheme);
