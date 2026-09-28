# Mini Project Starter

Starter สำหรับ mini project ด้วย React, TypeScript, Tailwind CSS, Express, Prisma และ PostgreSQL

## ต้องมี

- Node.js 20.19+ (แนะนำรุ่น LTS)
- Docker Desktop พร้อม Docker Compose

## เริ่มใช้งาน

1. ติดตั้งแพ็กเกจ: `npm install`
2. สร้างไฟล์ environment: คัดลอก `.env.example` เป็น `.env`
3. เปิด PostgreSQL: `npm run db:up`
4. สร้างตารางจาก Prisma schema: `npm run db:push`
5. เปิดเว็บและ API: `npm run dev`

เว็บอยู่ที่ `http://localhost:5173` และ API อยู่ที่ `http://localhost:3001` โดยหน้าเว็บใช้ `/api` proxy ไปยัง API

## คำสั่งที่ใช้บ่อย

- `npm run build` สร้าง production build ของเว็บ
- `npm run build:api` ตรวจและ build API
- `npm run db:studio` เปิด Prisma Studio
- `npm run db:down` หยุด PostgreSQL

แก้ model ใน `prisma/schema.prisma` แล้วรัน `npm run db:push` เพื่ออัปเดตฐานข้อมูลระหว่างพัฒนา