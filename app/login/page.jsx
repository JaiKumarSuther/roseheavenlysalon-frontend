"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Login: ${email}`);
  };
  return (
    <>
      <link rel="stylesheet" href="/css/styleLog.css" />

      <div className="heading" style={{ background: 'url(/images/brush-1.png) no-repeat' }}>
        <h1>Sign In</h1>
      </div>

      <section className="signIn">
        <div className="container">
          <h1 className="heading-title">Login</h1>
          <form className="login-email" onSubmit={onSubmit}>
            <div className="input-group">
              <input className="form-control" type="email" name="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-group">
              <input className="form-control" type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="input-group">
              <input className="form-control button" type="submit" value="Login" />
            </div>
            <div className="login-register-text"><Link href="/forgotpass"><br/>Forgot password?</Link></div>
            <div className="login-register-text">Not yet a member? <Link href="/signup">Signup now</Link></div>
          </form>
        </div>
      </section>
    </>
  );
}


