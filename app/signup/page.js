export default function Signup() {
  return (
    <>
      <link rel="stylesheet" href="/css/styleLog.css" />
      <div className="nav">
        <div className="header">
          <a href="#" className="logo">Rose Heavenly Salon and Spa</a>
          <nav className="navbar">
            <a href="/">Home</a>
          </nav>
        </div>
      </div>

      <div className="heading" style={{ background: 'url(/images/brush-1.png) no-repeat' }}>
        <h1>Sign Up</h1>
      </div>

      <section className="signIn">
        <div className="container">
          <h1 className="heading-title">Register</h1>
          <form className="login-email">
            <div className="input-group">
              <input className="form-control" type="text" name="firstname" placeholder="First Name" required />
            </div>
            <div className="input-group">
              <input className="form-control" type="text" name="lastname" placeholder="Last Name" required />
            </div>
            <div className="input-group">
              <input className="form-control" type="text" name="username" placeholder="UserName" required />
            </div>
            <div className="input-group">
              <input className="form-control" type="email" name="email" placeholder="Email Address" required />
            </div>
            <div className="input-group">
              <input className="form-control" type="text" name="address" placeholder="Home Address" required />
            </div>
            <div className="input-group">
              <input className="form-control" type="number" name="phone" placeholder="Contact Number" required />
            </div>
            <div className="input-group">
              <input className="form-control" type="password" name="password" placeholder="Password" required />
            </div>
            <div className="input-group">
              <input className="form-control" type="password" name="cpassword" placeholder="Confirm password" required />
            </div>
            <div className="input-group">
              <input className="form-control button" type="submit" value="Signup" />
            </div>
            <p className="login-register-text">Already a member? <a href="/login">Login here</a></p>
          </form>
        </div>
      </section>
    </>
  );
}
