import { getClient } from "@/apollo-client"
import CalloutCard from "@/components/CalloutCard"
import HumidityChart from "@/components/HumidityChart"
import InformationPanel from "@/components/InformationPanel"
import RainChart from "@/components/RainChart"
import StatCard from "@/components/StatCard"
import TempChart from "@/components/TempChart"
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries"


export const revalidate = 60

type Props = {
    params: {
        city: string
        lat: string
        long: string
    }
}



async function WeatherPage({params: {city, lat, long}}: Props) {
  const client = getClient()

  const {data} = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: 'GMT'
    }
  })

  const results: Root = data.myQuery;

  return (
    <div className="flex flex-col min-h-screen md:flex-row">

      <InformationPanel 
      city={city}
      long={long}
      lat={lat}
      results={results}
      
      
      />
      <div className="flex-1 p-5 lg:p-10">
        <div className="p-5">
            <div className="pb-5">
              <h2 className="text-xl font-bold">Visão geral do dia</h2>
              <p className="text-sm text-gray-400">
                Última atualização: {""}
                {new Date(results.current_weather.time).toLocaleString()} (
                  {results.timezone})
              </p>
              </div>

              {/*  <div className="m-2 mb-10">
                  <CalloutCard message="GPT-4 sumario"/>
              </div>   */}   

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
                <StatCard 
                  title="Temperatura Máxima"
                  metric= {`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
                  color="yellow"
                />  
                 <StatCard 
                  title="Temperatura Mínima"
                  metric= {`${results.daily.temperature_2m_min[0].toFixed(1)}°`}
                  color="green"
                />
              

              <div>
                <StatCard
                  title="Índice de raios UV"
                  metric= {`${results.daily.uv_index_max[0].toFixed(1)}`}
                  color="rose"
                />{Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
                  <CalloutCard
                    message={"Índice UV está alto, busque o uso de proteção!"}
                    warning
                  />
                )}
              </div>

              <div className="flex space-x-3">
              <StatCard
                  title="Velocidade do vento"
                  metric= {`${results.current_weather.windspeed.toFixed(1)}m/s`}
                  color="cyan"
                />
                 <StatCard
                  title="Direção do vento"
                  metric= {`${results.current_weather.winddirection.toFixed(1)}°`}
                  color="violet"
                />
                </div>
              </div>
            </div>
                  <hr className="mb-5"/>

                  <div className="space-y-3">
                    <RainChart results={results}/>
                    <TempChart results={results}/>
                    <HumidityChart results={results}/>

                  </div>

        </div>
    </div>
  )
}

export default WeatherPage