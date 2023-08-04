export default function ListaDesplegable({
  selectedGenero,
  handleChange,
  generoOptions,
  tittle,
}) {
  return (
    <select
      className="form-select mb-5 list"
      id="lista1"
      value={selectedGenero}
      onChange={handleChange}
    >
      <option value="" disabled>
        {tittle}
      </option>
      {generoOptions.map((option) => (
        <option key={option.value} value={option.label}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
