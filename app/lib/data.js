// Импорт модели User и Product
import { User, Product } from './models';
// Импорт функции для подключения к базе данных
import { connectToDB } from './utils';

// Константа количества элементов на странице
const ITEM_PER_PAGE = 10;

// Функция для получения пользователей
export const fetchUsers = async (q = "", page = 1) => {
    const currentPage = Math.max(Number(page) || 1, 1); // Гарантируем, что страница >= 1
    const regex = new RegExp(q, "i"); // Регулярка для поиска по имени

    try {
        await connectToDB(); // Дожидаемся подключения к БД

        // Получаем общее количество документов
        const count = await User.countDocuments({ username: { $regex: regex } });

        // Получаем пользователей, используя `lean()` для оптимизации
        const users = await User.find({ username: { $regex: regex } })
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (currentPage - 1))
            .lean(); // Ускоряет запрос, убирая лишние свойства Mongoose

        return { count, users };
    } catch (error) {
        console.error("❌ Error fetching users:", error);
        throw new Error("Failed to fetch users"); // Выбрасываем ошибку с сообщением
    }
};

// Функция для получения продуктов
export const fetchProducts = async (q = "", page = 1) => {
    const currentPage = Math.max(Number(page) || 1, 1);
    const regex = new RegExp(q, "i");

    try {
        await connectToDB();

        const count = await Product.countDocuments({ title: { $regex: regex } });
        const products = await Product.find({ title: { $regex: regex } })
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (currentPage - 1))
            .lean(); // Оптимизация

        return { count, products };
    } catch (error) {
        console.error("❌ Error fetching products:", error);
        throw new Error("Failed to fetch products");
    }
};
