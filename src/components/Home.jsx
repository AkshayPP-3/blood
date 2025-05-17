import React from 'react';

function Home() {
  return (
    <section className="home">
      <h1>Donate Life <span className="highlight">in Real Time</span></h1>
      <p>Connect instantly with local hospitals and in-need individuals. Every drop counts.</p>
      <div className="home-buttons">
        <button className="primary">Find Donors</button>
        <button className="secondary">Post Request</button>
      </div>
    </section>
  );
}

export default Home;