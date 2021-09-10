import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
      <div>
    <div className="alert alert-danger text-center fs-3" role="alert">
      Oops! Something went wrong!
    </div>
    <div>
    <Link
                    to="/"
                    className="btn btn-success text-center light"
                    aria-current="page"
                    href="#"
                  >
                  Back to Home
                  </Link>
     </div>
     </div>
  );
};
export default PageNotFound;
