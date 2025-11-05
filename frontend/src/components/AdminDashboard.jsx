import { useNavigate } from "react-router-dom";
import "../assets/css/card.css";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Admin Dashboard</h2>

      <button 
        onClick={() => navigate("/admin/movies")}
        style={{ padding: "10px", width: "250px", marginTop: "20px" }}
      >
        Manage Movies
      </button>

      <button 
        onClick={() => navigate("/admin/bookings")}
        style={{ padding: "10px", width: "250px", marginTop: "20px" }}
      >
        Manage Bookings
      </button>
    </div>
  );
}
