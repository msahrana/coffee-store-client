import {Link} from "react-router-dom";
import img from "../../../public/images/404/404.gif";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src={img} alt="" />
      <Link to="/">
        <button className="btn bg-orange-500 rounded-lg text-2xl">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
