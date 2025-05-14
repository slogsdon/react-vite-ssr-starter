// This is the layout component for the dashboard section of the application.
// It provides a sidebar for navigation and renders child routes using the <Outlet> component from React Router.

import { Outlet, Link } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <aside>
        <Link to="/dashboard/overview">Overview</Link> |{" "}
        <Link to="/dashboard/settings">Settings</Link>
      </aside>
      <section>
        <Outlet />
      </section>
    </div>
  );
}
