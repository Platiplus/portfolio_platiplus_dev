---
title: "WoD - Adventure Keeper: Architecture Doc"
description: "This description will be used for the article listing and search results on Google."
date: "2023-03-06"
banner:
  src: "../../images/wod-adventure-keeper-architecture-doc/wod-header.jpg"
  alt: "WoD - Adventure Keeper: Architecture Doc"
  caption: ''
categories:
  - "SPA"
  - "Serverless Architecture"
keywords:
  - "SPA"
  - "Serverless Architecture"
  - "React"
  - "Lambda"
  - "Typescript"
---

## Project Motivation

World of Darkness is a popular storytelling system that offers a rich and immersive experience to players. 

However, managing and tracking players’ characters, NPCs and adventures in this game can be challenging. 

That’s where “WoD - Adventure Keeper” comes in - to provide an easy-to-use platform to create and manage all the needs you might have while playing/narrating an adventure in the World of Darkness.

Adventure Keeper aims to eliminate the use of paper regarding playing/narrating and adventure. 

Your character sheets are kept in the cloud and can be accessed from any device that has a browser, so you can either play adventures remotely and use your computer or go to your friends’ houses and use your phone to check on your character and update its traits and statuses.

## Screens

![Character Selection Screen](../../images/wod-adventure-keeper-architecture-doc/character_selection.jpg "Character selection screen")

From the character management perspective, you can have multiple characters on your roster and assign them to adventures created by you or by other players. In the character screen, you can see your rosters’ basic info, showcasing the name and the concept of your characters, having the possibility to enter a specific screen with their details that will be used throughout the adventure.

![Character Selection Screen](../../images/wod-adventure-keeper-architecture-doc/character_details.jpg "Character details screen")
This specific screen will show your base statuses, items, merits, conditions, skills and other info you might need when your Dungeon Master ask for any specific tests when you play.

![Adventure Selection Screen](../../images/wod-adventure-keeper-architecture-doc/adventure_selection.jpg "Adventure selection screen")

From the Dungeon Master’s perspective, you can create an adventure providing a name and a quick summary that will help you identify which adventure you need when choosing them on the adventure selection screen.

![Adventure Details Screen](../../images/wod-adventure-keeper-architecture-doc/adventure_details.jpg "Adventure details screen")
On the adventure details screen, you will have control over all the characters that are currently playing your adventure, being able to see their base stats and give/remove merits, conditions and items.

From this screen, you can also create invites to your adventure, and can send them to friends to accept from their character screen to be linked with your adventure.

### Architecture

![Architecture Diagram](../../images/wod-adventure-keeper-architecture-doc/architecture.jpg "Architecture Diagram")

---
<span style="font-weight:bold;">Hosting</span> - Netlify  
<span style="font-weight:bold;">Frontend</span> - React  
<span style="font-weight:bold;">Backend</span> - Api Gateway / Lambdas  
<span style="font-weight:bold;">Database</span> - CockroachDb  
<span style="font-weight:bold;">Infrastructure</span> - AWS CDK

---

The <span style="font-weight:bold;">frontend</span> of Adventure Keeper is a <span style="font-weight:bold;">Single Page Application (SPA)</span> powered by <span style="font-weight:bold; color: #13C8E5">React.js</span> and <span style="font-weight:bold; color: #13C8E5">Redux</span>. This combination allows for fast and responsive UIs, as well as the flexibility to build complex user interactions with ease. The SPA is hosted on <span style="font-weight:bold; color: #13C8E5">Netlify</span>, which provides an automated pipeline to seamlessly deploy the code from a <span style="font-weight:bold; color: #13C8E5">GitHub</span> repo.

For the backend, <span style="font-weight:bold; color: #13C8E5">API Gateway</span> and <span style="font-weight:bold; color: #13C8E5">Lambdas</span> are used to deal with specific entity related code. This allows for a more efficient use of resources, as each Lambda function can be optimized to handle a specific task, making them more scalable and easier to maintain. The API Gateway provides a simple and secure way to interact with the Lambdas, ensuring that data is handled safely and securely.

To store data, <span style="font-weight:bold; color: #13C8E5">CockroachDB</span> was selected since it is a scalable, fast, cheap and serverless database that uses PostgreSQL syntax. This choice provides the benefits of a traditional SQL database, with the added advantages of serverless architecture. CockroachDB’s also has a generous free tier offer that makes it a very attractive choice to build a web app on a budget.

Finally, all the infrastructure for this web app was created as code, using <span style="font-weight:bold; color: #13C8E5">AWS CDK</span> to build and version all resources. This approach allows for more consistent and repeatable infrastructure, making it easier to maintain and update the app over time. The use of <span style="font-weight:bold; color: #13C8E5">Git</span> for version control ensures that changes to the infrastructure can be tracked and managed more effectively.

To monitor the application, all the Lambdas are constantly writing logs to <span style="font-weight:bold; color: #13C8E5">Amazon Cloudwatch</span>. This provides developers with a powerful tool for monitoring the app, identifying issues and debugging problems.
