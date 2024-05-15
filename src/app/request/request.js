"use client";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
// require("dotenv").config();

const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export async function getArticles() {
  try {
    const response = await fetch(
      "https://strapi-production-9d37.up.railway.app/api/articles/?populate=image",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching articles:", error.message);
    return null;
  }
}

//   const data = await response.json();
//   console.log(data.data[1].attributes);

// getArticles();

export async function getArticleById(id) {
  try {
    const response = await fetch(
      `https://strapi-production-9d37.up.railway.app/api/articles/${id}?populate=image`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching articles:", error.message);
    return null;
  }
}

// getArticleById();
