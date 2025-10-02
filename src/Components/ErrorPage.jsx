import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div class="container">
      <div class="page-not-found-section">
        <h1 class="error">404</h1>
        <div class="description">
          Ooops!!! The page you are looking for is not found
        </div>
        <Link class="back-home-btn button" to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}
