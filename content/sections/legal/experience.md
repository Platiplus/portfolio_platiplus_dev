---
sectionId: experience
---

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap");

.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  font-family: "Montserrat";
}
.timeline {
  position: relative;
}

.timeline ul {
  list-style: none;
}
.timeline ul li {
  padding: 20px;
  background-color: #1e1f22;
  color: white;
  border-radius: 10px;
  margin-bottom: 20px;
}
.timeline ul li:last-child {
  margin-bottom: 0;
}
.timeline-content h1 {
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  margin: 0;
}
.timeline-content h2 {
  font-weight: 500;
  font-size: 12px;
  line-height: 30px;
  margin: 0;
  color: #0ec200;
}
.timeline-content p {
  font-size: 16px;
  line-height: 30px;
  font-weight: 300;
}
.timeline-content .date {
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 2px;
}
@media only screen and (min-width: 768px) {
  .timeline:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: gray;
  }
  .timeline ul li {
    width: 50%;
    position: relative;
    margin-bottom: 50px;
  }
  .timeline ul li:nth-child(odd) {
    float: left;
    clear: right;
    transform: translateX(-30px);
    border-radius: 20px 0px 20px 20px;
  }
  .timeline ul li:nth-child(even) {
    float: right;
    clear: left;
    transform: translateX(30px);
    border-radius: 0px 20px 20px 20px;
  }
  .timeline ul li::before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: gray;
    top: 0px;
  }
  .timeline ul li:nth-child(odd)::before {
    transform: translate(50%, -50%);
    right: -30px;
  }
  .timeline ul li:nth-child(even)::before {
    transform: translate(-50%, -50%);
    left: -30px;
  }
  .timeline-content .date {
    position: absolute;
    top: -70px;
  }
  .timeline ul li:hover::before {
    background-color: aqua;
  }
}
</style>

<div class="container">
    <div class="timeline">
        <ul>
          <li>
            <div class="timeline-content">
              <h3 class="date">Nov 2022 - Feb 2023 (4 mos)</h3>
              <h1>Senior Software Engineer</h1>
              <h1>Clevertech</h1>
              <h2>New York - United States of America</h2>
              <h1 style="margin-top: 12px;">Main Stack</h1>
              <p style="margin: 0">Node JS (Typescript), React, GraphQL, AWS, Kubernetes, Circle CI, Ant Design</p>
            </div>
          </li>
          <li>
            <div class="timeline-content">
              <h3 class="date">Aug 2021 - Oct 2022 (1 yr 4 mos)</h3>
              <h1>Software Engineer</h1>
              <h1>Junglescout</h1>
              <h2>British Columbia - Canada</h2>
              <h1 style="margin-top: 12px;">Main Stack</h1>
              <p style="margin: 0">AWS, CDK, Ruby on Rails, Node JS (Typescript), React, GraphQL, Serverless, PostgreSQL</p>
            </div>
          </li>
          <li>
            <div class="timeline-content">
              <h3 class="date">Jan 2020 - Aug 2021 (1 yr 8 mos)</h3>
              <h1>Lead Fullstack Developer</h1>
              <h1>DTI Digital</h1>
              <h2>Belo Horizonte - Brazil</h2>
              <h1 style="margin-top: 12px;">Main Stack</h1>
              <p style="margin: 0">Node JS (Typescript), React, Angular, Azure DevOps, CosmosDb, SQL Server, C# (dotNet)</p>
            </div>
          </li>
          <li>
            <div class="timeline-content">
              <h3 class="date">Mar 2018 - Jan 2020 (1 yr 11 mos)</h3>
              <h1>Fullstack Developer</h1>
              <h1>M2M Telemetria</h1>
              <h2>Belo Horizonte - Brazil</h2>
              <h1 style="margin-top: 12px;">Main Stack</h1>
              <p style="margin: 0">Node JS (Javascript), Angular (Typescript), MySQL, SQL Server, AWS, PHP, C# (dotNet), REST APIs, SOAP APIs, WebSocket APIs</p>
            </div>
          </li>
          <li>
            <div class="timeline-content">
              <h3 class="date">Mar 2015 - Feb 2018 (3 yrs)</h3>
              <h1>Frontend Developer</h1>
              <h1>Freelance</h1>
              <h2>São Paulo - Brazil</h2>
              <h1 style="margin-top: 12px;">Main Stack</h1>
              <p style="margin: 0">Javascript, PHP, Joomla, WordPress, HTML 5, CSS 3</p>
            </div>
          </li>
        </ul>
      </div>
</div>
