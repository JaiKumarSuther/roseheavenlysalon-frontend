"use client";
import { useState } from "react";

export default function UserOtp() {
  const [otp, setOtp] = useState("");
  const onSubmit = (e) => { e.preventDefault(); alert(`Submitted OTP: ${otp}`); };
  return (
    <>
      <link rel="stylesheet" href="/css/otp-style.css" />

      <section className="signIn">
        <div className="container">
          <form className="login-email OTP" onSubmit={onSubmit}>
            <h2 className="text-center">Code Verification</h2>
            <div className="input-group">
              <input className="form-control" type="number" name="otp" placeholder="Enter verification code" value={otp} onChange={(e) => setOtp(e.target.value)} required />
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


