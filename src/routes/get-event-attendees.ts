import { FastifyInstance } from "fastify"
import { ZodTypeProvider } from "fastify-type-provider-zod"
import z from "zod"

import { prisma } from "../lib/prisma"

export async function getEventAttendees(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/events/:eventId/attendees",
    {
      schema: {
        summary: "Get event attendees",
        tags: ["Events"],
        params: z.object({
          eventId: z.string().uuid(),
        }),
        querystring: z.object({
          pageIndex: z.string().nullish().default("0").transform(Number),
          query: z.string().nullish(),
        }),
        response: {
          200: z.object({
            attendees: z.array(
              z.object({
                id: z.number().int(),
                name: z.string(),
                email: z.string().email(),
                createdAt: z.date(),
                checkedInAt: z.date().nullable(),
              }),
            ),
            total: z.number(),
          }),
        },
      },
    },
    async request => {
      const { eventId } = request.params
      const { pageIndex, query } = request.query

      const where = {
        eventId,
        ...(query && { name: { contains: query } }),
      }

      const [attendees, total] = await Promise.all([
        prisma.attendee.findMany({
          where,
          orderBy: {
            createdAt: "desc",
          },
          take: 10,
          skip: pageIndex * 10,
          select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
            checkIn: {
              select: {
                createdAt: true,
              },
            },
          },
        }),
        prisma.attendee.count({
          where,
        }),
      ])

      return {
        attendees: attendees.map(attendee => ({
          id: attendee.id,
          name: attendee.name,
          email: attendee.email,
          createdAt: attendee.createdAt,
          checkedInAt: attendee.checkIn?.createdAt ?? null,
        })),
        total,
      }
    },
  )
}
