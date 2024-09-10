import Fastify from 'fastify'

const fastify = Fastify({
  logger: true,
})

fastify.get('/', async () => {
  return { hello: 'world' }
})

export const platformBackend = fastify
