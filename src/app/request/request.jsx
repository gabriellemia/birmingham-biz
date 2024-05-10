"use client";
const TOKEN = process.env.API_TOKEN;
// import React, { useState, useEffect } from "react";

async function getArticles() {
	const response = await fetch(
		"https://strapi-production-9d37.up.railway.app/api/articles",
		{
			headers: {
				authorization: `Bearer ${TOKEN}`,
			},
		}
	);
	const data = await response.json();
	console.log(data);
}

// getArticles();
console.log(`${process.env.EVIRO_VARIABLE}`);
