function StatCard({ title, value, color }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "25px",
        boxShadow: "0 4px 12px rgba(0,0,0,.08)",
        textAlign: "center"
      }}
    >
      <h3
        style={{
          marginBottom: "10px",
          color: "#555"
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          color,
          fontSize: "38px"
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default StatCard;