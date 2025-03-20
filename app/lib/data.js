// Импорт модели User из файла models
import { User } from './models';
import { connectToDB } from './utils';

// Асинхронная функция для получения пользователей из базы данных
export const fetchUsers = async () => {
    try {
        connectToDB();
        // Используем метод find() модели User для получения всех пользователей
        const users = await User.find();
        
        // Возвращаем полученных пользователей
        return users;
    } catch (error) {
        // Логируем ошибку, если что-то пошло не так
        console.log(error);
        
        // Выбрасываем новую ошибку с сообщением о неудаче
        throw new Error("Failed to fetch users");
    }
};