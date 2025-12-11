# Meteoric Shop — Local Setup (Developer)

Requirements:
- Node 18+
- Docker & docker-compose
- (Optional) MinIO or AWS S3 credentials

Steps:

1. Clone repo
2. Copy .env.example to .env and fill values:
   - DATABASE_URL=postgresql://postgres:postgres@localhost:5432/meteoric
   - NEXT_PUBLIC_BASE_URL=http://localhost:3000
   - MINIO config if used
3. Start DB + MinIO:
   docker-compose up -d
4. Install deps:
   npm install
5. Generate Prisma client and migrate:
   npx prisma generate
   npx prisma migrate dev --name init
6. Create uploads folder:
   mkdir -p public/uploads
7. Run dev:
   npm run dev
8. Open http://localhost:3000
