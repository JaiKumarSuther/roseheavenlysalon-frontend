"use client";
import { useState } from "react";

export default function Account() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    phone: "",
    address: "",
    password: "",
  });
  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated (demo)");
  };

  return (
    <>
      <section className="accounts">
        <h1 className="heading-title">Welcome! </h1>
        <form action="#" method="post" className="fetch" onSubmit={onSubmit}>
          <div className="container">
            <div className="content">
              <span>First Name :</span>
              <input
                type="text"
                placeholder=""
                name="firstname"
                value={form.firstname}
                onChange={onChange}
              />
            </div>
            <div className="content">
              <span>Last Name :</span>
              <input
                type="text"
                placeholder=""
                name="lastname"
                value={form.lastname}
                onChange={onChange}
              />
            </div>
            <div className="content">
              <span>Username :</span>
              <input
                type="text"
                placeholder=""
                name="username"
                value={form.username}
                onChange={onChange}
              />
            </div>
            <div className="content">
              <span>Phone Number:</span>
              <input
                type="number"
                placeholder=""
                name="phone"
                value={form.phone}
                onChange={onChange}
              />
            </div>
            <div className="content">
              <span>Address :</span>
              <input
                type="text"
                placeholder=""
                name="address"
                value={form.address}
                onChange={onChange}
              />
            </div>
            <div className="content">
              <span>Please enter your password to continue: </span>
              <input
                type="password"
                placeholder="Enter your Password"
                name="password"
                value={form.password}
                onChange={onChange}
              />
            </div>
          </div>
          <input
            type="submit"
            value="Update Profile"
            className="btn"
            name="update"
          />
        </form>
      </section>
    </>
  );
}


