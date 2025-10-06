import { NextRequest, NextResponse } from "next/server";

export async function POST(req){
    
    try {
        const {messages, model="meituan/longcat-flash-chat:free"} = await req.json()
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_QUEN_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model,
                messages,
                temperature,
                stream: true
            })
        })
        if (!response.ok){
            const errorText = await response.text()
            return NextResponse.json({error: `Open Route Failed : ${errorText}`}, {status: response.status}) 
        }
        console.log(response.body)
        return new Response(
            response.body, {
                headers: {
                    'Content-Type': 'text/event-stream',
                    'Cache-Control': 'no-cache',
                    'Connection': 'keep-alive',
                    'Transfer-Encoding': 'chunked',
                }
            }
        )
    } catch (error) {
        console.error("Streaming Error :", error);
        
        throw NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}