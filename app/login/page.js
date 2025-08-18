export default function Login() {
  return (
    <>
      <link rel="stylesheet" href="/css/styleLog.css" />
      <div className="nav">
        <div className="header">
          <a href="/" className="logo">Rose Heavenly Salon and Spa</a>
          <nav className="navbar">
            <a href="/">Home</a>
          </nav>
        </div>
      </div>

      <div className="heading" style={{ background: 'url(/images/brush-1.png) no-repeat' }}>
        <h1>Sign In</h1>
      </div>

      <section className="signIn">
        <div className="container">
          <h1 className="heading-title">Login</h1>
          <form className="login-email">
            <div className="input-group">
              <input className="form-control" type="email" name="email" placeholder="Email Address" required />
            </div>
            <div className="input-group">
              <input className="form-control" type="password" name="password" placeholder="Password" required />
            </div>
            <div className="input-group">
              <input className="form-control button" type="submit" value="Login" />
            </div>
            <div className="login-register-text"><a href="/forgotpass"><br/>Forgot password?</a></div>
            <div className="login-register-text">Not yet a member? <a href="/signup">Signup now</a></div>
          </form>
        </div>
      </section>
    </>
  );
}
