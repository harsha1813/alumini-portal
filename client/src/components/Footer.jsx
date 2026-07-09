import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaArrowRight
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section brand">

          <h2>
            🎓 <span>Alumni Portal</span>
          </h2>

          <p>
            Connecting students and alumni through
            networking, mentorship and career opportunities.
          </p>

          <div className="socials">

            <a
              href="https://www.linkedin.com/in/harsha-bheemanathi-4a936a259/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/harsha1813"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

          </div>

        </div>


        {/* Quick Links */}
        <div className="footer-section">

          <h3>Quick Links</h3>

          <Link to="/">
            Home <FaArrowRight />
          </Link>

          <Link to="/jobs">
            Jobs <FaArrowRight />
          </Link>

          <Link to="/directory">
            Directory <FaArrowRight />
          </Link>

          <Link to="/profile">
            Profile <FaArrowRight />
          </Link>

        </div>


        {/* Resources */}
        <div className="footer-section">

          <h3>Resources</h3>

          <p>About Us</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>

        </div>


        {/* Contact */}
        <div className="footer-section">

          <h3>Contact Us</h3>

          <p>
            <FaEnvelope />
            support@alumniportal.com
          </p>

          <a href="tel:+919493817813" className="contact-link">
  <FaPhone />
  +91 9493817813
</a>

        </div>

      </div>


      <div className="footer-bottom">

        <hr />

        <p>
          © 2026 Alumni Portal | Built with ❤️ by Harshabheemanathi
        </p>

      </div>



      <style>{`

        .footer {

          background:
          linear-gradient(
            135deg,
            #0f172a,
            #111827,
            #1e293b
          );

          color:white;

          padding:35px 8% 18px;

          margin-top:50px;

          position:relative;

          overflow:hidden;

        }
          .contact-link {
  color: #cbd5e1;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  margin: 10px 0;
  transition: .3s;
}

.contact-link:hover {
  color: #60a5fa;
  transform: translateX(5px);
}



        .footer::before {

          content:"";

          position:absolute;

          width:220px;

          height:220px;

          background:#3b82f6;

          opacity:.12;

          filter:blur(70px);

          top:-60px;

          right:-60px;

        }



        .footer-container {

          display:grid;

          grid-template-columns:
          repeat(auto-fit,minmax(200px,1fr));

          gap:30px;

          position:relative;

          z-index:1;

        }



        .footer-section h2 {

          font-size:24px;

          margin-bottom:12px;

        }



        .footer-section h2 span {

          color:#60a5fa;

        }



        .footer-section h3 {

          font-size:17px;

          margin-bottom:15px;

          color:#93c5fd;

        }



        .footer-section p {

          color:#cbd5e1;

          line-height:1.5;

          font-size:14px;

          display:flex;

          gap:8px;

          align-items:center;

          margin:10px 0;

        }



        .brand p {

          max-width:260px;

        }



        .footer-section a {

          display:flex;

          align-items:center;

          gap:8px;

          color:#cbd5e1;

          text-decoration:none;

          margin-bottom:10px;

          font-size:14px;

          transition:.3s;

        }



        .footer-section a:hover {

          color:#60a5fa;

          transform:translateX(5px);

        }



        .socials {

          display:flex;

          gap:12px;

          margin-top:18px;

        }



        .socials a {

          width:35px;

          height:35px;

          border-radius:50%;

          display:flex;

          justify-content:center;

          align-items:center;

          background:
          rgba(255,255,255,.1);

          font-size:17px;

          transition:.3s;

        }



        .socials a:hover {

          background:#3b82f6;

          color:white;

          transform:translateY(-4px);

        }



        .footer-bottom {

          margin-top:25px;

          text-align:center;

        }



        .footer-bottom hr {

          border:none;

          height:1px;

          background:#334155;

          margin-bottom:15px;

        }



        .footer-bottom p {

          font-size:13px;

          color:#94a3b8;

        }



        @media(max-width:600px) {

          .footer {

            padding:30px 5% 15px;

          }


          .footer-container {

            gap:25px;

          }


          .footer-section h2 {

            font-size:22px;

          }

        }


      `}</style>


    </footer>
  );
}

export default Footer;