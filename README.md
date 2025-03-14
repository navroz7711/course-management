<<<<<<< HEAD
# course-management
=======
📚 Kurs Boshqaruv Tizimi (Node.js + PostgreSQL)

Bu loyiha Node.js, Express.js, PostgreSQL va Swagger asosida yaratilgan kurs boshqaruv tizimi bo‘lib, quyidagi imkoniyatlarni taqdim etadi:

✅ Kurslarni boshqarish (CRUD)✅ Talabalarni kurslarga yozish✅ Kurslarni tugatish foizini hisoblash✅ Eng ommabop kurslarni aniqlash✅ RESTful API va Swagger hujjatlari

🛠 O‘rnatish va Ishga Tushirish

1️⃣ Loyihani klonlash

# GitHub-dan loyihani yuklab olish
git clone https://github.com/navroz7711/course-management.git
cd course-management

2️⃣ Muhit sozlash

Loyihada .env faylini yaratib, quyidagi ma’lumotlarni to‘ldiring:

PORT=3001
DATABASE_URL=postgres://user:password@localhost:5432/course_db

Muhim! DATABASE_URL ni o‘zingizning PostgreSQL ma’lumotlar bazasi bilan moslang.

3️⃣ Paketlarni o‘rnatish

npm install

4️⃣ Ma’lumotlar bazasini yaratish

PostgreSQL-da course_db nomli bazani yarating va quyidagi SQL so‘rovlarini ishga tushiring:

CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE enrollments (
    id SERIAL PRIMARY KEY,
    studentId INT NOT NULL,
    courseId INT NOT NULL,
    completed BOOLEAN DEFAULT false,
    FOREIGN KEY (courseId) REFERENCES courses(id)
);

🔥 API Yo‘nalishlari

Yo‘nalish

Usul

Tavsif

/courses

GET

Barcha kurslarni olish

/courses

POST

Yangi kurs yaratish

/enrollments

POST

Talabani kursga yozish

/analytics/completion-rates

GET

Kurs o‘zlashtirish foizini olish

/analytics/popular-courses

GET

Eng ommabop kurslarni olish

Swagger dokumentatsiyasini ochish:👉 http://localhost:3000/api-docs
>>>>>>> Birinchi commit
