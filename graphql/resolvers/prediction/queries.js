const predictionQueries = {
  predictions: async (_, args, { dataSources }) => {
    return await dataSources.weatherAPI.getPredition({ sentence: args.sentence })
  }
}

export default predictionQueries
