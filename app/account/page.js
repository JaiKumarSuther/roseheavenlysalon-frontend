export default function Account() {
  return (
    <>
      <section className="header">
        <a href="/" className="logo">Rose Heavenly Salon and Spa</a>
        <nav className="navbar">
          <a href="/about">About us</a>
          <a href="/package">Services</a>
          <a href="/calendar">Calendar</a>
          <a href="/schedule">Schedule</a>
          <a href="/api/logout">Log Out</a>
        </nav>
        <div id="menu-btn" className="fas fa-bars"></div>
      </section>

      <section className="accounts">
        <h1 className="heading-title">Welcome! </h1>
        <form action="#" method="post" className="fetch">
          <div className="container">
            <div className="content">
              <span>First Name :</span>
              <input type="text" placeholder="" name="firstname" defaultValue="" />
            </div>
            <div className="content">
              <span>Last Name :</span>
              <input type="text" placeholder="" name="lastname" defaultValue="" />
            </div>
            <div className="content">
              <span>Username :</span>
              <input type="text" placeholder="" name="username" defaultValue="" />
            </div>
            <div className="content">
              <span>Phone Number:</span>
              <input type="number" placeholder="" name="phone" defaultValue="" />
            </div>
            <div className="content">
              <span>Address :</span>
              <input type="text" placeholder="" name="address" defaultValue="" />
            </div>
            <div className="content">
              <span>Please enter your password to continue: </span>
              <input type="password" placeholder="Enter your Password" name="password" />
            </div>
          </div>
          <input type="submit" value="Update Profile" className="btn" name="update" />
        </form>
      </section>
    </>
  );
}
