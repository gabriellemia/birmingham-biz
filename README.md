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
        <li><a href="#architecture-diagram">Architecture Diagram</a></li>
      </ul>
    </li>
    <li>
      <a href="#the-plan">The Build</a>
      <ul>
        <li><a href="#how-we-worked">How We Worked</a></li>
        <li><a href="#strapi-content-management-system">Strapi Content Management System</a></li>
        <li><a href="#api">API</a></li>
          <ul>
            <li><a href="#api-url">API URL</a></li>
            <li><a href="#helper-functions">Helper Functions</a></li>
            <li><a href="#requirements-table">Requirements Table</a></li>
          </ul>
        <li><a href="#emailjs">EmailJS</a></li>
        <li><a href="#accessibility">Accessibility</a></li>
        <li><a href="#search-engine-optimisation">Search Engine Optimisation</a></li>
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

A revamped platform that prioritises user engagement, accessibility, and content management efficiency while also optimising SEO to drive more traffic, transforming the digital experience.

## MVP 1

<img width="428" alt="Screenshot 2024-05-19 at 13 59 25" src="https://github.com/gabriellemia/birmingham-biz/assets/78322726/1a9a9652-99ae-4035-b7f3-50af183d6703">

## Tech Stack

| **Design**  |
|:---|
| ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) |
| **Front End**  |
|![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)|
| **Back End** |
|![Strapi](https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white) ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white)|
| **Testing**  |
| ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white) |
| **Deployment**  |
|![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) ![Railway](https://img.shields.io/badge/Railway-131415?style=for-the-badge&logo=railway&logoColor=white)|

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# The Plan

## User Flow

We created a user flow diagram to help visualise how a user would navigate the different sections of the website and actions they are able to take on each page, ensuring seemless flow throughout our MVP. This would help us with the bulid stages later on.

<img width="618" alt="Screenshot 2024-05-19 at 14 26 17" src="https://github.com/gabriellemia/birmingham-biz/assets/78322726/e0571e87-108c-48b9-9ff6-9d4d319da803">

## Wireframing

After initial ideation and user research stages we began work on the design of the website using the research we had gathered. We created wireframes in Figma for the three pages of our first MVP.

<img width="673" alt="Screenshot 2024-05-19 at 15 20 10" src="https://github.com/gabriellemia/birmingham-biz/assets/78322726/d941240a-b5d8-4e32-bfa5-fbf607e821b7">

## Component Tree

We created a component tree of all of the pages within our file structure and their components. Please note this has been split into two diagrams to fit on the page.

![ComponentTree1](https://github.com/gabriellemia/birmingham-biz/assets/148550963/93930cce-f19f-4bf9-b6d5-2a59b91df326)

![ComponentTree2](https://github.com/gabriellemia/birmingham-biz/assets/148550963/6a59c4be-e4e9-4c57-986b-c74e3523d1df)

## Architecture Diagram

We created an application architecture diagram that illustrates how the various aspects of the build connect.

<img width="1790" alt="Screenshot 2024-06-06 at 12 01 11" src="https://github.com/gabriellemia/birmingham-biz/assets/148550963/c8a5bdb8-e820-4372-89e1-91441c14e19d">

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# The Build

## How We Worked

We created a ticketing system in GitHub projects to assign jobs to team members. We also split off into smaller groups of either 2 or 3 in order to cover more ground. We rotated our pairs regularly so that each of us was able to work with every other member and also to get a holistic understanding of the project and broaden our skillset in all areas of the software development process.

![Screenshot 2024-05-16 at 13 23 29](https://github.com/gabriellemia/birmingham-biz/assets/78322726/52010aca-86e7-4fe8-9d83-0a62411b5be1)

<img width="1154" alt="Screenshot 2024-05-19 at 15 36 02" src="https://github.com/gabriellemia/birmingham-biz/assets/78322726/82fd4b46-7e25-40ec-9b6b-2a38aa38d3d2">

## Strapi Content Management System



<p align="right">(<a href="#readme-top">back to top</a>)</p>

## API

### API URL

The following URL is used to access the API: [https://strapi-production-9d37.up.railway.app/api](https://strapi-production-9d37.up.railway.app/api)

### Helper Functions

All API helper functions can be found in the `request.js` file. These contain helper functions for the following requests:

**GET ARTICLES - Retrieve all articles from a specific news section.**

A get request can be made to retrieve all articles from a specific section. Each article JSON object includes the following data:

<ul>
  <li>Headline (the title of the article)</li>
  <li>Subheading (the subheading that appears on the home page under each title)</li>
  <li>Image</li>
  <li>Description (the leading paragraph of the article)</li>
  <li>Copy (the rest of the written article)</li>
  <li>Advertisement (up to 5, each with an image file and a link)</li>
</ul>

These are the available sections and their API endpoints:

<ul>
  <li>News: /news</li>
  <li>Features and Analysis: /features</li>
  <li>Five Minutes With: /five-minutes-withs</li>
  <li>Insights: /insights</li>
</ul>

Using these endpoints will retrieve all articles from the specified section, however in order to include article image files and advertisement image files in the payload, the following query must be added to the endpoint:

`?populate[0]=image&populate[1]=ad1&populate[2]=ad2&populate[3]=ad3&populate[4]=ad4&populate[5]=ad5`

For example, to request all articles from the News section including their article images and advertisement images, the following API URL is used:

`https://strapi-production-9d37.up.railway.app/api/insights/?populate[0]=image&populate[1]=ad1&populate[2]=ad2&populate[3]=ad3&populate[4]=ad4&populate[5]=ad5`

These API requests are made to retrieve the most recent articles, in order to populate the website homepage.

The following components make use of the Get Articles API helper functions:

<ul>
  <li>/NewsSection.jsx - getNewsArticles</li>
  <li>/MostPopular.jsx - getNewsArticles</li>
  <li>/FeaturesAndAnalysis.jsx - getFeaturesArticles</li>
  <li>/FiveMinsWith.jsx - getFiveArticles</li>
  <li>/Insights.jsx - getInsightsArticles</li>
  <li>/news/[slug]/page.js - getNewsArticles</li>
  <li>/features/[slug]/page.js - getNewsArticles</li>
  <li>/five-minutes/[slug]/page.js - getNewsArticles</li>
  <li>/insights/[slug]/page.js - getNewsArticles</li>
</ul>

**GET ARTICLE BY ID - Retrieve a specific article from a specific news section.**

A get request can be made to retrieve a specific article from a specific section by using its ID number. The id immediately follows the section endpoint, for example:

`https://strapi-production-9d37.up.railway.app/api/news/1`

The same query must be added to the endpoint in order to include the article images and advertisement images in the payload. For example to retrieve the News article with the ID number 1, including its article images and advertisement images, the following API URL is used:

`https://strapi-production-9d37.up.railway.app/api/news/1?populate[0]=image&populate[1]=ad1&populate[2]=ad2&populate[3]=ad3&populate[4]=ad4&populate[5]=ad5`

These API requests are made to retrieve a specific article when a hyperlink to that article is clicked on the homepage. The article has already been fetched to display on the homepage, so the ID is retrieved from the JSON data and fed into the API request to display the story page of that particular article. 

The ID is also used as the slug for the article’s URL on the website. For example, the News article with the ID number 1 will be linked to using the following URL:

`https://birmingham-biz-kappa.vercel.app/news/1`

The following components make use of the Get Article By ID API helper functions:

<ul>
  <li>/news/[slug]/page.js - getNewsArticleById</li>
  <li>/features/[slug]/page.js - getFeaturesArticleById</li>
  <li>/five-minutes/[slug]/page.js - getFiveArticleById</li>
  <li>/insights/[slug]/page.js - getInsightsArticleById</li>
</ul>

**GET BBTV EPISODES - Retrieve all BBTV episodes.**

A get request can be made to retrieve all BBTV episode data at the following endpoint: `/bbtvs`

Each episode JSON object contains the following data:

<ul>
  <li>Link (a link to the episode on YouTube/Vimeo)</li>
  <li>Title (the episode title)</li>
  <li>Date (the date that the episode was released)</li>
  <li>Description (a short description of the featured guests)</li>
</ul>

This API request is made to retrieve all BBTV episodes, in order to populate the website homepage with the most recent episode.

The following component makes use of the Get BBTV Episodes helper function:

<ul>
  <li>/BBTV.jsx - getBbtvEpisodes</li>
</ul>

**GET MAGAZINE ARCHIVE - Retrieve all magazines.**

A get request can be made to retrieve all Birmingham Business magazine data at the following endpoint: `/archives`

Each magazine JSON object contains the following data:

<ul>
  <li>MagazinePDF (a link to the PDF for download)</li>
  <li>MagazineCover (an image of the front cover)</li>
  <li>Issue (the months of the magazine’s issue e.g. Nov/Dec 2023)</li>
</ul>

This API request is made to retrieve all magazines, in order to populate the website homepage with the two most recent magazines for download.

The following component makes use of the Get Magazine Archive helper function:

<ul>
  <li>/Magazine.jsx - getArchive</li>
</ul>

**Other API Requests**

The API does not support POST, PUT, PATCH, or DELETE requests, as these actions are performed manually by the authorised user through Strapi.

### Requirements Table

| HTTP Method | Path                    | Request Body (JSON) | Response Body (JSON)  | Status Code | Description                                       |
| ----------- | ----------------------- | ------------------- | --------------------- | ----------- | ------------------------------------------------- |
| GET         | /news                   | N/A                 | List of articles      | 200         | Retrieve all News articles                        |
| GET         | /features               | N/A                 | List of articles      | 200         | Retrieve all Features and Analysis articles       |
| GET         | //five-minutes-withs    | N/A                 | List of articles      | 200         | Retrieve all Five Minutes With articles           |
| GET         | /insights               | N/A                 | List of articles      | 200         | Retrieve all Insights articles                    |
| GET         | /news/:id               | N/A                 | A specific article    | 200         | Retrieve a specific News article                  |
| GET         | /features/:id           | N/A                 | A specific article    | 200         | Retrieve a specific Features and Analysis article |
| GET         | /five-minutes-withs/:id | N/A                 | A specific article    | 200         | Retrieve a specific Five Minutes With article     |
| GET         | /insights/:id           | N/A                 | A specific article    | 200         | Retrieve a specific Insights article              |
| GET         | /bbtvs                  | N/A                 | List of BBTV episodes | 200         | Retrieve all BBTV episodes                        |
| GET         | /archives               | N/A                 | List of magazines     | 200         | Retrieve all Birmingham Business magazines        |

**Additional Queries**

<p>Retrieve articles with image files and ad images:</p>
<p>?populate[0]=image&populate[1]=ad1&populate[2]=ad2&populate[3]=ad3&populate[4]=ad4&populate[5]=ad5</p>
<p>Retrieve magazines with images:</p>
<p>?populate=*</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## EmailJS

To send messages via the contact form:

**Configuration**

Created Birmingham Business dummy gmail account to receive messages sent from contact form.

Set up a Service ID, Template ID and API key within emailJS.

Set up the send template and automatic replies to sender.

<img width="598" alt="Screenshot 2024-06-01 at 20 01 31" src="https://github.com/gabriellemia/birmingham-biz/assets/78322726/bca4b6ac-f7af-4c8d-bd50-e91a5409af6c"><img width="1169" alt="Screenshot 2024-06-01 at 20 02 33" src="https://github.com/gabriellemia/birmingham-biz/assets/78322726/fc36b424-ccd1-4fde-961f-ed35ee59e5ba"><img width="1168" alt="Screenshot 2024-06-01 at 20 02 56" src="https://github.com/gabriellemia/birmingham-biz/assets/78322726/7fab6d42-bbbe-418f-ac3b-377d970c8751">

Code set up:

<img width="591" alt="Screenshot 2024-06-01 at 19 55 49" src="https://github.com/gabriellemia/birmingham-biz/assets/78322726/e2d7d86b-78a4-434c-8e0c-1700b483ddea">

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Strapi Deployment and Configuration

To start deploying Strapi to Railway, download or fork the Railway’s starter Strapi repository on Github to Your local machine.

https://github.com/railwayapp-templates/strapi

1. **Now, using Railway’s platform, you can deploy your Strapi application.**

https://railway.app/new/template/strapi?referralCode=milo

Railway swiftly creates a Postgres database with a Docker image, seamlessly builds the Strapi user interface, and efficiently links it to the database via API.

After deployment, you can log into the Strapi UI to create your first user using the provided URL and add `/admin` endpoint to the address.

👉 Railway's filesystem is ephemeral, so changes to it are not persisted between deployments. This template uses Cloudinary for media storage.
Head over to Cloudinary to make a free account and then enter the details during or after deployment.
https://cloudinary.com/

1. **Install the Command Line Interface**

The Railway Command Line Interface (CLI) lets you interact with your Railway project from the command line to run developer mode and start creating new content types.

You can then make changes and redeploy your site from your local machine. Alternatively, you can set up a CI / CD pipeline from your GitHub repository using GitHub Actions to redeploy your application every time you commit to the main.

Follow the documentation to get started.

https://docs.railway.app/guides/cli

1. Connect to Railway from your local machine.

- Install the dependencies `yarn install` or `npm install`
- If this is the first time using the CLI login with `railway login`
- Run `railway link` to link the local repository to the Strapi service on Railway
- Start Strapi for development with `railway run yarn run develop` or `railway run npm run develop` This command runs Strapi in development mode and allows you to start building content types locally.
- Open your browser to `http://127.0.0.1:1337/admin`

### Creating new content types

Creating content types will begin building database tables where you can store your data. You can then make the data available on the pre-made API.

For more detailed instructions, head over to the Strapi docs. https://docs.strapi.io/dev-docs/quick-start

### Step 1: Create a "Article" collection type[](https://docs.strapi.io/dev-docs/quick-start#step-1-create-a-restaurant-collection-type)

Your article directory will eventually include many articles, so we need to create an "Article" collection type. Then, we can describe the fields to display when adding a new restaurant entry:

1. Click on the **Create your first Content type** button.If it's not showing up, go to  [Content-type Builder](http://localhost:1337/admin/plugins/content-type-builder) in the main navigation.
2. Click on **Create new collection type**.
3. Type `Article` for the *Display name*, and click **Continue**.
4. Click the Text field.
5. Type `Title` in the *Name* field.
6. Switch to the *Advanced Settings* tab and check the **`Required` field.**
7. Click on **Add another field**.
8. Choose the Rich text (Blocks) field in the list.
9. Type `Description` under the *Name* field, then click **Finish**.
10. Finally, click **Save** and wait for Strapi to restart.

### Step 2: Create an entry for the "Article" collection type[](https://docs.strapi.io/dev-docs/quick-start#step-2-create-an-entry-for-the-restaurant-collection-type)

1. Go to  *Content Manager > Collection types - Article* in the navigation.
2. Click on **Create new entry**.
3. Type the title of your new article in the _Title_ field. Let's say it's `How to get ahead in advertising.`
4. In the *Description* field, write a few words about it. If you're lacking some inspiration, you can use `Welcome to Advertising! We offer a fresh new approach for passionate producers.`
5. Click **Save**.

The Article is now listed in the *Collection types.*

### Step 4: Set API token, Roles & Permissions[](https://docs.strapi.io/dev-docs/quick-start#step-4-set-roles--permissions)

We have just added an article. Now, we need to make sure that the content is accessible through the API and protect it with an API token:

1. Click on  *Settings* at the bottom of the main navigation.
2. Under _Global Settings,_ click _API Tokens._
3. Click _Create New API Token._
4. Fill out the _Name_ and *Description. A*dd _Unlimited_ for the duration and _Read-only_ for the _Token type_
5. Under _Permissions,_ select Article and select _find_ and _findOne_
6. Now Under the _Users & Permissions Plugin_, choose *Roles*.
7. Click the Authenticated role.
8. Scroll down under *Permissions*.
9. In the *Permissions* tab, find *Article* and click on it.
10. Click the checkboxes next to **find** and **findOne**.
11. Finally, click **Save**.

### Deploy to your Railway application

Open a new terminal window in your local repository and run `railway up` to deploy the production site.

### Test your API is running with Postman

https://www.postman.com/

1. In a new workspace, send a `GET` request using your public address for your API - you can find this in your Railway dashboard. It should look something like [`https://strapi-production-XXXX.up.railway.app/`](https://strapi-production-****.up.railway.app)
2. Add the `api/article` endpoint to the URL
3. Under _Authorizations > Auth Type,_ select _Bearer Token_
4. Paste your newly created API token into the _Token_ area
5. Hit send, and you should see the JSON object of your article.

Congratulations! You can now use your API to connect to the front end.

## Accessibility

Our project is committed to ensuring digital accessibility for all, and we aimed to conform to the Web Content Accessibilty Guidelines 2.1, level AA. For more information on the tools and methods we used, please refer to our [Accessibility Docs](https://github.com/gabriellemia/birmingham-biz/blob/main/ACCESSIBILITY.md).

## Search Engine Optimisation

SEO was a major focus of our stakeholders. While much of the app's SEO and web performance was addressed during the build, we also produced an [SEO Plan](https://github.com/gabriellemia/birmingham-biz/blob/main/SEO-PLAN.md) to help our stakeholders boost traffic to their site from their side.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

