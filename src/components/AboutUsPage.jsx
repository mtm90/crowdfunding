import React from "react";

const AboutUsPage = () => (
  <main className="about-us-page">
    <section className="intro">
      <h1>About Us</h1>
      <p>
        Welcome to "Blooming Together" a passionate community initiative
        dedicated to transforming our neighborhood public gardens into vibrant,
        sustainable spaces for everyone to enjoy. Our project is driven by a
        diverse group of volunteers, donors, and local businesses, all united by
        a common goal: to rejuvenate our community through the power of nature.
      </p>
    </section>

    <section className="team">
      <h2>Meet the Team</h2>
      <div className="team-member">
        <div>
          <img src="/images/sarah.webp" alt="Sarah - Horticulturist" />
          <h3>Sarah Thompson</h3>
        </div>
        <p>
          Sarah is a horticulturist with over 10 years of experience. She leads
          our plant selection process, ensuring we use sustainable and native
          species to create a thriving garden.
        </p>
      </div>
      <div className="team-member">
        <div>
          <img src="/images/john.webp" alt="John - Teacher" />
          <h3>John Miller</h3>
        </div>
        <p>
          John is a local high school teacher who brings his students to help
          every weekend. His enthusiasm and dedication inspire the younger
          generation to get involved in our community efforts.
        </p>
      </div>
      <div className="team-member">
        <div>
          <img src="/images/maria.webp" alt="Maria - Organizer" />
          <h3>Maria Garcia</h3>
        </div>
        <p>
          Maria has been instrumental in organizing our fundraising events. Her
          creativity and organizational skills ensure that our events are
          successful and enjoyable for all participants.
        </p>
      </div>
    </section>

    <section className="mission">
      <h2>Our Mission</h2>
      <p>
        At "Blooming Together" our mission is to create a beautiful, welcoming
        garden that serves as a hub for community interaction and environmental
        education. We believe in the power of green spaces to bring people
        together, foster well-being, and support local biodiversity.
      </p>
    </section>

    <section className="values">
      <h2>Our Values</h2>
      <ul>
        <li>
          <strong>Community:</strong> We value the power of community and work
          collaboratively to achieve our goals.
        </li>
        <li>
          <strong>Sustainability:</strong> We prioritize eco-friendly practices
          to create a garden that supports local wildlife and reduces our
          environmental footprint.
        </li>
        <li>
          <strong>Education:</strong> We engage the community, especially the
          younger generation, in learning about gardening, sustainability, and
          the environment.
        </li>
        <li>
          <strong>Inclusivity:</strong> We strive to create a space that is
          accessible and welcoming to all members of our community.
        </li>
      </ul>
    </section>

    <section className="join-us">
      <h2>Join Us</h2>
      <p>
        Whether you're an experienced gardener or just someone who loves nature,
        we welcome you to join us in our mission. There are many ways to get
        involved, from volunteering and attending events to making a donation.
        Together, we can create a garden that reflects the beauty and diversity
        of our community.
      </p>
      <p>
        <strong>Contact us:</strong>{" "}
        <a href="mailto:info@bloomingtogether.com">info@bloomingtogether.com</a>
      </p>
    </section>
  </main>
);

export default AboutUsPage;
