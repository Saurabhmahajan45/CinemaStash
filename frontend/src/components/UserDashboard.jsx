import { useNavigate } from "react-router-dom";

export  function UserDashboard() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <div className="card" style={{ maxWidth: "550px" }}>
        
        <h2>Welcome User 🎬</h2>

        <p style={{ textAlign: "center", color: "#666", marginBottom: "20px" }}>
          Manage your movie experience from here.
        </p>

        <button 
          className="btn-primary"
          onClick={() => navigate("/movies")}
        >
          Browse Movies 🎥
        </button>

        <button 
          className="btn-secondary"
          onClick={() => navigate("/my-bookings")}
        >
          My Bookings 📅
        </button>

      </div>
    </div>
  );
}
