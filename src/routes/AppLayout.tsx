import { Navigate } from "react-router-dom";
import { useAuthUser } from "../firebase/useAuthUser";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/auth";

export default function AppLayout() {
  const { user, ready } = useAuthUser();

  if (!ready) return <div className="page center">Loading…</div>;
  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="page">
      <div className="topbar">
        <div style={{ fontWeight: 700 }}>MyNote</div>
        <div style={{ marginLeft: "auto" }}>
          <button
            onClick={() => signOut(auth)}
            style={{ background: "#2a2f45" }}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="content">
        <aside className="sidebar">Folder tree goes here</aside>
        <main className="main">Editor goes here</main>
      </div>
    </div>
  );
}
