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
