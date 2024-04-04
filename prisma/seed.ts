import { faker } from "@faker-js/faker"
import { Prisma } from "@prisma/client"

import { prisma } from "../src/lib/prisma"

async function main() {
  const eventId = "41c71d1e-cd4d-47f9-8391-bc9d5e5141b1"

  await prisma.checkIn.deleteMany()
  await prisma.attendee.deleteMany()
  await prisma.event.deleteMany()

  await prisma.event.create({
    data: {
      id: eventId,
      title: "Unite Summit",
      slug: "unite-summit",
      details: "Um evento para devs apaixonados(as) por código!",
      maximumAttendees: 120,
    },
  })

  const attendeesToInsert: Prisma.AttendeeUncheckedCreateInput[] = []

  for (let index = 0; index < 5; index++) {
    await prisma.attendee.create({
      data: {
        id: 1000 * index,
        name: faker.person.fullName(),
        email: faker.internet.email().toLocaleLowerCase(),
        eventId,
        createdAt: faker.date.recent({ days: 5 }),
        checkIn: faker.helpers.arrayElement<
          Prisma.CheckInUncheckedCreateNestedOneWithoutAttendeeInput | undefined
        >([
          undefined,
          {
            create: {
              createdAt: faker.date.recent({ days: 3 }),
            },
          },
        ]),
      },
    })
  }
}

main().then(() => {
  console.log("Database seeded!")
  prisma.$disconnect()
})
