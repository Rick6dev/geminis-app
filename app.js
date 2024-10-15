const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI("AIzaSyAw-t-e0_9Psd6z4z24G5cnBE2eFW1svR4");

// // ...

// // The Gemini 1.5 models are versatile and work with most use cases
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// // ...
// console.log('model',model)


// const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const genAI = new GoogleGenerativeAI("AIzaSyDsc4i-aItHWetjDH4UXfDvpgUCHHEKDXk");

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  console.log(model);

  const prompt = "Eres un  auditor  dime los oprincipales riesgos en credicard";
  const imagePath = './img/imagen.jpg';

  const result = await model.generateContent([
    prompt
  ]);

  console.log(result.response);
  console.log(result.response.text());
}

run();