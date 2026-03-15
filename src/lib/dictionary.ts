const dictionaries = {
    en: () => import("../dictionaries/en.json").then((module) => module.default),
    ru: () => import("../dictionaries/ru.json").then((module) => module.default),
    uz: () => import("../dictionaries/uz.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
    // Agar til ro'yxatda bo'lmasa, uzbekchasini qaytaradi
    const fn = dictionaries[locale as keyof typeof dictionaries] || dictionaries.uz;
    return fn();
};