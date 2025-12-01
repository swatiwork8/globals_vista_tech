import React from "react";
import "./About.scss";
import who_we from "../assets/who_we.jpg";
import why_choose from "../assets/why_choose.jpg";
import our_vision from "../assets/our_vision.jpg";

const About = () => {
  return (
    <>
      {/* -------------------- WHO WE ARE -------------------- */}
      <section className="who-section">
        <div className="who-container">
          {/* LEFT IMAGE */}
          <div className="who-left">
            <img src={who_we} alt="Who We Are" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="who-right">
            <h1>Who Are We?</h1>

            <p>
              <strong>Global's Vista Technologies</strong> is dedicated to
              helping businesses grow faster through powerful websites,
              high-performance e-commerce setups, and smart IT solutions. We
              build digital platforms that attract customers, increase sales,
              and strengthen your online presence.
            </p>

            <p>
              From creating modern, responsive websites to developing
              full-fledged e-commerce stores, our team ensures that your
              business is ready to scale confidently in today’s competitive
              digital world. Every solution we provide is built for speed,
              security, and long-term growth.
            </p>

            <p>
              With <strong>Global's Vista Technologies</strong>, your business
              gets the tools, technology, and support needed to stand out,
              succeed, and grow online.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------- WHY CHOOSE US -------------------- */}
      <section className="why-section">
        <div className="why-container">
          {/* LEFT TEXT */}
          <div className="why-left">
            <h1>Why Choose Us?</h1>

            <div className="why-point">
              <h3>End-to-End Digital Growth Solutions</h3>
              <p>
                We don’t just make websites — we build business engines. From
                e-commerce development to IT systems and long-term support,
                everything we do is designed to elevate your online success.
              </p>
            </div>

            <div className="why-point">
              <h3>Solutions Designed for Your Business</h3>
              <p>
                Every business is different — and so is our approach. We
                customize websites, e-commerce platforms, marketing tools, and
                technical setups specifically to your goals, industry, and
                audience.
              </p>
            </div>

            <div className="why-point">
              <h3>Measurable Excellence, Every Step of the Way</h3>
              <p>
                Whether it's a website, an online store, or an IT solution,
                everything we deliver is optimized for performance, security,
                and real business results.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="why-right">
            <img src={why_choose} alt="Why Choose Us" />
          </div>
        </div>
      </section>

      {/* -------------------- OUR VISION -------------------- */}
      <section className="vision-section">
        <div className="vision-container">
          {/* LEFT IMAGE */}
          <div className="vision-left">
            <img src={our_vision} alt="Our Vision" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="vision-right">
            <h1>Our Vision</h1>

            <p>
              At Global's Vista Technologies, Our vision is to empower
              businesses with reliable, modern digital solutions that support
              real and sustainable growth. We believe every business deserves a
              solid online foundation — whether through a high-performance
              website, a scalable e-commerce store, or smart IT systems that
              streamline daily operations. By combining technology, strategy,
              and precision, we help businesses build platforms that attract
              customers, enhance credibility, and stay ahead in an increasingly
              digital marketplace.
            </p>
            <p>
              We aim to be the trusted partner businesses can rely on as they
              grow, evolve, and navigate new challenges. Our focus is on
              long-term success, which is why we design solutions that are
              secure, adaptable, and built to scale with your vision. With
              Global's Vista Technologies handling the complexities behind the
              scenes, our clients can concentrate on expansion, innovation, and
              achieving their highest potential in the digital world.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
