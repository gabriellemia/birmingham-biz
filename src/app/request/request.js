"use client";
require("dotenv").config();

const TOKEN = process.env.API_TOKEN;

async function getArticles() {
  const response = await fetch("https://strapi-production-9d37.up.railway.app/api/articles", {
    headers: {
      authorization: `Bearer ${TOKEN}`,
    },
  });
  const data = await response.json();
  console.log(data.data[0].attributes);
}

getArticles();

export default getArticles;
