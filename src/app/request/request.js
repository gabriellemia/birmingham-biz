"use client";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
// require("dotenv").config();

const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

async function getArticles() {
  const response = await fetch("https://strapi-production-9d37.up.railway.app/api/articles", {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data.data[1].attributes.copy);
}

getArticles();

export default getArticles;
