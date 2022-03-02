import { versionQueries } from './version'
import { weatherQueries } from './weather'

const resolvers = {
  Query: {
    ...versionQueries,
    ...weatherQueries
  }
}

export default resolvers
