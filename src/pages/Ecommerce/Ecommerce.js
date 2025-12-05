import "./Ecommerce.scss";
import ecommerce_img from "../../assets/growth_business.jpg";

const Ecommerce = () => {
  return (
    <div className="ecommerce-page">
      {/* ===================== Intro Section (Text Left - Image Right) ===================== */}
      <div className="intro-section">
        <div className="left">
          <h1>Grow Your Online Business With Ease</h1>
          <p>
            Running an online store requires expertise, consistency, and the
            right strategy. At <strong>Global's Vista Technologies</strong>, we
            help businesses build profitable e-commerce brands by managing
            everything — from product listing to advertising, from catalog
            optimization to account growth.
          </p>
          <p>
            Whether you sell on{" "}
            <strong>Amazon, Flipkart, Meesho, Shopify, Myntra, Ajio</strong> or
            any other platform, we ensure your store looks professional, ranks
            better, and generates more sales.
          </p>
        </div>

        <div className="right">
          <img src={ecommerce_img} alt="Ecommerce Services" />
        </div>
      </div>

      {/* ===================== Header Section ===================== */}
      <div className="header">
        <h1>Grow Your Ecommerce With Us</h1>
        <p>
          We help sellers build profitable e-commerce brands with complete
          management including product listing, cataloging, ads, account growth,
          strategy, and marketplace optimization.
        </p>
      </div>

      {/* ===================== Service Sections ===================== */}
      <div className="services">
        {/* -------- Product Listing & Cataloging -------- */}
        <div className="service-box">
          <h2>Product Listing & Cataloging</h2>
          <p>
            Your product listings are the face of your brand. We create
            high-quality, optimized listings that convert visitors into buyers.
          </p>
          <ul>
            <li>SEO-optimized product titles</li>
            <li>Keyword-rich descriptions & bullet points</li>
            <li>Competitor-based pricing suggestions</li>
            <li>Variants (size, color, packs) setup</li>
            <li>A+ content & image uploads</li>
            <li>Error-free catalog uploads</li>
          </ul>
        </div>

        {/* -------- Account Management -------- */}
        <div className="service-box">
          <h2>Account Management</h2>
          <p>
            We take full control of your e-commerce accounts so you can focus on
            running your business.
          </p>
          <ul>
            <li>Daily account monitoring</li>
            <li>Inventory & stock management</li>
            <li>Order processing & returns</li>
            <li>Claims, tickets & policy compliance</li>
            <li>Listing health & dashboard maintenance</li>
          </ul>
        </div>

        {/* -------- Growth & Strategy -------- */}
        <div className="service-box">
          <h2>E-Commerce Growth & Strategy</h2>
          <p>We help your store scale consistently with planned strategies.</p>
          <ul>
            <li>Competitor analysis & research</li>
            <li>Sales forecasting & planning</li>
            <li>Brand authority building</li>
            <li>SEO & ranking improvement</li>
            <li>Smart discounting strategy</li>
          </ul>
        </div>

        {/* -------- Advertising -------- */}
        <div className="service-box">
          <h2>Advertising & Marketing</h2>
          <p>
            We run powerful campaigns on Amazon Ads, Flipkart Ads, Meta Ads &
            more.
          </p>
          <ul>
            <li>Sponsored Product & Brand Ads</li>
            <li>PPC optimization & bid management</li>
            <li>A/B testing for creatives</li>
            <li>Daily performance tracking</li>
            <li>Reduce ACOS & boost conversions</li>
          </ul>
        </div>

        {/* -------- Brand Store Website -------- */}
        <div className="service-box">
          <h2>Brand Store Website</h2>
          <p>We build fast & modern online stores on Shopify.</p>
          <ul>
            <li>Shopify store development</li>
            <li>Mobile-responsive design</li>
            {/* <li>Payment gateway setup</li> */}
            <li>Product uploads & branding</li>
            <li>Conversion optimization</li>
          </ul>
        </div>

        {/* -------- Creative Services -------- */}
        <div className="service-box">
          <h2>Image Editing & Creative Services</h2>
          <p>High-quality visuals that boost conversions.</p>
          <ul>
            {/* <li>Photoshoot support</li> */}
            <li>Product editing & cleanup</li>
            <li>Infographics & lifestyle images</li>
            <li>A+ content & brand pages</li>
          </ul>
        </div>

        {/* -------- Brand Protection -------- */}
        <div className="service-box">
          <h2>Brand Protection & Compliance</h2>
          <p>We keep your seller account safe & compliant.</p>
          <ul>
            <li>Policy violation prevention</li>
            <li>Blocked/suppressed listing recovery</li>
            <li>GS1 barcode & trademark guidance</li>
          </ul>
        </div>
      </div>

      {/* ===================== Why Choose Us ===================== */}
      <div className="why-us">
        <h2>Why Choose Global's Vista Technologies?</h2>
        <ol>
          <li>End-to-end account management</li>
          <li>Proven sales growth strategies</li>
          <li>Expert team with marketplace experience</li>
          <li>Transparent reporting & updates</li>
          <li>Affordable packages for all business sizes</li>
        </ol>
      </div>
    </div>
  );
};

export default Ecommerce;
