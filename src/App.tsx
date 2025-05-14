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
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="markdown" element={<MarkdownPage />} />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="overview" element={<Overview />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
}
