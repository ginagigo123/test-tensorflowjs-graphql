import WeathermapAPI from '../models/weathermapDataSource'

describe('[WeathermapDataSource]', () => {
  const schema = {
    message: expect.any(String),
    cod: expect.any(String),
    count: expect.any(Number),
    list: expect.any(Array)
  }

  const _country = 'London'
  const _weathermapAPI = new WeathermapAPI()
  test('Current Weather Data Model', async () => {
    const data = await _weathermapAPI.getWeather({ country: _country })

    // Check Type
    expect(data).toMatchObject(schema)
  })

  // TODO: Graphal test
})
