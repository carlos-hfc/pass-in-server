import { prisma } from "../src/lib/prisma"

async function main() {
  await prisma.checkIn.deleteMany()
  await prisma.attendee.deleteMany()
  await prisma.event.deleteMany()

  await prisma.event.create({
    data: {
      id: "41c71d1e-cd4d-47f9-8391-bc9d5e5141b1",
      title: "Unite Summit",
      slug: "unite-summit",
      details: "Um evento para devs apaixonados(as) por código!",
      maximumAttendees: 120,
    },
  })
}

main().then(() => {
  console.log("Database seeded!")
  prisma.$disconnect()
})
