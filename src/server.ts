import fastify from "fastify"
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod"

import { checkIn } from "./routes/check-in"
import { createEvent } from "./routes/create-event"
import { getAttendeeBadge } from "./routes/get-attendee-badge"
import { getEvent } from "./routes/get-event"
import { registerForEvent } from "./routes/register-for-event"

const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createEvent)
app.register(registerForEvent)
app.register(getEvent)
app.register(getAttendeeBadge)
app.register(checkIn)

app
  .listen({ port: 3333 })
  .then(server => console.log(`Server running in ${server}`))
