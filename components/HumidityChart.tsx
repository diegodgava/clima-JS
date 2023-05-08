'use client'

import { Card, AreaChart, Title } from "@tremor/react"

type Props = {
    results: Root
}

function HumidityChart({results}: Props) {

    const hourly = results?.hourly.time.map(time => new Date(time).toLocaleString("pt-BR", {
        hour: "numeric",
        hour12: false,
    })).slice(0,24)

    const data = hourly.map((hour, i) => ({
        time: Number(hour),
        "Umidade (%)": results.hourly.relativehumidity_2m[i],
    }))

    const dataFormatter = (number: Number) => `${number} %`

  return (
    <Card>
        <Title>Taxa de umidade</Title>
        <AreaChart
            className="mt-6"
            data= {data}
            showLegend
            index= "time"
            categories={["Umidade (%)"]}
            colors={["teal"]}
            minValue={0}
            maxValue={100}
            valueFormatter={dataFormatter}
            yAxisWidth={40}
        />

    </Card>

  )
}

export default HumidityChart