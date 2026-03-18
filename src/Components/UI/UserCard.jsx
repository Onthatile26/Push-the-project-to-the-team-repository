function UserCard({ name, role, price, image }) { 
  return (
    <div style={{
    border: "1px solid #ccc",
    borderRadius: "12px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
    margin: "15px",
    overflow: "hidden",
    backgroundColor: "#fff"
  }}>
    <img 
      src={image} 
      alt={name} 
      style={{
        width: "100%",
        height: "200px",
        objectFit: "cover",
        display: "block",
      }} 
    />

    <div style={{ padding: "20px" }}>
      <h3>{name}</h3>

      {role && <p>{role}</p>}

      <p style={{ fontWeight: "", color: "black" }}>
        {price}
      </p>
    </div>
  </div>
  );
}

export default UserCard;