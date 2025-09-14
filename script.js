// Import the Google Generative AI library from the package
// This library provides access to Google's Gemini models
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the client with your Gemini API key
// Replace the empty string ("") with your actual API key
const genai = new GoogleGenerativeAI("YOUR_GEMINI_API_KEY");

// Define an asynchronous function to generate text from Gemini
async function generateText(prompt) {
  // Create an instance of the Gemini model
  // "gemini-pro" is a versatile text-based model for reasoning, answering, and explaining
  const model = genai.getGenerativeModel({ model: "gemini-pro" });

  // Send the prompt to the model and wait for the generated response
  const result = await model.generateContent(prompt);

  // Extract and print the response text to the console
  console.log(result.response.text());
}

// Call the function with a sample prompt
// Here, we are asking Gemini: "What is ReactJS?"
generateText("what is reactjs");
