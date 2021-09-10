import Newdo from "./Newdo";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import About_app from "./About_app";
import About_author from "./About_author";
import Nav from "./Nav";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
          crossorigin="anonymous"
        ></script>

        <div
          className="card mx-auto mt-5 p-5 shadow-lg p-3 mb-5 bg-body rounded"
          style={{ width: 50 + "%" }}
        >
          <h1 className="card-title text-center" style={{}}>
            {" "}
            ToDos App
          </h1>
          <br />
          <BrowserRouter>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item mx-auto " role="presentation">
              <button
                className="nav-link "
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                <Link
                    to="/"
                    className="nav-link "
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
              </button>
            </li>
            <li className="nav-item mx-auto" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
               <Link to="/About_app" className="nav-link" href="#">
                    About App
                  </Link>
              </button>
            </li>
            <li className="nav-item mx-auto" role="presentation">
              <button
                className="nav-link "
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
               <Link to="/About_author" className="nav-link" href="#">
                    About Author
                  </Link>
              </button>
            </li>
          </ul>
         

         
            {/* <ul className="nav nav-pills nav-fill">
              <li className="nav-item">
                <a>
                  <Link
                    to="/"
                    className="nav-link "
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a>
                  <Link to="/About_app" className="nav-link" href="#">
                    About App
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a>
                  <Link to="/About_author" className="nav-link" href="#">
                    About Author
                  </Link>
                </a>
              </li>
            </ul> */}

            <Switch>
              <Route exact path="/" component={Newdo}></Route>
              <Route path="/About_app" component={About_app}></Route>
              <Route path="/About_author" component={About_author}></Route>

              <Route component={PageNotFound} />
            </Switch>
          </BrowserRouter>
        </div>
      </body>
    </html>
  );
}

export default App;
