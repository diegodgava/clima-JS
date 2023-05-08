/* import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
    const {weatherData} = await request.json()
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        temperature: 0.8,
        n:1,
        stream: false,
        messages: [
            {
                role: 'system',
                content: `Finja que é um repóter de notícias sobre o clima, apresentando ao vivo na TV. Se apresente como Diego, e que está ao vivo do GAVA notícias. Diga a cidade do qual está provendo as informações, e então faça um sumário com as informações do clima do dia de forma bem humorada e energética. Haja como se as informações tivessem vindo do estúdio, não do user.`
            }, 
            {
                role: 'user',
                content: `Olá Diego, poderia me dar um sumário do clima de hoje, usando as informações do clima dos seguintes daddos: ${JSON.stringify(weatherData)}`
            },
        ],
    })

    const {data} = response

    return NextResponse.json(data.choices[0].message)
} */