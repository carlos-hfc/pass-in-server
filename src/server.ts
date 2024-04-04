import fastifySwagger from "@fastify/swagger"
import fastifySwaggerUi from "@fastify/swagger-ui"
import fastify from "fastify"
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod"

import { errorHandler } from "./error-handler"
import { checkIn } from "./routes/check-in"
import { createEvent } from "./routes/create-event"
import { getAttendeeBadge } from "./routes/get-attendee-badge"
import { getEvent } from "./routes/get-event"
import { getEventAttendees } from "./routes/get-event-attendees"
import { registerForEvent } from "./routes/register-for-event"

const app = fastify()

app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description:
        "Especificações da API para o back-end da aplicação pass.in contruída durante o NLW Unite da Rocketseat.",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
})
app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.setErrorHandler(errorHandler)

app.register(createEvent)
app.register(registerForEvent)
app.register(getEvent)
app.register(getAttendeeBadge)
app.register(checkIn)
app.register(getEventAttendees)

app
  .listen({ port: 3333 })
  .then(server => console.log(`Server running in ${server}`))
