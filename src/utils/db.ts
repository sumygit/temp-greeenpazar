// import { PrismaClient } from '@/generated/prisma/client'
// import { PrismaPg } from '@prisma/adapter-pg'

// const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })

// const globalForPrisma = global as unknown as { prisma: PrismaClient }

// export const db =
//   globalForPrisma.prisma ||
//   new PrismaClient({ adapter })

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db

import { PrismaClient } from '@/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

// Global obyektni e'lon qilamiz
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined }

// Agar keshda eski ulanish bo'lsa o'shani olamiz, bo'lmasa yangi yaratamiz
export const db = globalForPrisma.prisma || (() => {
  // pg drayveri va adapterni faqat yangi client yaratilayotgandagina ishga tushiramiz
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
  const adapter = new PrismaPg(pool)
  return new PrismaClient({ adapter })
})()

// Lokal muhitda (development) ulanishni global keshga saqlab qo'yamiz
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db