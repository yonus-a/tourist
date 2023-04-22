import "./style.scss";

export default function Socials() {
  return (
    <div className="socials">
      <ul>
        <li>
          <a href="#">
            <svg>
              <title>Twitter</title>
              <use href="#twitter" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg>
              <title>Facebook</title>
              <use href="#facebook" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg>
              <title>Linkedin</title>
              <use href="#linkedin" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg>
              <title>Instagram</title>
              <use href="#instagram" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg>
              <title>Youtube</title>
              <use href="#youtube" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}
