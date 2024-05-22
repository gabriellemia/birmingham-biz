<a name="readme-top"></a>

<div align="center">
  
<img width="132" alt="Screenshot 2024-05-19 at 17 59 31" src="https://github.com/gabriellemia/birmingham-biz/assets/78322726/674ec3d1-d19c-494c-9dee-65c95e42be67">

# Birmingham Business Magazine


</div>

### **Team Codey McCodeface:** 

Chari Cruz, Erin Smith, Gaby Mia, Josh Foston, Pete Faretra, Ravi Kataria

As part of our final project at School of Code, Codey McCodeface have been partnered with Birmingham Business Magazine to help them find a solution to optimising their online presence.

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#initial-brief">Initial Brief</a></li>
        <li><a href="#the-problem">The Problem</a></li>
          <ul>
            <li><a href="#refined-problem-statement">Refined Problem Statement</a></li>
            <li><a href="#the-solution">The Solution</a></li>
          </ul>
        <li><a href="#mvp-1">MVP 1</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#the-plan">The Plan</a>
      <ul>
        <li><a href="#user-flow">User Flow</a></li>
        <li><a href="#wireframing">Wireframing</a></li>
        <li><a href="#component-tree">Component Tree</a></li>
      </ul>
    </li>
    <li>
      <a href="#the-plan">The Build</a>
      <ul>
        <li><a href="#how-we-worked">How We Worked</a></li>
        <li><a href="#api">API</a></li>
          <ul>
            <li><a href="#requirements-table">Requirements Table</a></li>
          </ul>
      </ul>
    </li>
  </ol>
</details>

# About The Project

## Initial Brief
<img width="587" alt="Screenshot 2024-05-19 at 12 50 55" src="https://github.com/gabriellemia/birmingham-biz/assets/78322726/dda71ffb-da65-4d43-870f-634fa10f0284">

## The Problem
<img width="1200" alt="Screenshot 2024-05-19 at 12 51 35" src="https://github.com/gabriellemia/birmingham-biz/assets/78322726/6e730310-cb98-4f80-83b5-96075f35a87d">

### Refined Problem Statement
Birmingham Business magazine’s website is outdated and not engaging, which means they are not maximising traffic to their site and stories. It is also difficult to manage from the editors’ side.

### The Solution
A revamped platform that prioritises user engagement,  accessibility, and content management efficiency while also optimising SEO to drive more traffic, transforming the digital experience.

## MVP 1
<img width="428" alt="Screenshot 2024-05-19 at 13 59 25" src="https://github.com/gabriellemia/birmingham-biz/assets/78322726/1a9a9652-99ae-4035-b7f3-50af183d6703">

## Tech Stack

| Front End  |
|:---|
|![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)|
| **Back End** |
|![Strapi](https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white) ![Railway](https://img.shields.io/badge/Railway-131415?style=for-the-badge&logo=railway&logoColor=white) ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white)|
| **Deployment**  |
|![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)|

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# The Plan

## User Flow 

We created a user flow diagram to help visualise how a user would navigate the different sections of the website and actions they are able to take on each page, ensuring seemless flow throughout our MVP.  This would help us with the bulid stages later on.

<img width="618" alt="Screenshot 2024-05-19 at 14 26 17" src="https://github.com/gabriellemia/birmingham-biz/assets/78322726/e0571e87-108c-48b9-9ff6-9d4d319da803">

## Wireframing

After initial ideation and user research stages we began work on the design of the website using the research we had gathered.  We created wireframes in Figma for the three pages of our first MVP.

<img width="673" alt="Screenshot 2024-05-19 at 15 20 10" src="https://github.com/gabriellemia/birmingham-biz/assets/78322726/d941240a-b5d8-4e32-bfa5-fbf607e821b7">

## Component Tree

We created a component tree of all of the pages within our file structure and their components. Please note this has been split into two diagrams to fit on the page.

![ComponentTree1](https://github.com/gabriellemia/birmingham-biz/assets/148550963/93930cce-f19f-4bf9-b6d5-2a59b91df326)

![ComponentTree2](https://github.com/gabriellemia/birmingham-biz/assets/148550963/6a59c4be-e4e9-4c57-986b-c74e3523d1df)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

# The Build

## How We Worked

We created a ticketing system in GitHub projects to assign jobs to team members.  We also split off into smaller groups of either 2 or 3 in order to cover more ground.  We rotated our pairs regularly so that each of us was able to work with every other member and also to get a holistic understanding of the project and broaden our skillset in all areas of the software development process.

![Screenshot 2024-05-16 at 13 23 29](https://github.com/gabriellemia/birmingham-biz/assets/78322726/52010aca-86e7-4fe8-9d83-0a62411b5be1)

<img width="1154" alt="Screenshot 2024-05-19 at 15 36 02" src="https://github.com/gabriellemia/birmingham-biz/assets/78322726/82fd4b46-7e25-40ec-9b6b-2a38aa38d3d2">

## API

### Requirements Table

| HTTP Method | Path            | Request Body (JSON) | Response Body (JSON)    | Status Code | Description                               |
| ----------- | --------------- | ------------------- | ----------------------- | ----------- | ----------------------------------------- |
| GET         | /news           | N/A                 | List of articles      | 200         | Retrieve all News articles                   |
| GET         | /features | N/A                 | List of articles    | 200         | Retrieve all Features and Analysis articles
| GET        | //five-minutes-withs     | N/A                 | List of articles | 200         | Retrieve all Five Minutes With articles           |
| GET       | /insights | N/A                 | List of articles       | 200         | Retrieve all Insights articles    |
| GET      | /news/:id | N/A                 | A specific article       | 200         | Retrieve a specific News article          |
| GET      | /features/:id | N/A                 | A specific article       | 200         | Retrieve a specific Features and Analysis article         |
| GET      | /five-minutes-withs/:id | N/A                 | A specific article       | 200         | Retrieve a specific Five Minutes With article            |
| GET      | /insights/:id | N/A                 | A specific article       | 200         | Retrieve a specific Insights article         |
| GET      | /bbtvs | N/A                 | List of BBTV episodes       | 200         | Retrieve all BBTV episodes            |
| GET      | /archives | N/A                 | List of magazines      | 200         | Retrieve all Birmingham Business magazines            |

**Additional Queries**

<p>Retrieve articles with image files and ad images:</p>
<p>?populate[0]=image&populate[1]=ad1&populate[2]=ad2&populate[3]=ad3&populate[4]=ad4&populate[5]=ad5</p>
<p>Retrieve magazines with images:</p>
<p>?populate=*</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

