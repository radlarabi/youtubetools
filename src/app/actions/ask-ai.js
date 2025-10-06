
export async function askAi(FormData) {
  const input = FormData.get('question')
    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_QUEN_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "qwen/qwen3-235b-a22b:free",
          messages: [
            {
              role: "user",
              content: input
            }
          ],
          // stream: true
        })
      });
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("AI error:", error);
      return { error: "Something went wrong." };
    }
  }
  