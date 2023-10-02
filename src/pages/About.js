import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/myfoto.jpeg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Sushanth Sharma</span>
              </p>
              <h2 className="about__heading">A Web3 developer</h2>
              <div className="about__info">
                <PText>
                  I am from Bengaluru, Karnataka. Banglore is the silicon valley
                  of india and it is known for its tech infra. Since my
                  childhood , i have been interested in innovation and problem
                  solving. I always try to design stuff with my unique point of
                  view. I also love to create things that can be usefull to
                  others.
                  <br /> <br />
                  I started coding since I was in 9th standard. Ever since , i
                  have been obsessed by logic building and problem solving by
                  using te tech tools. I enjoy coding because it is like magic
                  fr me when we are able to create solutions and services as per
                  our requirements , to address a certain need.
                  <br />
                  <br />
                  My vision is to make the world a better place by solving
                  significant problems at scale and make the lives of everyday
                  regular users of software better. Now almost everything is
                  becoming better than ever. It is time for us to create more
                  good stuff that helps the world to become a better place.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="111" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Baldwin Co Education Extension High School']}
              />
              <AboutInfoItem
                title="College"
                items={['RV PU College , Banglore']}
              />
              <AboutInfoItem
                title="College"
                items={['Indian Institute of Technology , Dhanbad']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'PHP']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2023 to 2026"
                items={['Web 3 developer at CyberLabs IITISMr']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
