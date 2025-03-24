# Admin Dashboard

Admin Dashboard - bu **React + TypeScript** yordamida yaratilgan **administrator paneli** bo‘lib, **Ant Design** va **Tailwind CSS** orqali UI interfeys ishlab chiqilgan.

## 📌 Texnologiyalar

Loyiha quyidagi texnologiyalar asosida qurilgan:
- **React (TypeScript)** – UI yaratish uchun
- **React Router Dom** – Sahifalar orasida navigatsiya qilish
- **Ant Design** – UI komponentlar
- **Tailwind CSS** – UI dizayn
- **React Query** – Ma'lumotlarni fetch qilish
- **Axios** – API uchun

## 🚀 O‘rnatish

Loyihani ishga tushirish uchun quyidagi amallarni bajaring:

```sh
# Repositoryni klonlash
git clone https://github.com/softex-task/admin-dashboard.git

# Loyihaga o‘tish
cd admin-dashboard

# Paketlarni o‘rnatish
npm install   # yoki yarn install

# Lokal serverni ishga tushirish
npm run dev   # yoki yarn dev
```

## 📂 Loyihaning Strukturasi

```
admin-dashboard/
│-- src/
│   │-- assets/          # Rasmlar va statik fayllar
│   │-- components/      # UI komponentlari
│   │-- hooks/          # Custom hooklar (usePagination, useDebounce, useFetch)
│   │-- layouts/        # Layoutlar (Sidebar, Header, Content)
│   │-- pages/         # Dashboard sahifalari
│   │-- routes/        # Routing konfiguratsiya
│   │-- services/      # API chaqiriqlar
│   │-- utils/         # Yordamchi funksiyalar
│   │-- App.tsx        # Asosiy App componenti
│   │-- main.tsx       # React ilovasini render qilish
│-- public/            # Static fayllar
│-- package.json       # NPM paketlar
│-- README.md          # Loyihaning hujjatlari
```

## 🌐 API Endpointlar

| Endpoint | Tavsif |
|----------|--------|
| `/api/users` | Foydalanuvchilar ro'yxati |
| `/api/orders` | Buyurtmalar ma'lumotlari |
| `/api/statistics` | Umumiy statistik ma'lumotlar |

## 🎨 UI Ko‘rinishlari

**1️⃣ Login Page**
- Ant Design `Form`, `Input.Password`
- Axios orqali autentifikatsiya

**2️⃣ Dashboard**
- Statistik ma’lumotlar grafiklar bilan
- API orqali dinamik ma’lumotlarni olish

**3️⃣ Sidebar va Navigatsiya**
- **Ant Design `Menu`** orqali sidebar
- **Active state** bilan menyu tanlash

## 📜 Lisensiya

Bu loyiha **MIT** lisensiyasi asosida taqdim etilgan.

---

📧 **Aloqa**: Agar savollaringiz bo‘lsa, GitHub Issues yoki email orqali bog‘lanishingiz mumkin.

🚀 **Admin Dashboard** loyihangizga omad! 🎯

