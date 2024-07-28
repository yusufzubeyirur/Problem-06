// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin
export default function ButtonVariants() {
  return (
    <span
      className="wrapper"
      style={{ display: "flex", gap: "10px", justifyContent: "center" }}
    >
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          borderRadius: "8px",
          padding: "10px 20px",
          fontSize: "16px",
        }}
        className="button-create"
      >
        Create
      </button>
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          borderRadius: "8px",
          padding: "10px 20px",
          fontSize: "16px",
        }}
        className="button-update"
      >
        Update
      </button>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          borderRadius: "8px",
          padding: "10px 20px",
          fontSize: "16px",
        }}
        className="button-delete"
      >
        Delete
      </button>
    </span>
  );
}
