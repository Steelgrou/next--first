import mongoose from "mongoose";

export const connectToDB = async () => {
    // Объект для хранения состояния соединения
    const connection = {};

    try {
        // Если соединение уже установлено, завершаем выполнение
        if (connection.isConnected) return;

        // Подключаемся к MongoDB
        const db = await mongoose.connect(process.env.MONGO);

        // Устанавливаем состояние соединения
        connection.isConnected = db.connections[0].readyState;

    } catch (error) {
        // Обрабатываем ошибку и выбрасываем её
        throw new Error(error);
    }
}; 