export default function ForgotPass() {
  return (
    <>
      <link rel="stylesheet" href="/css/styleLog.css" />
      <div className="nav">
        <div className="header">
          <a href="/" className="logo">Rose Heavenly Salon and Spa</a>
          <nav className="navbar">
            <a href="/signup">Back to Login</a>
            <a href="/">Home</a>
          </nav>
        </div>
      </div>

      <div className="heading" style={{ background: 'url(/images/brush-1.png) no-repeat' }}>
        <h1>Forgot Password</h1>
      </div>

      <section className="signIn">
        <div className="container">
          <h1 className="heading-title">Forgot Password</h1>
          <form className="login-email">
            <div className="input-group">
              <input className="form-control" type="email" name="email" placeholder="Enter email address" required />
            </div>
            <div className="input-group">
              <input className="form-control button" type="submit" value="Continue" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
