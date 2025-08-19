"use client";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ firstname: "", lastname: "", username: "", email: "", address: "", phone: "", password: "", cpassword: "" });
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e) => { e.preventDefault(); alert(`Signup: ${form.email}`); };
  return (
    <>
      <link rel="stylesheet" href="/css/styleLog.css" />

      <div className="heading" style={{ background: 'url(/images/brush-1.png) no-repeat' }}>
        <h1>Sign Up</h1>
      </div>

      <section className="signIn">
        <div className="container">
          <h1 className="heading-title">Register</h1>
          <form className="login-email" onSubmit={onSubmit}>
            <div className="input-group">
              <input className="form-control" type="text" name="firstname" placeholder="First Name" value={form.firstname} onChange={onChange} required />
            </div>
            <div className="input-group">
              <input className="form-control" type="text" name="lastname" placeholder="Last Name" value={form.lastname} onChange={onChange} required />
            </div>
            <div className="input-group">
              <input className="form-control" type="text" name="username" placeholder="UserName" value={form.username} onChange={onChange} required />
            </div>
            <div className="input-group">
              <input className="form-control" type="email" name="email" placeholder="Email Address" value={form.email} onChange={onChange} required />
            </div>
            <div className="input-group">
              <input className="form-control" type="text" name="address" placeholder="Home Address" value={form.address} onChange={onChange} required />
            </div>
            <div className="input-group">
              <input className="form-control" type="number" name="phone" placeholder="Contact Number" value={form.phone} onChange={onChange} required />
            </div>
            <div className="input-group">
              <input className="form-control" type="password" name="password" placeholder="Password" value={form.password} onChange={onChange} required />
            </div>
            <div className="input-group">
              <input className="form-control" type="password" name="cpassword" placeholder="Confirm password" value={form.cpassword} onChange={onChange} required />
            </div>
            <div className="input-group">
              <input className="form-control button" type="submit" value="Signup" />
            </div>
            <p className="login-register-text">Already a member? <Link href="/login">Login here</Link></p>
          </form>
        </div>
      </section>
    </>
  );
}


