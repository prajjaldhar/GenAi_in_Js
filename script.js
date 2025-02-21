import { GoogleGenerativeAI } from "@google/generative-ai";
const genai = new GoogleGenerativeAI("AIzaSyBsLhqJuPlLWsJUKWxYu6k1S1KNhdm7Kl0");
async function generateText(prompt) {
  const model = genai.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}
generateText("what is reactjs");