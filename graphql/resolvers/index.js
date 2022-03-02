import { versionQueries } from './version'
import { weatherQueries } from './weather'
import { authorQueries, authorMutations } from './author'

const resolvers = {
  Query: {
    ...versionQueries,
    ...weatherQueries,
    ...authorQueries
  },
  Mutation: {
    ...authorMutations
  }
}

export default resolvers
