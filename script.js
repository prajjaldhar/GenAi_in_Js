import { GoogleGenerativeAI } from "@google/generative-ai";
const genai = new GoogleGenerativeAI("");
async function generateText(prompt) {
  const model = genai.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}
generateText("what is reactjs");
