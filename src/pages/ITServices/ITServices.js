import "./ITServices.scss";
import it_services from "../../assets/it_services.jpg";

// import it_support from "../../assets/it_support.jpg";
// import data_backup from "../../assets/data_backup.jpg";
// import cybersecurity from "../../assets/cybersecurity.jpg";
// import monitoring from "../../assets/monitoring.jpg";
// import why_choose from "../../assets/why_choose.jpg";

const ITServices = () => {
  return (
    <div className="it-services-page">

      {/* Section 1 */}
      <section className="it-row">
        <div className="it-content">
          <h1>Comprehensive IT Services </h1>
          <p>
            At <strong>ABC</strong>, we ensure your business runs smoothly with
            complete IT maintenance and dedicated support. We keep your systems
            optimized, secure, and updated to prevent disruptions and downtime.
          </p>
          <p>
            From routine health checks to advanced troubleshooting — we take
            care of everything to keep your business operations flawless.
          </p>
        </div>

        <div className="it-image">
          { <img src={it_services} alt="IT Support" /> }
        </div>
      </section>

      {/* Section 2 */}
      <section className="it-row reverse">
        <div className="it-content">
          <h2>Data Backup & Disaster Recovery</h2>
          <p>
            Protect your business with automated backup and fast disaster
            recovery solutions. Your data stays secure, accessible, and
            recoverable at all times.
          </p>

          <ul>
            <li>Automated daily, weekly & monthly backups</li>
            <li>Cloud & on-premise secure storage</li>
            <li>Quick data restoration in emergencies</li>
            <li>Protection from data corruption or failure</li>
          </ul>
        </div>

        <div className="it-image">
          {/* <img src={data_backup} alt="Data Backup" /> */}
        </div>
      </section>

      {/* Section 3 */}
      <section className="it-row">
        <div className="it-content">
          <h2>Cybersecurity & Threat Protection</h2>
          <p>
            Stay protected from cyber attacks with multi-layered security,
            firewalls, malware protection, and continuous security updates.
          </p>

          <ul>
            <li>Firewall configuration & protection</li>
            <li>Malware, ransomware & virus defense</li>
            <li>Secure Wi-Fi & access control</li>
            <li>Vulnerability scanning & patch updates</li>
            <li>Security audits & compliance</li>
          </ul>
        </div>

        <div className="it-image">
          {/* <img src={cybersecurity} alt="Cybersecurity" /> */}
        </div>
      </section>

      {/* Section 4 */}
      <section className="it-row reverse">
        <div className="it-content">
          <h2>24/7 System Monitoring & Performance</h2>
          <p>
            Our real-time monitoring identifies issues before they impact your
            business. Enjoy stable, secure, and optimized systems 24/7.
          </p>

          <ul>
            <li>Server uptime monitoring</li>
            <li>Network performance tracking</li>
            <li>CPU & RAM health monitoring</li>
            <li>Security alerts & suspicious activity</li>
            <li>Application performance tracking</li>
          </ul>
        </div>

        <div className="it-image">
          {/* <img src={monitoring} alt="IT Monitoring" /> */}
        </div>
      </section>

      {/* Section 5 */}
      <section className="it-row">
        <div className="it-content">
          <h2>Why Choose ABC for IT Services?</h2>
          <ul>
            <li>Super-fast issue resolution</li>
            <li>Proactive monitoring to avoid downtime</li>
            <li>Strong data security & dependable backups</li>
            <li>Advanced cybersecurity solutions</li>
            <li>Customized IT plans for every business</li>
          </ul>
        </div>

        <div className="it-image">
          {/* <img src={why_choose} alt="Why Choose Us" /> */}
        </div>
      </section>

    </div>
  );
};

export default ITServices;
