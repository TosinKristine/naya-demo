const API_KEY = "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";
import OpenAI from "openai";
export default async function handler(req, res) {
  let body = JSON.parse(JSON.stringify(req.body));
  if (req.method == "POST") {
    
    const openai = new OpenAI({
      apiKey:API_KEY,
    });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: body.data }],
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
