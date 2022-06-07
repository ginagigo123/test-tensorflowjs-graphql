import { versionQueries } from './version'
import { weatherQueries } from './weather'
import { friendsQueries } from './friends'
import { helloQueries } from './hello'
import { predictionQueries } from './prediction'

const resolvers = {
  Query: {
    ...versionQueries,
    ...weatherQueries,
    ...friendsQueries,
    ...helloQueries,
    ...predictionQueries
  }
}

export default resolvers
