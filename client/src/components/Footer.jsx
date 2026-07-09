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
            Connecting students and alumni through networking,
            mentorship and career opportunities.
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

          <a
            href="tel:+919493817813"
            className="contact-link"
          >
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

  padding:15px 5% 8px;

  margin-top:25px;

  position:relative;

  overflow:hidden;

}



.footer::before {

  content:"";

  position:absolute;

  width:120px;

  height:120px;

  background:#3b82f6;

  opacity:.08;

  filter:blur(50px);

  top:-30px;

  right:-30px;

}



.footer-container {

  display:grid;

  grid-template-columns:
  1.4fr 1fr 1fr 1fr;

  gap:18px;

  position:relative;

  z-index:1;

}



/* Brand */

.footer-section h2 {

  font-size:16px;

  margin:0 0 5px;

}



.footer-section h2 span {

  color:#60a5fa;

}



.footer-section h3 {

  font-size:12px;

  margin-bottom:7px;

  color:#93c5fd;

}



.footer-section p {

  color:#cbd5e1;

  line-height:1.3;

  font-size:11px;

  display:flex;

  align-items:center;

  gap:5px;

  margin:3px 0;

}



.brand p {

  max-width:200px;

}



/* Links */

.footer-section a {

  display:flex;

  align-items:center;

  gap:5px;

  color:#cbd5e1;

  text-decoration:none;

  font-size:11px;

  margin-bottom:4px;

  transition:.3s;

}



.footer-section a:hover {

  color:#60a5fa;

  transform:translateX(3px);

}



.contact-link {

  margin-top:4px;

}



/* Social Icons */

.socials {

  display:flex;

  gap:8px;

  margin-top:8px;

}



.socials a {

  width:25px;

  height:25px;

  border-radius:50%;

  display:flex;

  justify-content:center;

  align-items:center;

  background:rgba(255,255,255,.1);

  font-size:12px;

}



.socials a:hover {

  background:#2563eb;

  color:white;

}



/* Bottom */

.footer-bottom {

  margin-top:10px;

  text-align:center;

}



.footer-bottom hr {

  border:none;

  height:1px;

  background:#334155;

  margin-bottom:6px;

}



.footer-bottom p {

  font-size:10px;

  color:#94a3b8;

  margin:0;

}



/* Responsive */

@media(max-width:800px){

  .footer-container{

    grid-template-columns:repeat(2,1fr);

  }

}



@media(max-width:500px){

  .footer-container{

    grid-template-columns:1fr;

  }

}



`}</style>


    </footer>
  );
}

export default Footer;