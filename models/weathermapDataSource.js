import { HTTPCache, RESTDataSource } from 'apollo-datasource-rest'
import { api } from '../config/environment'
import '@tensorflow/tfjs'
import * as toxicity from '@tensorflow-models/toxicity'

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
    // test
    const threshold = 0.9;
    response = toxicity.load(threshold).then(model => {
      const sentences = [sentence];
    
      return model.classify(sentences).then(predictions => {
        console.log(predictions);
        return predictions
      })
    })
    return response
  }
}

export default WeathermapAPI
