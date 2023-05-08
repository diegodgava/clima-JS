import { gql } from "@apollo/client";

const fetchWeatherQuery = gql`
  query MyQuery(
    $current_weather: String
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    $hourly: String = "temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      longitude: $longitude
      latitude: $latitude
      timezone: $timezone
    ) {
        current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        uv_index_max
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        weathercode
      }
      daily_units {
        temperature_2m_max
        temperature_2m_min
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      hourly {
        precipitation_probability
        rain
        apparent_temperature
        precipitation
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        uv_index
        time
        uv_index_clear_sky
        windgusts_10m
      }
      hourly_units {
        precipitation_probability
        precipitation
        apparent_temperature
        uv_index_clear_sky
        windgusts_10m
        uv_index
        time
        temperature_2m
        snowfall
        snow_depth
        showers
        relativehumidity_2m
        rain
      }
      elevation
      generationtime_ms
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;

export default fetchWeatherQuery;

