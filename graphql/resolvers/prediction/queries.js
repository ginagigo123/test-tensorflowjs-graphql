const predictionQueries = {
  sentence: async (_, args, { dataSources }) => {
    return await dataSources.weatherAPI.getPrediction({ sentence: args.sentence })
  }
}

export default predictionQueries
