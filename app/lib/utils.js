// Импорт библиотеки mongoose для работы с MongoDB
import mongoose from "mongoose";

// Экспортируемая асинхронная функция для подключения к базе данных
export const connectToDB = async () => {
    // Объект для хранения состояния соединения
    const connection = {};

    try {
        // Если соединение уже установлено, завершаем выполнение функции
        if (connection.isConnected) return;

        // Подключаемся к MongoDB, используя строку подключения из переменных окружения
        const db = await mongoose.connect(process.env.MONGO);

        // Устанавливаем состояние соединения (1 означает успешное подключение)
        connection.isConnected = db.connections[0].readyState;

    } catch (error) {
        // Выводим ошибку в консоль
        console.log(error);
        
        // Выбрасываем новую ошибку с деталями
        throw new Error(error);
    }
};
