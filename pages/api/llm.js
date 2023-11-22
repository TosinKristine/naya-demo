const API_KEY = "";
import OpenAI from "openai";
export default async function handler(req, res) {
  let body = JSON.parse(JSON.stringify(req.body));
  if (req.method == "POST") {
    
    const openai = new OpenAI({
      apiKey:API_KEY,
    });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: body.query }],
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 1,
    });
    res.status(200).json(response);
  } else {
    res.status(200).json({});
  }
}