# Google Generative AI Text Generator

This project uses Google's Generative AI API (`gemini-pro`) to generate text-based responses based on user prompts.

## Features
- Integrates with Google Generative AI (`@google/generative-ai`)
- Takes a user prompt and returns a generated response
- Simple and lightweight implementation

## Prerequisites
Before running this project, ensure you have:
- Node.js installed
- An API key for Google Generative AI

## Installation

1. Clone the repository:
   
   git clone https://github.com/your-username/google-genai-text-generator.git
   cd google-genai-text-generator
  

2. Install dependencies:
   
   npm install @google/generative-ai
  

3. Replace the API key in `index.js`:
   
   const genai = new GoogleGenerativeAI("YOUR_GOOGLE_GENAI_API_KEY");
   

## Usage

Run the script with:

node index.js

You can modify the prompt inside `generateText()` to get different responses.

## Example

### Input:

generateText("Enter your prompt here");



## License
This project is licensed under the MIT License.

---

### Notes:
- Avoid exposing your API key in public repositories.
- Ensure you have valid API access from Google.
