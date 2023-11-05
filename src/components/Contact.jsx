import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function Contact() {
  const customIconSize = { fontSize: 30 };

  return (
    <footer>
      <div className="footer-main" id="contact">
        <div className="footer-contact-details">
          <h3 className="footer-contact-details-name">Get in touch 😎</h3>
          <div className="footer-contact-socials">
            <ul className="footer-social-icons">
              <li>
                <a href="https://github.com/tumelo001/"  target='blank' title='GitHub profile'>
                  <GitHubIcon
                    className="social-icons-icon"
                    style={customIconSize}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/tumelo-ditlou-57051420b" target='blank' title='LinkedIn profile'>
                  <LinkedInIcon
                    className="social-icons-icon"
                    style={customIconSize}
                  />
                </a>
              </li>
              <li>
                <a href="mailto:tumeloditlou7gmail.com" title="Gmail">
                <EmailIcon
                    className="social-icons-icon"
                    style={customIconSize}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="callMe">
            <LocalPhoneIcon
              className="social-icons-icon"
              style={{fontSize:30, marginTop: 40}}
            /> <span style={{marginBottom: 12}}>081 7017 900</span>
          </div>
        </div>
        {/* <div className="footer-contact-form">
          <h3>Contact Me</h3>
            <form method="post">
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email"></input>
                <textarea cols="50" rows="2" maxLength="200" placeholder="Message"></textarea>
                <button type="submit" className="btn-contact-me">Send</button>
            </form>
          </div> */}
      </div>
      <div>
        Copyright &copy; {new Date().getFullYear()}
        <span> - Tumelo Ditlou</span>
      </div>
    </footer>
  );
}
