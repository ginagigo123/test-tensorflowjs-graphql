import { createTestClient } from 'apollo-server-testing'
import { gql } from 'apollo-server'
import graphqlServer from '../graphql'

const GET_COUNTRY_WEATHER = gql`
query Weather($country: String!) {
  weather(country: $country) {
    message
    cod
    count
    list {
      id
      name
      dt
      rain
      snow
      weather {
        id
        main
        description
        icon
      }
      clouds {
        all
      }
      sys {
        country
      }
      wind {
        speed
        deg
      }
      main {
        temp
        feels_like
        temp_min
        temp_max
        pressure
        humidity
      }
      coord {
        lat
        lon
      }
    }
  }
}
`
const schema = {
  message: expect.any(String),
  cod: expect.any(String),
  count: expect.any(Number),
  list: expect.any(Array)
}
const _country = 'London'

describe('[Queries.WeatherMapAPI]', () => {
  it('Access current weather data for any location', async () => {
    const { query } = createTestClient(graphqlServer)

    const res = await query({
      query: GET_COUNTRY_WEATHER,
      variables: { country: _country }
    })
    // Check Type
    expect(res.data.weather).toMatchObject(schema)
    expect(res.data.weather.cod).toBe('200')

    expect(res.data.weather.count).not.toBe(0)
  })
})
