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

describe('[Queries.WeatherMapAPI]', () => {
  it('Access current weather data for any location', async () => {
    const { query } = createTestClient(graphqlServer)

    const res = await query({
      query: GET_COUNTRY_WEATHER,
      variables: { source: 'London' }
    })

    expect(res).toMatchSnapshot()
  })
})
