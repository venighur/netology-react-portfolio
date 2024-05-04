function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="toolbar">
      {filters.map(b => (
        <button
          key={b}
          className={`btn-filter ${b === selected ? "active" : ""}`}
          onClick={onSelectFilter}>
          {b}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;