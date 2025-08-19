"use client";
import { useState } from "react";
import Link from "next/link";

export default function ForgotPass() {
  const [email, setEmail] = useState("");
  const onSubmit = (e) => { e.preventDefault(); alert(`Reset link sent to ${email} (demo)`); };
  return (
    <>
      <link rel="stylesheet" href="/css/styleLog.css" />

      <div className="heading" style={{ background: 'url(/images/brush-1.png) no-repeat' }}>
        <h1>Forgot Password</h1>
      </div>

      <section className="signIn">
        <div className="container">
          <h1 className="heading-title">Forgot Password</h1>
          <form className="login-email" onSubmit={onSubmit}>
            <div className="input-group">
              <input className="form-control" type="email" name="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-group">
              <input className="form-control button" type="submit" value="Continue" />
            </div>
            <div className="login-register-text"><Link href="/login">Back to Login</Link></div>
          </form>
        </div>
      </section>
    </>
  );
}


