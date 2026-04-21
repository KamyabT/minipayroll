const Login = () => {
  return (
    <div style={{ backgroundColor: "#0651c2", height: "100vh" }}>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <form className="d-flex flex-column" action="">
          <label htmlFor="">Email</label>
          <input type="email" />
          <label htmlFor="">Password</label>
          <input type="password" />

          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
