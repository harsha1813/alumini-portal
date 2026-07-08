import StatCard from "../components/StatCard";

function AdminDashboard() {

  return (
<>
      <h1>Welcome, {userInfo.name} 👋</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <StatCard
          title="Jobs Posted"
          value={stats.totalJobs}
          color="#2563eb"
        />

        <StatCard
          title="Students"
          value={stats.totalStudents}
          color="#16a34a"
        />

        <StatCard
          title="Alumni"
          value={stats.totalAlumni}
          color="#ea580c"
        />

        <StatCard
          title="Events"
          value={stats.totalEvents || 0}
          color="#9333ea"
        />
      </div>
  </>

  );

}

export default AdminDashboard;