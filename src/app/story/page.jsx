"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

require("dotenv").config();

const TOKEN = process.env.API_TOKEN;

export default function Story() {


    useEffect(() => {
    fetch("https://strapi-production-9d37.up.railway.app/api/articles", {
      headers: {
        authorization: `Bearer ${TOKEN}`,
      },
    });
    const data = await response.json();
    console.log(data.data[2].attributes);
  }

  return <h1>Story</h1>;
}
