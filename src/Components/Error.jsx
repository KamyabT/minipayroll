const Error = ({ isError, onSetError }) => {
  console.log(isError, "erooor");
  return (
    <div
      className="bg-danger p-2 rounded text-black shadow-sm"
      style={{ position: "fixed", left: "15px", bottom: "15px" }}
    >
      <span
        className="d-flex align-items-center justify-content-center bg-white"
        style={{
          position: "absolute",
          right: "5px",
          top: "5px",
          borderRadius: "50%",
          height: "20px",
          width: "20px",
          cursor: "pointer",
        }}
        onClick={() => onSetError(false)}
      >
        X
      </span>
      <div className="h6">{isError.name} :</div>
      <div>{isError.message}</div>
    </div>
  );
};

export default Error;
