import Container from "../../container";
import PrimaryTitle from "../../primary-title";
import TeamImage1 from "./images/team-1.jpg";
import TeamImage2 from "./images/team-2.jpg";
import TeamImage3 from "./images/team-3.jpg";
import TeamImage4 from "./images/team-4.jpg";
import Socials from "./socials";
import "./style.scss";

export default function Guide() {
  return (
    <section className="guide" aria-label="Meet Our Guide">
      <Container>
        <PrimaryTitle className="primary-title">TRAVEL GUIDE</PrimaryTitle>
        <h2 className="secondary-title">Meet Our Guide</h2>
        <div className="cards">
          <div className="card">
            <div className="card__image">
              <img src={TeamImage1} alt="" />
            </div>
            <div className="card__body">
              <Socials />
              <p className="first-name">Full Name</p>
              <p className="last-name">Designation</p>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img src={TeamImage2} alt="" />
            </div>
            <div className="card__body">
              <Socials />
              <p className="first-name">Full Name</p>
              <p className="last-name">Designation</p>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img src={TeamImage3} alt="" />
            </div>
            <div className="card__body">
              <Socials />
              <p className="first-name">Full Name</p>
              <p className="last-name">Designation</p>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img src={TeamImage4} alt="" />
            </div>
            <div className="card__body">
              <Socials />
              <p className="first-name">Full Name</p>
              <p className="last-name">Designation</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
