
const Search = ({query , setQuery}) => {


  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <input
      type="search"
      onChange={(e) => handleChange(e)}
      value={query}
      placeholder="Search employees..."
      className="form-control w-100"
      style={{ flex: 1 }}
    />
  );
};

export default Search;
