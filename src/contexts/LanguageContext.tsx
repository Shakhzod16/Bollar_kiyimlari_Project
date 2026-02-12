import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'uz' | 'ru' | 'en' | 'tr' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.products': 'Mahsulotlar',
    'nav.marketplaces': 'Marketpleyslar',
    'nav.about': 'Biz haqimizda',
    'nav.contact': 'Kontaktlar',

    // Hero
    'hero.title': 'Bolalar uchun qulay va zamonaviy kiyimlar',
    'hero.subtitle': 'Har kuni kiyish uchun yumshoq, xavfsiz va chiroyli liboslar',
    'hero.products': 'Mahsulotlar',
    'hero.contact': "Bog'lanish",

    // Categories
    'categories.title': 'Kategoriyalar',
    'categories.tshirts': 'Futbolkalar',
    'categories.pants': 'Shimlar',
    'categories.hoodies': 'Jilet va Hudilar',
    'categories.sets': "To'plamlar",

    // Values
    'values.title': "Nima uchun biz?",
    'values.natural': 'Tabiiy matolar',
    'values.natural.desc': "Bolalar terisi uchun xavfsiz paxta materiallar",
    'values.comfort': 'Qulaylik',
    'values.comfort.desc': 'Erkin harakat uchun maxsus dizayn',
    'values.safety': 'Xavfsizlik',
    'values.safety.desc': 'Barcha mahsulotlar sertifikatlangan',
    'values.quality': 'Mustahkam sifat',
    'values.quality.desc': "Kundalik kiyish uchun ishonchli tikuv",

    // Products
    'products.title': 'Mahsulotlar',
    'products.filter.all': 'Barchasi',
    'products.filter.tshirts': 'Futbolkalar',
    'products.filter.pants': 'Shimlar',
    'products.filter.hoodies': 'Hudilar',
    'products.filter.sets': "To'plamlar",
    'products.contact': "Bog'lanish",

    // Product items
    'product.tshirt1.name': "Ko'k paxta futbolka",
    'product.tshirt1.desc': "Yumshoq paxta materialdan tayyorlangan qulay futbolka",
    'product.tshirt2.name': 'Chiziqli futbolka',
    'product.tshirt2.desc': "Oq-pushti chiziqli chiroyli futbolka",
    'product.pants1.name': 'Bej rangli shim',
    'product.pants1.desc': "Kundalik kiyish uchun qulay paxta shim",
    'product.pants2.name': 'Yengil jinsi shim',
    'product.pants2.desc': "Bolalar uchun yumshoq jinsi shim",
    'product.hoodie1.name': "Shaftoli rangli hudi",
    'product.hoodie1.desc': "Iliq va qulay kapyushonli sviter",
    'product.set1.name': "Yoz to'plami",
    'product.set1.desc': "Futbolka va shortik to'plami",

    // Marketplaces
    'marketplaces.title': 'Marketpleyslar',
    'marketplaces.subtitle': 'Mahsulotlarimizni quyidagi platformalarda ham topishingiz mumkin',
    'marketplaces.instagram': 'Instagram do\'kon',
    'marketplaces.instagram.desc': 'Yangi kolleksiyalar va maxsus takliflar',
    'marketplaces.telegram': 'Telegram kanal',
    'marketplaces.telegram.desc': 'Tezkor yangiliklar va buyurtma',
    'marketplaces.uzum': 'Uzum Market',
    'marketplaces.uzum.desc': "O'zbekistonning eng katta onlayn do'koni",
    'marketplaces.open': "Ko'rish",

    // About
    'about.title': 'Biz haqimizda',
    'about.story.title': 'Bizning tariximiz',
    'about.story.p1': "Bollar Kiyimlari — bu bolalar uchun kundalik kiyimlar ishlab chiqaruvchi brend. Biz har bir bolaning qulayligi va xavfsizligini birinchi o'ringa qo'yamiz.",
    'about.story.p2': "Har bir mahsulot sinchkovlik bilan tanlangan tabiiy paxta va sifatli materiallardan tayyorlanadi. Bolalar terisi uchun eng xavfsiz materiallardan foydalanamiz.",
    'about.story.p3': "Bizning maqsadimiz — har bir bolaga qulay, chiroyli va arzon narxlarda kiyimlarni taqdim etish.",
    'about.why.title': "Nima uchun Bollar Kiyimlari?",
    'about.why.item1': "100% tabiiy paxta materiallar",
    'about.why.item2': 'Professional tikuvchilar jamoasi',
    'about.why.item3': "Zamonaviy va qulay dizayn",
    'about.why.item4': 'Butun O\'zbekiston bo\'ylab yetkazib berish',

    // Contact
    'contact.title': 'Kontaktlar',
    'contact.subtitle': "Savollaringiz bormi? Biz bilan bog'laning!",
    'contact.phone': 'Telefon',
    'contact.telegram': 'Telegram',
    'contact.instagram': 'Instagram',
    'contact.address': 'Manzil',
    'contact.address.value': "Toshkent shahri, O'zbekiston",
    'contact.form.name': 'Ismingiz',
    'contact.form.phone': 'Telefon raqamingiz',
    'contact.form.message': 'Xabaringiz',
    'contact.form.submit': 'Yuborish',
    'contact.form.success': "Xabaringiz muvaffaqiyatli yuborildi!",

    // Footer
    'footer.rights': 'Barcha huquqlar himoyalangan',
    'footer.tagline': "Bolalar uchun qulay va zamonaviy kiyimlar",
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.products': 'Продукция',
    'nav.marketplaces': 'Маркетплейсы',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',

    // Hero
    'hero.title': 'Удобная и современная одежда для детей',
    'hero.subtitle': 'Мягкая, безопасная и красивая одежда для повседневной носки',
    'hero.products': 'Продукция',
    'hero.contact': 'Связаться',

    // Categories
    'categories.title': 'Категории',
    'categories.tshirts': 'Футболки',
    'categories.pants': 'Брюки',
    'categories.hoodies': 'Худи и жилеты',
    'categories.sets': 'Комплекты',

    // Values
    'values.title': 'Почему мы?',
    'values.natural': 'Натуральные ткани',
    'values.natural.desc': 'Безопасные хлопковые материалы для детской кожи',
    'values.comfort': 'Комфорт',
    'values.comfort.desc': 'Специальный дизайн для свободы движений',
    'values.safety': 'Безопасность',
    'values.safety.desc': 'Вся продукция сертифицирована',
    'values.quality': 'Прочное качество',
    'values.quality.desc': 'Надёжная строчка для повседневной носки',

    // Products
    'products.title': 'Продукция',
    'products.filter.all': 'Все',
    'products.filter.tshirts': 'Футболки',
    'products.filter.pants': 'Брюки',
    'products.filter.hoodies': 'Худи',
    'products.filter.sets': 'Комплекты',
    'products.contact': 'Связаться',

    // Product items
    'product.tshirt1.name': 'Голубая хлопковая футболка',
    'product.tshirt1.desc': 'Удобная футболка из мягкого хлопка',
    'product.tshirt2.name': 'Полосатая футболка',
    'product.tshirt2.desc': 'Красивая бело-розовая полосатая футболка',
    'product.pants1.name': 'Бежевые брюки',
    'product.pants1.desc': 'Удобные хлопковые брюки для повседневной носки',
    'product.pants2.name': 'Лёгкие джинсы',
    'product.pants2.desc': 'Мягкие джинсы для детей',
    'product.hoodie1.name': 'Персиковое худи',
    'product.hoodie1.desc': 'Тёплый и удобный свитер с капюшоном',
    'product.set1.name': 'Летний комплект',
    'product.set1.desc': 'Комплект из футболки и шорт',

    // Marketplaces
    'marketplaces.title': 'Маркетплейсы',
    'marketplaces.subtitle': 'Нашу продукцию можно найти на следующих платформах',
    'marketplaces.instagram': 'Instagram магазин',
    'marketplaces.instagram.desc': 'Новые коллекции и специальные предложения',
    'marketplaces.telegram': 'Telegram канал',
    'marketplaces.telegram.desc': 'Быстрые новости и заказы',
    'marketplaces.uzum': 'Uzum Market',
    'marketplaces.uzum.desc': 'Крупнейший онлайн магазин Узбекистана',
    'marketplaces.open': 'Смотреть',

    // About
    'about.title': 'О нас',
    'about.story.title': 'Наша история',
    'about.story.p1': 'SOF KARAKUL — это бренд повседневной одежды для детей. Мы ставим комфорт и безопасность каждого ребёнка на первое место.',
    'about.story.p2': 'Каждое изделие создаётся из тщательно отобранного натурального хлопка и качественных материалов. Мы используем самые безопасные материалы для детской кожи.',
    'about.story.p3': 'Наша цель — предоставить каждому ребёнку удобную, красивую и доступную одежду.',
    'about.why.title': 'Почему SOF KARAKUL?',
    'about.why.item1': '100% натуральные хлопковые материалы',
    'about.why.item2': 'Команда профессиональных мастеров',
    'about.why.item3': 'Современный и удобный дизайн',
    'about.why.item4': 'Доставка по всему Узбекистану',

    // Contact
    'contact.title': 'Контакты',
    'contact.subtitle': 'Есть вопросы? Свяжитесь с нами!',
    'contact.phone': 'Телефон',
    'contact.telegram': 'Telegram',
    'contact.instagram': 'Instagram',
    'contact.address': 'Адрес',
    'contact.address.value': 'г. Ташкент, Узбекистан',
    'contact.form.name': 'Ваше имя',
    'contact.form.phone': 'Ваш телефон',
    'contact.form.message': 'Ваше сообщение',
    'contact.form.submit': 'Отправить',
    'contact.form.success': 'Сообщение успешно отправлено!',

    // Footer
    'footer.rights': 'Все права защищены',
    'footer.tagline': 'Удобная и современная одежда для детей',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.marketplaces': 'Marketplaces',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Comfortable and Modern Clothing for Children',
    'hero.subtitle': 'Soft, safe, and beautiful clothes for everyday wear',
    'hero.products': 'Products',
    'hero.contact': 'Contact Us',

    // Categories
    'categories.title': 'Categories',
    'categories.tshirts': 'T-Shirts',
    'categories.pants': 'Pants',
    'categories.hoodies': 'Hoodies & Vests',
    'categories.sets': 'Sets',

    // Values
    'values.title': 'Why Choose Us?',
    'values.natural': 'Natural Fabrics',
    'values.natural.desc': 'Safe cotton materials for children\'s skin',
    'values.comfort': 'Comfort',
    'values.comfort.desc': 'Special design for freedom of movement',
    'values.safety': 'Safety',
    'values.safety.desc': 'All products are certified',
    'values.quality': 'Durable Quality',
    'values.quality.desc': 'Reliable stitching for everyday wear',

    // Products
    'products.title': 'Products',
    'products.filter.all': 'All',
    'products.filter.tshirts': 'T-Shirts',
    'products.filter.pants': 'Pants',
    'products.filter.hoodies': 'Hoodies',
    'products.filter.sets': 'Sets',
    'products.contact': 'Contact Us',

    // Product items
    'product.tshirt1.name': 'Blue Cotton T-Shirt',
    'product.tshirt1.desc': 'Comfortable t-shirt made from soft cotton',
    'product.tshirt2.name': 'Striped T-Shirt',
    'product.tshirt2.desc': 'Beautiful white and pink striped t-shirt',
    'product.pants1.name': 'Beige Pants',
    'product.pants1.desc': 'Comfortable cotton pants for everyday wear',
    'product.pants2.name': 'Light Jeans',
    'product.pants2.desc': 'Soft jeans for children',
    'product.hoodie1.name': 'Peach Hoodie',
    'product.hoodie1.desc': 'Warm and comfortable hooded sweater',
    'product.set1.name': 'Summer Set',
    'product.set1.desc': 'T-shirt and shorts set',

    // Marketplaces
    'marketplaces.title': 'Marketplaces',
    'marketplaces.subtitle': 'Find our products on the following platforms',
    'marketplaces.instagram': 'Instagram Shop',
    'marketplaces.instagram.desc': 'New collections and special offers',
    'marketplaces.telegram': 'Telegram Channel',
    'marketplaces.telegram.desc': 'Quick updates and orders',
    'marketplaces.uzum': 'Uzum Market',
    'marketplaces.uzum.desc': 'Uzbekistan\'s largest online store',
    'marketplaces.open': 'View',

    // About
    'about.title': 'About Us',
    'about.story.title': 'Our Story',
    'about.story.p1': 'SOF KARAKUL is a brand of everyday clothing for children. We put the comfort and safety of every child first.',
    'about.story.p2': 'Every product is made from carefully selected natural cotton and quality materials. We use the safest materials for children\'s skin.',
    'about.story.p3': 'Our goal is to provide every child with comfortable, beautiful, and affordable clothing.',
    'about.why.title': 'Why SOF KARAKUL?',
    'about.why.item1': '100% natural cotton materials',
    'about.why.item2': 'Team of professional craftsmen',
    'about.why.item3': 'Modern and comfortable design',
    'about.why.item4': 'Delivery throughout Uzbekistan',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Have questions? Get in touch with us!',
    'contact.phone': 'Phone',
    'contact.telegram': 'Telegram',
    'contact.instagram': 'Instagram',
    'contact.address': 'Address',
    'contact.address.value': 'Tashkent, Uzbekistan',
    'contact.form.name': 'Your Name',
    'contact.form.phone': 'Your Phone',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send',
    'contact.form.success': 'Message sent successfully!',

    // Footer
    'footer.rights': 'All rights reserved',
    'footer.tagline': 'Comfortable and modern clothing for children',
  },
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.products': 'Ürünler',
    'nav.marketplaces': 'Pazaryerleri',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',

    // Hero
    'hero.title': 'Çocuklar İçin Rahat ve Modern Giysiler',
    'hero.subtitle': 'Günlük kullanım için yumuşak, güvenli ve güzel giysiler',
    'hero.products': 'Ürünler',
    'hero.contact': 'İletişim',

    // Categories
    'categories.title': 'Kategoriler',
    'categories.tshirts': 'Tişörtler',
    'categories.pants': 'Pantolonlar',
    'categories.hoodies': 'Kapüşonlular',
    'categories.sets': 'Setler',

    // Values
    'values.title': 'Neden Biz?',
    'values.natural': 'Doğal Kumaşlar',
    'values.natural.desc': 'Çocuk cildi için güvenli pamuklu malzemeler',
    'values.comfort': 'Konfor',
    'values.comfort.desc': 'Hareket özgürlüğü için özel tasarım',
    'values.safety': 'Güvenlik',
    'values.safety.desc': 'Tüm ürünler sertifikalıdır',
    'values.quality': 'Dayanıklı Kalite',
    'values.quality.desc': 'Günlük kullanım için güvenilir dikiş',

    // Products
    'products.title': 'Ürünler',
    'products.filter.all': 'Tümü',
    'products.filter.tshirts': 'Tişörtler',
    'products.filter.pants': 'Pantolonlar',
    'products.filter.hoodies': 'Kapüşonlular',
    'products.filter.sets': 'Setler',
    'products.contact': 'İletişim',

    // Product items
    'product.tshirt1.name': 'Mavi Pamuklu Tişört',
    'product.tshirt1.desc': 'Yumuşak pamuktan yapılmış rahat tişört',
    'product.tshirt2.name': 'Çizgili Tişört',
    'product.tshirt2.desc': 'Güzel beyaz ve pembe çizgili tişört',
    'product.pants1.name': 'Bej Pantolon',
    'product.pants1.desc': 'Günlük kullanım için rahat pamuklu pantolon',
    'product.pants2.name': 'Hafif Kot',
    'product.pants2.desc': 'Çocuklar için yumuşak kot pantolon',
    'product.hoodie1.name': 'Şeftali Rengi Kapüşonlu',
    'product.hoodie1.desc': 'Sıcak ve rahat kapüşonlu kazak',
    'product.set1.name': 'Yaz Seti',
    'product.set1.desc': 'Tişört ve şort seti',

    // Marketplaces
    'marketplaces.title': 'Pazaryerleri',
    'marketplaces.subtitle': 'Ürünlerimizi aşağıdaki platformlarda bulabilirsiniz',
    'marketplaces.instagram': 'Instagram Mağazası',
    'marketplaces.instagram.desc': 'Yeni koleksiyonlar ve özel teklifler',
    'marketplaces.telegram': 'Telegram Kanalı',
    'marketplaces.telegram.desc': 'Hızlı haberler ve siparişler',
    'marketplaces.uzum': 'Uzum Market',
    'marketplaces.uzum.desc': 'Özbekistan\'ın en büyük online mağazası',
    'marketplaces.open': 'Görüntüle',

    // About
    'about.title': 'Hakkımızda',
    'about.story.title': 'Hikayemiz',
    'about.story.p1': 'SOF KARAKUL, çocuklar için günlük giysi markasıdır. Her çocuğun konforu ve güvenliğini ön planda tutuyoruz.',
    'about.story.p2': 'Her ürün, özenle seçilmiş doğal pamuk ve kaliteli malzemelerden yapılır. Çocuk cildi için en güvenli malzemeleri kullanıyoruz.',
    'about.story.p3': 'Amacımız, her çocuğa rahat, güzel ve uygun fiyatlı giysiler sunmaktır.',
    'about.why.title': 'Neden SOF KARAKUL?',
    'about.why.item1': '%100 doğal pamuklu malzemeler',
    'about.why.item2': 'Profesyonel ustalar ekibi',
    'about.why.item3': 'Modern ve rahat tasarım',
    'about.why.item4': 'Özbekistan genelinde teslimat',

    // Contact
    'contact.title': 'İletişim',
    'contact.subtitle': 'Sorularınız mı var? Bizimle iletişime geçin!',
    'contact.phone': 'Telefon',
    'contact.telegram': 'Telegram',
    'contact.instagram': 'Instagram',
    'contact.address': 'Adres',
    'contact.address.value': 'Taşkent, Özbekistan',
    'contact.form.name': 'Adınız',
    'contact.form.phone': 'Telefonunuz',
    'contact.form.message': 'Mesajınız',
    'contact.form.submit': 'Gönder',
    'contact.form.success': 'Mesaj başarıyla gönderildi!',

    // Footer
    'footer.rights': 'Tüm hakları saklıdır',
    'footer.tagline': 'Çocuklar için rahat ve modern giysiler',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.marketplaces': 'Marchés',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Vêtements Confortables et Modernes pour Enfants',
    'hero.subtitle': 'Des vêtements doux, sûrs et beaux pour le quotidien',
    'hero.products': 'Produits',
    'hero.contact': 'Contact',

    // Categories
    'categories.title': 'Catégories',
    'categories.tshirts': 'T-Shirts',
    'categories.pants': 'Pantalons',
    'categories.hoodies': 'Sweats à capuche',
    'categories.sets': 'Ensembles',

    // Values
    'values.title': 'Pourquoi Nous?',
    'values.natural': 'Tissus Naturels',
    'values.natural.desc': 'Matériaux en coton sûrs pour la peau des enfants',
    'values.comfort': 'Confort',
    'values.comfort.desc': 'Design spécial pour la liberté de mouvement',
    'values.safety': 'Sécurité',
    'values.safety.desc': 'Tous les produits sont certifiés',
    'values.quality': 'Qualité Durable',
    'values.quality.desc': 'Coutures fiables pour un usage quotidien',

    // Products
    'products.title': 'Produits',
    'products.filter.all': 'Tous',
    'products.filter.tshirts': 'T-Shirts',
    'products.filter.pants': 'Pantalons',
    'products.filter.hoodies': 'Sweats',
    'products.filter.sets': 'Ensembles',
    'products.contact': 'Contact',

    // Product items
    'product.tshirt1.name': 'T-Shirt Bleu en Coton',
    'product.tshirt1.desc': 'T-shirt confortable en coton doux',
    'product.tshirt2.name': 'T-Shirt Rayé',
    'product.tshirt2.desc': 'Beau t-shirt rayé blanc et rose',
    'product.pants1.name': 'Pantalon Beige',
    'product.pants1.desc': 'Pantalon confortable en coton pour le quotidien',
    'product.pants2.name': 'Jean Léger',
    'product.pants2.desc': 'Jean doux pour enfants',
    'product.hoodie1.name': 'Sweat Pêche',
    'product.hoodie1.desc': 'Pull chaud et confortable avec capuche',
    'product.set1.name': 'Ensemble Été',
    'product.set1.desc': 'Ensemble t-shirt et short',

    // Marketplaces
    'marketplaces.title': 'Marchés',
    'marketplaces.subtitle': 'Trouvez nos produits sur les plateformes suivantes',
    'marketplaces.instagram': 'Boutique Instagram',
    'marketplaces.instagram.desc': 'Nouvelles collections et offres spéciales',
    'marketplaces.telegram': 'Canal Telegram',
    'marketplaces.telegram.desc': 'Actualités rapides et commandes',
    'marketplaces.uzum': 'Uzum Market',
    'marketplaces.uzum.desc': 'La plus grande boutique en ligne d\'Ouzbékistan',
    'marketplaces.open': 'Voir',

    // About
    'about.title': 'À Propos',
    'about.story.title': 'Notre Histoire',
    'about.story.p1': 'SOF KARAKUL est une marque de vêtements quotidiens pour enfants. Nous mettons le confort et la sécurité de chaque enfant en premier.',
    'about.story.p2': 'Chaque produit est fabriqué à partir de coton naturel et de matériaux de qualité soigneusement sélectionnés. Nous utilisons les matériaux les plus sûrs pour la peau des enfants.',
    'about.story.p3': 'Notre objectif est de fournir à chaque enfant des vêtements confortables, beaux et abordables.',
    'about.why.title': 'Pourquoi SOF KARAKUL?',
    'about.why.item1': 'Matériaux 100% coton naturel',
    'about.why.item2': 'Équipe d\'artisans professionnels',
    'about.why.item3': 'Design moderne et confortable',
    'about.why.item4': 'Livraison dans tout l\'Ouzbékistan',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Des questions? Contactez-nous!',
    'contact.phone': 'Téléphone',
    'contact.telegram': 'Telegram',
    'contact.instagram': 'Instagram',
    'contact.address': 'Adresse',
    'contact.address.value': 'Tachkent, Ouzbékistan',
    'contact.form.name': 'Votre Nom',
    'contact.form.phone': 'Votre Téléphone',
    'contact.form.message': 'Votre Message',
    'contact.form.submit': 'Envoyer',
    'contact.form.success': 'Message envoyé avec succès!',

    // Footer
    'footer.rights': 'Tous droits réservés',
    'footer.tagline': 'Vêtements confortables et modernes pour enfants',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uz');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
