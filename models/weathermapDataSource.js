import { HTTPCache, RESTDataSource } from 'apollo-datasource-rest'
import { api } from '../config/environment'
import '@tensorflow/tfjs'
import * as toxicity from '@tensorflow-models/toxicity'

const threshold = 0.9;

class WeathermapAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = `https://${api.host}`
    this.httpCache = new HTTPCache()
  }

  async getWeather ({ country }) {
    const response = await this.get('find', { q: country, appid: api.key })
    return response
  }

  async getPredition ({ sentence }) {
    const sentences = [sentence];
    const model = await toxicity.load(threshold)
    const response = await model.classify(sentences).then(predictions => {
        console.log(predictions);
        return predictions
    })
    return response
  }
}

export default WeathermapAPI
