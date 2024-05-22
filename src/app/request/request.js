"use client";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
// require("dotenv").config();

const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export async function getNewsArticles() {
  try {
    const response = await fetch(
      "https://strapi-production-9d37.up.railway.app/api/news/?populate[0]=image&populate[1]=ad1&populate[2]=ad2&populate[3]=ad3&populate[4]=ad4&populate[5]=ad5",
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

export async function getFeaturesArticles() {
  try {
    const response = await fetch(
      "https://strapi-production-9d37.up.railway.app/api/features/?populate[0]=image&populate[1]=ad1&populate[2]=ad2&populate[3]=ad3&populate[4]=ad4&populate[5]=ad5",
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

export async function getFiveArticles() {
  try {
    const response = await fetch(
      "https://strapi-production-9d37.up.railway.app/api/five-minutes-withs/?populate[0]=image&populate[1]=ad1&populate[2]=ad2&populate[3]=ad3&populate[4]=ad4&populate[5]=ad5",
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

export async function getInsightsArticles() {
  try {
    const response = await fetch(
      "https://strapi-production-9d37.up.railway.app/api/insights/?populate[0]=image&populate[1]=ad1&populate[2]=ad2&populate[3]=ad3&populate[4]=ad4&populate[5]=ad5",
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

export async function getNewsArticleById(id) {
  try {
    const response = await fetch(
      `https://strapi-production-9d37.up.railway.app/api/news/${id}?populate[0]=image&populate[1]=ad1&populate[2]=ad2&populate[3]=ad3&populate[4]=ad4&populate[5]=ad5`,
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

export async function getFeaturesArticleById(id) {
  try {
    const response = await fetch(
      `https://strapi-production-9d37.up.railway.app/api/features/${id}?populate[0]=image&populate[1]=ad1&populate[2]=ad2&populate[3]=ad3&populate[4]=ad4&populate[5]=ad5`,
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

export async function getFiveArticleById(id) {
  try {
    const response = await fetch(
      `https://strapi-production-9d37.up.railway.app/api/five-minutes-withs/${id}?populate[0]=image&populate[1]=ad1&populate[2]=ad2&populate[3]=ad3&populate[4]=ad4&populate[5]=ad5`,
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

export async function getInsightsArticleById(id) {
  try {
    const response = await fetch(
      `https://strapi-production-9d37.up.railway.app/api/insights/${id}?populate[0]=image&populate[1]=ad1&populate[2]=ad2&populate[3]=ad3&populate[4]=ad4&populate[5]=ad5`,
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

//BBTV episode request
export async function getBbtvEpisodes() {
  try {
    const response = await fetch(
      "https://strapi-production-9d37.up.railway.app/api/bbtvs/",
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
    console.error("Error fetching BBTV Episodes :", error.message);
    return null;
  }
}

// Magazine Archive Request
export async function getArchive() {
  try {
    const response = await fetch(
      `https://strapi-production-9d37.up.railway.app/api/archives?populate=*`,
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
