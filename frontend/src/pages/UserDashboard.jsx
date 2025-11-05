import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>User Dashboard</h2>

      <button 
        onClick={() => navigate("/movies")} 
        style={{ padding: "10px", width: "200px", marginTop: "20px" }}
      >
        Browse Movies
      </button>

      <button 
        onClick={() => navigate("/my-bookings")} 
        style={{ padding: "10px", width: "200px", marginTop: "20px" }}
      >
        My Bookings
      </button>
    </div>
  );
}
