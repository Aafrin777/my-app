//working here
import {Link } from "react-router-dom";
import '../index.css';


const Router_project = () => {
  return (
    <>
      <nav className="Router_project">
      <li className="navbar-item me-auto mb-2 mb-lg-0">
              <Link className="navbar-link active" to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link active" to="/Hooksproject">Project 1 Hooksproject</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link active" to="/HooksTextform">Project 2 HooksTextform</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link active" to="/Props">Project 3 Props</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link active" to="/About">Project 4 About</Link>
            </li>

            <li className="navbar-item">
              <Link className="navbar-link active" to="/">Project-5 project</Link>
            </li>

            <li className="navbar-item">
              <Link className="navbar-link active" to="/color">project 6 color</Link>
            </li>
      </nav>


    </>
  );
};

export default Router_project;




/*
 What is React Router DOM?
React Router DOM is a library used in React applications for handling routing/navbarigation. It allows us to create single-page applications (SPAs) with multiple pages (views) without reloading the whole page.

🚀 Why Use React Router DOM?
🔹 Handles navbarigation in SPAs:

Normally, clicking a link reloads the whole page in traditional websites.
With React Router DOM, navbarigation is fast & smooth because it updates only the necessary parts of the page (without full reload).
🔹 Provides Dynamic Routing:

Enables URL-based navbarigation (/home, /about, /contact).
Can render different components based on the URL.
🔹 Maintains Browser History:

Allows using Back & Forward buttons like a regular website.

React Router DOM updates only the necessary part of the page


1️⃣ Install React Router DOM

npm install react-router-dom

*/
