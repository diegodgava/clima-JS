'use client'

import { Card, AreaChart, Title } from "@tremor/react"

type Props = {
    results: Root
}

function TempChart({results}: Props) {

    const hourly = results?.hourly.time.map(time => new Date(time).toLocaleString("pt-BR", {
        hour: "numeric",
        hour12: false,
    })).slice(0,24)

    const data = hourly.map((hour, i) => ({
        time: Number(hour),
        "Índice UV": results.hourly.uv_index[i],
        "Temperatura (C)": results.hourly.temperature_2m[i],
    }))

    const dataFormatter = (number: Number) => `${number} °C)`

  return (
    <Card>
        <Title>Temperatura & Índice UV</Title>
        <AreaChart
            className="mt-6"
            data= {data}
            showLegend
            index= "time"
            categories={["Temperatura (C)", "Índice UV"]}
            colors={["yellow", "rose"]}
            minValue={0}
            valueFormatter={dataFormatter}
            yAxisWidth={40}
        />

    </Card>

  )
}

export default TempChart