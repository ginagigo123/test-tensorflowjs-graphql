import { ApolloServer } from 'apollo-server-express'
import { env, secret } from '../config/environment'
import schema from './utils/schema'
import WeathermapAPI from '../data/weathermap_data_source'

const apolloServer = new ApolloServer({
  schema,
  secret: secret,
  playground: env.development,
  dataSources: () => ({
    weatherAPI: new WeathermapAPI(),
  })
})

export default apolloServer
