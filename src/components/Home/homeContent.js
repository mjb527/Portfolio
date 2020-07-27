import React from 'react';
import { Link } from 'react-router-dom';

function HomeContent() {

  return(
    <div className="mb-4">
      <h3 className="mb-4"><u>About Me</u></h3>
      <p>
      I graduated from Rutgers University in 2015 with a degree in Information Technology and Informatics, where I first learned how to code.
      Since then, I've worked several support jobs, currently working at Rutgers as a Unit Computing Specialist.
      I had learned how to code at Rutgers, and began to put my skills to use, increasing productivity with scripts to organize and migrate data and
      make API calls rather than use GUIs to help customers, utilizing mainly Python and on occassion Java. I decided to expand my skillset and take the Rutgers Full Stack Coding Bootcamp.
      </p>

      <p>
      I learned a lot in the Bootcamp, and am confident in my new abilities as a web developer. I understand how to create responsive and robust webpages, and equally
      strong server-side applications. I expanded my knowledge to include web languages like HTML and CSS, JavaScript, and jQuery. I also have an excellent understanding of Node.js, and both relational
      and non-relation database languages, such as MySQL and MongoDB. Most recently, I have learned React, and found the tool incredibly powerful in creating web applications.
      </p>

      <p>Please be sure to check out my {<Link to="/portfolio" style={{ display: 'inline' }}>portfolio</Link>} to check out some of my work.</p>

      <h2 className="my-4"><u>Beyond the Developer</u></h2>
      <p>
      Because of how much time I spend in front of screens working, I try to limit myself from looking at screens in my free time.
      I enjoy all sorts of outdoor activities, from team sports to hiking, skiing, or just sitting outside relaxing. I am an avid traveler as well,
      and love seeing other states and countries. I do, however work on several personal projects, utilizing tools like Raspberry Pis to administer to my home's network,
      to creating webpages for fun.
      </p>

    </div>
  );

}

export default HomeContent;
