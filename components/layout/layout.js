// src/app/layout.js
import Sidebar from "@/components/layout/Sidebar";
import "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">{children}</main>
    </div>
  );
}
