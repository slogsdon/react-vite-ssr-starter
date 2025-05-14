// This is the main application component.
// It defines the routing structure for the application using React Router.
// Routes are nested to support layouts and child routes.

import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Overview from "@/pages/dashboard/Overview";
import Settings from "@/pages/dashboard/Settings";
import MarkdownPage from '@/pages/MarkdownPage'

export function App() {
  return (
    <Routes>
      {/* Main layout for the application */}
      <Route path="/" element={<MainLayout />}>
        {/* Home page */}
        <Route index element={<Home />} />
        {/* About page */}
        <Route path="about" element={<About />} />
        {/* Markdown page */}
        <Route path="markdown" element={<MarkdownPage />} />
        {/* Dashboard layout with nested routes */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="overview" element={<Overview />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
}
