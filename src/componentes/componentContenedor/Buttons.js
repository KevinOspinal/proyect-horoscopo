export default function Buttons({handleConsultar , tittle}) {
  return (
    <button
      className="btn btn-primary button"
      style={{ backgroundColor: "#f5f7ff", color: "black" }}
      onClick={handleConsultar}
    >
      {"<"} {tittle}
    </button>
  );
}
