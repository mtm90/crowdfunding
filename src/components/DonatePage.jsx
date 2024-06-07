import React, { useState, useEffect } from "react";

const DonatePage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState("");
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);

  const SERVER_URL = "https://server-ei7t.onrender.com";

  const fetchDonations = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/api/donations`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const sortedDonations = data.sort((a, b) => b.amount - a.amount);
      setDonations(sortedDonations);
      const totalDonations = sortedDonations.reduce(
        (acc, donation) => acc + donation.amount,
        0
      );
      setTotal(totalDonations);
    } catch (error) {
      console.error("Failed to fetch donations:", error);
    }
  };

  const handleDonate = async () => {
    if (amount > 0) {
      try {
        const response = await fetch(`${SERVER_URL}/api/donate`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            surname,
            email,
            amount: parseFloat(amount),
          }),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // Add new donation to the beginning of the donations array
        setDonations([data, ...donations]);
        setTotal(total + parseFloat(amount));
        setMessage(`Thank you for your donation of $${amount}!`);
        setName("");
        setSurname("");
        setEmail("");
        setAmount("");
      } catch (error) {
        console.error("Failed to submit donation:", error);
      }
    } else {
      setMessage("Please enter a valid donation amount.");
    }
  };

  return (
    <main className="donate-page">
      <section className="intro">
        <h1>Support Our Garden</h1>
        <p>
          Your donations help us create a beautiful, sustainable space for
          everyone to enjoy. Every contribution, big or small, makes a
          difference.
        </p>
      </section>

      <section className="donation-form">
        <div className="donation-input">
          <h2>Make a Donation</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name (optional)"
          />
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Enter surname (optional)"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email (optional)"
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
          <button className="donate-button" onClick={handleDonate}>
            Donate Now
          </button>
          {message && <p className="message">{message}</p>}
        </div>
        <div className="total-donations">
          <h2>Total Donations: ${total.toFixed(2)}</h2>
        </div>

        <div className="donations-list">
          <h2>Recent Donations</h2>
          <ul>
            {donations.map((donation, index) => (
              <li key={index}>
                {donation.name
                  ? `${donation.name} ${donation.surname}: $${donation.amount}`
                  : `Anonymous: $${donation.amount}`}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="why-donate">
        <h2>Why Donate?</h2>
        <ul>
          <li>
            <strong>Community Impact:</strong> Your support helps create a
            vibrant space for community gatherings and events.
          </li>
          <li>
            <strong>Sustainable Practices:</strong> We use eco-friendly methods
            and native plants to ensure a lasting positive impact on the
            environment.
          </li>
          <li>
            <strong>Educational Opportunities:</strong> Your donations fund
            workshops and educational programs for all ages.
          </li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about donations, please{" "}
          <a href="mailto:info@bloomingtogether.com">contact us</a>.
        </p>
      </section>
    </main>
  );
};

export default DonatePage;
