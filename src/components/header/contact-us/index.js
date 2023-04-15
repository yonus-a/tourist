import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";


export default function ContactUs() {
  return (
    <div className="header-contact-us">
      <address>
        <p className="phsical-address">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          123 Street, New York, USA
        </p>
        <a href="tel:+012 345 6789">
          <FontAwesomeIcon icon={faPhoneAlt} />
          +012 345 6789
        </a>
        <a href="mailto:info@example.com">
          <FontAwesomeIcon icon={faEnvelopeOpen} />
          info@example.com
        </a>
      </address>
      <div className="socials">
        <a>
            
        </a>
      </div>
    </div>
  );
}
