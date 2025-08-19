"use client";
import { useState } from "react";

export default function Schedule() {
  const [form, setForm] = useState({ name: "", phone: "", time: "", date: "", service1: "Hair", service2: "" });
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const book = async () => {
    const res = await fetch("http://localhost:4000/api/events/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, email: "demo@example.com" }),
    });
    if (!res.ok) alert("Booking failed"); else alert("Booked");
  };

  return (
    <>
      <link rel="stylesheet" href="/css/sched-style.css" />

      <div className="heading" style={{ background: 'url(/images/header-bg-3.png) no-repeat' }}>
        <h1>Make an Appointment</h1>
      </div>

      <h1 className="heading-title">Book now!</h1>
      <section className="book">
        <form className="book-form" onSubmit={(e) => { e.preventDefault(); book(); }}>
          <div className="container">
            <div className="inputBox">
              <span>Name :</span>
              <input type="text" placeholder="enter your name" name="name" value={form.name} onChange={onChange} required />
            </div>
            <div className="inputBox">
              <span>Phone :</span>
              <input type="text" placeholder="enter your number" name="phone" value={form.phone} onChange={onChange} required />
            </div>
            <div className="inputBox">
              <span>Time :</span>
              <input type="time" name="time" min="08:00" max="20:00" value={form.time} onChange={onChange} required />
            </div>
            <div className="inputBox">
              <span>Date :</span>
              <input type="date" name="date" value={form.date} onChange={onChange} required />
            </div>
            <div className="inputBox">
              <span>Service : </span>
              <br />
              <select id="level1" name="service1" className="slc" value={form.service1} onChange={onChange} required>
                <option value="Hair">Hair</option>
                <option value="Nails">Nails</option>
                <option value="Massage">Massage</option>
                <option value="Facial">Facial</option>
                <option value="Bleaching">Bleaching</option>
                <option value="IPL Hair Removal">IPL Hair Removal</option>
                <option value="Warts Removal">Warts Removal</option>
              </select>
              <br />
              <br />
              <input type="text" placeholder="Service details" name="service2" value={form.service2} onChange={onChange} />
            </div>
          </div>
          <button type="submit" className="btn">Book!</button>
        </form>
      </section>
    </>
  );
}


