import "./WebsiteDevelopment.scss";
import website_dev from "../../assets/website_dev.jpg";
import { Link } from "react-router-dom";

const WebsiteDevelopment = () => {
  return (
    <div className="website-dev-page">
      {/* ---------------- Banner Section ---------------- */}
      <section className="banner">
        <div className="banner-content">
          <div className="left">
            <h1>Grow Your Business with Powerful & High-Converting Websites</h1>
            <p>
              At <b>ABC</b>, we build modern, responsive, and performance-driven
              websites that help brands stand out and convert visitors into
              customers. Whether you're a startup, local business, or large
              enterprise — we create digital experiences that accelerate your
              business growth.
            </p>

            <div className="cta-buttons">
              {/* <button>Get a Free Consultation</button> */}
              {/* <button>Explore Our Work</button> */}
            </div>
          </div>

          <div className="right">
            <img src={website_dev} alt="Website Development" />
          </div>
        </div>
      </section>

      {/* ---------------- Why Your Business Needs a Website ---------------- */}
      <section className="why-website">
        <h2>Why Your Business Needs a Website Today</h2>
        <p>
          In today’s digital world, your website acts as your{" "}
          <b>24/7 online showroom</b>. A professionally built website enhances
          your brand reputation, attracts new customers, builds trust, and
          improves sales.
        </p>
        <p>
          With the right development strategy, your business can reach a global
          audience and stay ahead of competitors.
        </p>
      </section>

      {/* ---------------- Services Section ---------------- */}
      <section className="services">
        <h2>Our Website Development Services</h2>

        <ul>
          <li>
            <h3>1. Custom Website Development</h3>
            <p>
              Fully personalized websites crafted from scratch—unique,
              optimized, and built to match your brand identity.
            </p>
          </li>

          <li>
            <h3>2. E-commerce Website Development</h3>
            <p>
              Scalable, secure, and revenue-driven online stores with smooth
              checkout, product management, and user-friendly UI/UX.
            </p>
          </li>

          <li>
            <h3>3. Business & Corporate Websites</h3>
            <p>
              Professional, clean, and conversion-focused designs ideal for
              agencies, companies, and service-based businesses.
            </p>
          </li>

          <li>
            <h3>4. Landing Page Development</h3>
            <p>
              High-converting landing pages for campaigns, product launches, and
              lead generation.
            </p>
          </li>

          <li>
            <h3>5. Portfolio & Personal Branding Websites</h3>
            <p>
              Perfect for creators, freelancers, coaches, photographers, and
              personal brands.
            </p>
          </li>

          <li>
            <h3>6. Website Redesign & Optimization</h3>
            <p>
              Upgrade your old website for a modern look, faster speed, and
              better engagement.
            </p>
          </li>
        </ul>
      </section>

      {/* ---------------- Features Section ---------------- */}
      {/* <section className="features">
        <h2>Features You Get With Every Website</h2>
        <ul>
          <li>Mobile-Responsive Design</li>
          <li>SEO-Friendly Structure</li>
          <li>Fast Loading Speed</li>
          <li>Secure & Optimized Code</li>
          <li>Easy Content Management (CMS)</li>
          <li>Modern UI/UX</li>
          <li>Integrated Forms, Chat, and Call Buttons</li>
          <li>Social Media Integration</li>
          <li>On-Page SEO Setup</li>
        </ul>
      </section> */}

      {/* ---------------- Development Process ---------------- */}
      <section className="process">
        <h2>Our Development Process</h2>

        <div className="process-steps">
          <div>
            <h3>Step 1: Consultation & Planning</h3>
            <p>Understanding your goals, target audience, and design vision.</p>
          </div>

          <div>
            <h3>Step 2: UI/UX Designing</h3>
            <p>
              Creating wireframes & layouts that look stunning and convert well.
            </p>
          </div>

          <div>
            <h3>Step 3: Website Development</h3>
            <p>Coding, CMS setup, speed optimization & integration.</p>
          </div>

          <div>
            <h3>Step 4: Testing & Quality Check</h3>
            <p>
              Bug fixing, device testing, browser compatibility & security
              checks.
            </p>
          </div>

          <div>
            <h3>Step 5: Launch & Support</h3>
            <p>Website goes live with ongoing support & updates.</p>
          </div>
        </div>
      </section>

      {/* ---------------- Pricing Packages ---------------- */}
      <section className="pricing">
        <h2>Pricing Packages</h2>

        <div className="pricing-cards">
          <div className="card">
            <h3>⭐ Basic Website</h3>
            <p className="price">₹7,999 – ₹14,999</p>
            <ul>
              <li>3–5 Pages</li>
              <li>Basic Design</li>
              <li>Contact Form</li>
              <li>Mobile Responsive</li>
            </ul>
          </div>

          <div className="card">
            <h3>🔥 Standard Business Website</h3>
            <p className="price">₹15,000 – ₹34,999</p>
            <ul>
              <li>6–10 Pages</li>
              <li>Professional UI/UX</li>
              <li>Blogs</li>
              <li>Inquiry Forms</li>
              <li>On-Page SEO</li>
            </ul>
          </div>

          <div className="card">
            <h3>🚀 Premium Website</h3>
            <p className="price">₹35,000 – ₹1,50,000+</p>
            <ul>
              <li>Unlimited Pages</li>
              <li>E-commerce Features</li>
              <li>Payment Gateway</li>
              <li>Admin Panel</li>
              <li>Advanced Integrations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- Contact Form ---------------- */}
      {/* <section className="contact-form">
        <h2>Ready to Build Your Website?</h2>
        <p>Fill out the form and our team will connect with you shortly.</p>

        <form>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Business Category" />
          <textarea placeholder="Your Message"></textarea>
          <input type="file" />
          <button type="submit">Get Free Quote</button>
        </form>
      </section> */}

      {/* ---------------- FAQs ---------------- */}
      <section className="faqs">
        <h2>FAQs – Website Development</h2>

        <div className="faq-item">
          <h3>1. How long does it take to build a website?</h3>
          <p>Basic websites take 5–10 days, advanced ones take 20–40 days.</p>
        </div>

        <div className="faq-item">
          <h3>2. Will my website be mobile-friendly?</h3>
          <p>
            Yes, all websites are fully responsive across mobile, tablet, and
            desktop.
          </p>
        </div>

        <div className="faq-item">
          <h3>3. Do you provide hosting & domain?</h3>
          <p>
            We can help you purchase hosting & domain or use your existing
            setup.
          </p>
        </div>

        <div className="faq-item">
          <h3>4. Will I be able to edit the website later?</h3>
          <p>
            Yes! You’ll get full access to your website, admin panel, and
            training if required.
          </p>
        </div>

        <div className="faq-item">
          <h3>5. What after-support do you provide?</h3>
          <p>
            We offer 1–3 months of free support and affordable maintenance
            plans.
          </p>
        </div>
      </section>

      {/* ---------------- Final CTA ---------------- */}
      <section className="final-cta">
        <h2>Ready to Build a Website That Grows Your Business?</h2>
        <div className="cta-buttons">
          <Link to="/contact">
            <button>Contact Us Now</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;
