export default function UserOtp() {
  return (
    <>
      <link rel="stylesheet" href="/css/otp-style.css" />
      <section className="header">
        <img src="/images/image-logo.png" alt="" className="image-logo" />
        <a href="" className="logo">Rose Heavenly Salon and Spa</a>
        <div id="menu-btn" className="fas fa-bars"></div>
      </section>

      <section className="signIn">
        <div className="container">
          <form className="login-email OTP">
            <h2 className="text-center">Code Verification</h2>
            <div className="input-group">
              <input className="form-control" type="number" name="otp" placeholder="Enter verification code" required />
            </div>
            <div className="input-group">
              <input className="btn" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
