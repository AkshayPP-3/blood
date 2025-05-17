import React from 'react';

function DonateForm() {
  return (
    <section className="donate-form">
      <h2>Find Donation Opportunities</h2>
      <form>
        <label>City</label>
        <input type="text" placeholder="e.g. Bengaluru" />

        <label>Blood Group</label>
        <select>
          <option value="">Select</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default DonateForm;