import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Import Supabase client

const AppointmentForm = () => {
  const [formData, setFormData] = useState({ name: '', date: '', service: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, date, service } = formData;

    // Insert data into Supabase
    const { data, error } = await supabase
      .from('appointments')
      .insert([{ name, date, service }]);

    if (error) {
      console.error('Error:', error);
      alert('Error booking appointment!');
    } else {
      console.log('Appointment booked:', data);
      alert('Appointment booked!');
    }
  };

  return (
    <section id="appointment" className="appointment-section">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <select name="service" value={formData.service} onChange={handleChange}>
          <option value="">Select Service</option>
          <option value="haircut">Haircut</option>
          <option value="facial">Facial</option>
          <option value="massage">Massage</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default AppointmentForm;
