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
