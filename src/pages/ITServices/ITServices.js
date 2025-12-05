import "./ITServices.scss";
import it_services from "../../assets/it_services.jpg";
import application_installation from "../../assets/application_installation.jpg";
import software_configuration from "../../assets/software_configuration.jpg";
import email_account from "../../assets/email_account.jpg";
import system_update from "../../assets/system_update.jpg";
import device_setup from "../../assets/device_setup.jpg";
import whychoose from "../../assets/whychoose.jpg";

const ITServices = () => {
  return (
    <div className="it-services-page">
      {/* Section 1 */}
      <section className="it-row">
        <div className="it-content">
          <h1>Comprehensive IT Services </h1>
          <p>
            At <strong>Global's Vista Technologies</strong>, we ensure your
            business runs smoothly with complete IT maintenance and dedicated
            support. We keep your systems optimized, secure, and updated to
            prevent disruptions and downtime.
          </p>
          <p>
            From routine health checks to advanced troubleshooting — we take
            care of everything to keep your business operations flawless.
          </p>
        </div>

        <div className="it-image">
          {<img src={it_services} alt="IT Support" />}
        </div>
      </section>

      {/* Section 2 */}
      <section className="it-row reverse">
        <div className="it-content">
          <h2>Software Configuration</h2>
          <p>
            Ensure your business applications run smoothly with precise setup,
            customization, and optimization. We configure every software tool to
            match your workflow, boost productivity, and eliminate errors.
          </p>

          <ul>
            <li>Installation & setup of essential business software</li>
            <li>User account creation & access configuration</li>
            <li>Custom settings based on your business needs</li>
            <li>Performance tuning for fast, smooth operation</li>
          </ul>
        </div>

        <div className="it-image">
          <img src={software_configuration} alt="software_configuration" />
        </div>
      </section>

      {/* Section 3 */}
      <section className="it-row">
        <div className="it-content">
          <h2>Application Installation Support</h2>
          <p>
            Ensure smooth, error-free installation of all essential business
            applications. From setup to configuration — we handle everything so
            your software runs perfectly from day one.
          </p>

          <ul>
            <li>
              Installation of business, productivity & enterprise applications
            </li>
            <li>User account setup & permission control</li>
            <li>Updates, patches & version upgrades</li>
            <li>Proper configuration for optimal performance</li>
          </ul>
        </div>

        <div className="it-image">
          <img src={application_installation} alt="application_installation" />
        </div>
      </section>

      {/* Section 4 */}
      <section className="it-row reverse">
        <div className="it-content">
          <h2>Email Account Configuration</h2>
          <p>
            Set up professional business emails with full security, syncing, and
            seamless access across all your devices. We ensure every mailbox is
            properly configured, secure, and optimized for smooth communication.
          </p>

          <ul>
            <li>Professional email setup for all employees</li>
            <li>Auto-sync across mobile, desktop & webmail</li>
            <li>Email backup & recovery support</li>
            <li>SPassword and account management assistance</li>
          </ul>
        </div>

        <div className="it-image">
          <img src={email_account} alt="email_account" />
        </div>
      </section>

      {/* Section 5 */}
      <section className="it-row">
        <div className="it-content">
          <h2>System Update & Maintenance</h2>
          <p>
            Keep your systems running smoothly with regular updates, timely
            maintenance, and performance optimization. We ensure every device,
            server, and application is up-to-date, secure, and working at peak
            efficiency — so your business stays uninterrupted and fully
            protected.
          </p>

          <ul>
            <li>Automatic system & software updates</li>
            <li>Security patches & bug fixes</li>
            <li>Smooth, fast & reliable system performance</li>
            <li>Removal of outdated or harmful files</li>
          </ul>
        </div>

        <div className="it-image">
          <img src={system_update} alt="Cybersecurity" />
        </div>
      </section>

      {/* Section 6 */}
      <section className="it-row reverse">
        <div className="it-content">
          <h2>Device Setup & Initialization</h2>
          <p>
            Ensure that every device in your organization is configured,
            optimized, and ready to work from day one. We handle complete setup,
            installation, and configuration to give your team a smooth and
            efficient start—without technical delays or complexities.{" "}
          </p>

          <ul>
            <li>Complete installation of desktops, laptops & office devices</li>
            <li>User accounts, permissions & security setup</li>
            <li>Installation of essential software & tools</li>
            <li>Optimization for speed, performance & security</li>
          </ul>
        </div>

        <div className="it-image">
          <img src={device_setup} alt="device_setup" />
        </div>
      </section>

      {/* Section 7 */}
      <section className="it-row">
        <div className="it-content">
          <h2>Why Choose Global's Vista Technologies for IT Services?</h2>
          <ul>
            <li>Super-fast issue resolution</li>
            <li>Proactive monitoring to avoid downtime</li>
            <li>Strong data security & dependable backups</li>
            <li>Advanced cybersecurity solutions</li>
            <li>Customized IT plans for every business</li>
          </ul>
        </div>

        <div className="it-image">
          <img src={whychoose} alt="Why Choose Us" />
        </div>
      </section>
    </div>
  );
};

export default ITServices;
