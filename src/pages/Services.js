import React from "react";
import "./Services.scss";
import servicepage from "../assets/servicepage.jpg";
import websitedev from "../assets//websitedev.jpg";
import ecommercestore from "../assets/ecommercestore.jpg";
import itservice from "../assets/itservice.jpg";
import { Link } from "react-router-dom";

export default function ServicePage() {
  return (
    <div className="service-page">
      <div className="hero">
        <div className="image">
          <img src={servicepage} alt="Services" />
        </div>
        <div className="text">
          <h1>Our Services</h1>
          <p>
            We offer a comprehensive range of professional, modern, and scalable
            digital solutions designed to help your business grow, strengthen
            its online presence, and operate more efficiently. Whether you're
            just starting out or looking to expand, our services are crafted to
            deliver measurable results, elevate your brand, and support your
            long-term success.
          </p>
          <p>
            From website development and ecommerce solutions to IT support and
            business growth strategies, we focus on delivering high-quality
            digital experiences that are tailored to your unique needs. With our
            expertise and commitment to innovation, we ensure your business
            stays ahead in a constantly evolving digital world.
          </p>
        </div>
      </div>

      <div className="service-section">
        <Link to="/services/website-development" className="service-card">
          <img src={websitedev} alt="Website Development" />
          <h3>Website Development</h3>
          <p>
            We design and develop fully responsive, fast-loading, and highly
            polished websites that reflect the true identity of your brand.
            Every project is crafted with attention to detail, modern UI/UX
            principles, and smooth functionality to ensure an exceptional
            browsing experience across all devices. Whether you need a business
            site, portfolio, or a custom web platform, we build tailored digital
            solutions that support long-term growth and help your brand stand
            out online.
          </p>{" "}
        </Link>

        <Link to="/services/grow-your-ecommerce" className="service-card">
          <img src={ecommercestore} alt="Ecommerce" />
          <h3>Ecommerce Solutions</h3>
          <p>
            Launch and scale your ecommerce business with our complete online
            store solutions designed to help you grow faster and operate more
            efficiently. From creating a visually appealing storefront to
            implementing secure payment gateways, product management systems,
            and seamless user experiences, we handle everything. Our tailored
            strategies ensure your online business attracts customers, boosts
            conversions, and stays competitive in the digital marketplace while
            giving you the tools and support needed for long-term success.{" "}
          </p>
        </Link>

        <Link to="/services/it-services" className="service-card">
          <img src={itservice} alt="IT Services" />
          <h3>IT Services</h3>
          <p>
            Our IT services provide complete, end-to-end technical support
            designed to help growing companies operate smoothly and efficiently.
            From managing systems and troubleshooting issues to ensuring
            security, updates, and long-term stability, we handle every
            technical requirement with care and expertise. Whether your business
            needs ongoing maintenance, scalable infrastructure, or reliable
            problem-solving, our dedicated IT team ensures seamless performance
            so you can focus on growth without disruptions or technical
            concerns.{" "}
          </p>
        </Link>
      </div>
    </div>
  );
}
