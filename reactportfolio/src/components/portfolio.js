import React from "react";
import tacoParty from "../images/siteSS copy.png"
import dayPlanner from "../images/screencapture-hartbt-github-io-homework-5-dayPlanner-2020-10-06-10_57_20.png"
import weatherDashboard from "../images/06-server-side-apis-homework-demo.png"
import burgerLogger from "../images/Screen Shot 2020-11-04 at 1.55.32 PM.png"
import congo from "../images/Screen Shot 2020-11-10 at 7.20.49 PM.png"

function portfolio() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <div className="card" style="width: 18rem;">
            <div className="card-title">
              <h1>Taco Party</h1>
            </div>
            <img
              src={tacoParty}
              className="card-img-top"
              alt="..."
              className="img-fluid"
            ></img>
            <div className="card-body">
              <p className="card-text">
                Taco Party is a resource to be used when the user is searching
                for taco recipe ideas. Using an API key, the user is able to
                either generate a random recipe, or view a list of recipes
                coupled with nutritional information. The user is also able to
                look at a selection of salsa and drink recipes.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="card" style="width: 18rem;">
            <div className="card-title">
              <h1>Day Planner</h1>
            </div>
            <img
              src={dayPlanner}
              className="card-img-top"
              alt="..."
              className="img-fluid"
            ></img>
            <div className="card-body">
              <p className="card-text">
                This assignment serves as a Day Planner that allows the user to
                save events for each hour of the day. Easily accessable on the
                web, this assignments incorporates elements from CSS, HTML, and
                JavaScript.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="card" style="width: 18rem;">
            <div className="card-title">
              <h1>Weather Dashboard</h1>
            </div>
            <img
              src={weatherDashboard}
              className="card-img-top"
              alt="..."
              className="img-fluid"
            ></img>
            <div className="card-body">
              <p className="card-text">
                A weather dashboard that allows user to search for city. They
                are then provided with the current forcast -including a UV Index
                - as well as a 5 day forcast. This assignments incorporates
                elements from CSS, HTML, and JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-4">
          <div className="card" style="width: 18rem;">
            <div className="card-title">
              <h1>Burger Logger</h1>
            </div>
            <img
              src={burgerLogger}
              className="card-img-top"
              alt="..."
              className="img-fluid"
            ></img>
            <div className="card-body">
              <p className="card-text">
                This project is a burger logger that allows users to interact
                with burgers in a database, as well as add their own. This
                assignment incorporates elements from HTML, CSS, JavaScript, and
                mySQL.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="card" style="width: 18rem;">
            <div className="card-title">
              <h1>CONGO</h1>
            </div>
            <img
              src={congo}
              className="card-img-top"
              alt="..."
              className="img-fluid"
            ></img>
            <div className="card-body">
              <p className="card-text">
                This project is a forum site that allows the users to view
                descriptions on musical items that other users have posted. This
                site features login functionality, and once a user is logged in
                they are able to create posts about their own instruments as
                well as like/dislike instruments that have already been posted.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="card" style="width: 18rem;">
            <img
              src="Assets/Images/shutterstockblank.jpg"
              className="card-img-top"
              alt="..."
              className="img-fluid"
            ></img>
            <div className="card-body">
              <p className="card-text">I would also do it here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default portfolio