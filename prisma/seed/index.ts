import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

async function seed() {
  console.log('🌱 Seeding...')

  console.time(`🧹 Clean database`)
  await db.event.deleteMany({ where: {} })
  console.timeEnd(`🧹 Clean database`)

  console.time(`🌱 Database has been seeded`)
  await Promise.all(
    Array.from({ length: 20 }, async () => {
      await db.event.create({
        data: {
          name: 'My test event',
        },
      })
    }),
  )
  console.timeEnd(`🌱 Database has been seeded`)
}

seed()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
