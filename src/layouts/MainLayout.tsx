// This is the main layout component for the application.
// It provides a navigation bar and renders child routes using the <Outlet> component from React Router.

import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/markdown">Markdown</Link> |{" "}
        <Link to="/dashboard/overview">Dashboard</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
