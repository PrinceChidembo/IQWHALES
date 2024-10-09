import React from "react";
import styled from "styled-components";
import gadzaImage from "../../assets/images/gadza.png";
import princoImage from "../../assets/images/princo.png";
import chatslawImage from "../../assets/images/chatslaw.png";
import ngqabutoImage from "../../assets/images/ngqabuto.png";

const TeamContainer = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  margin: 0;
  font-family: "Merriweather", serif;

  h1 {
    width: 100%;
    text-align: center;
    font-size: 48px;
    color: #404245;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  .person {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 280px;

    .container {
      border-radius: 50%;
      height: 312px;
      position: relative;
      transform: scale(0.48);
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
      width: 400px;

      &:hover {
        transform: scale(0.54);
      }

      &::after {
        background-color: #f2f2f2;
        content: "";
        height: 10px;
        position: absolute;
        top: 390px;
        width: 100%;
      }

      .container-inner {
        clip-path: path(
          "M 390,400 C 390,504.9341 304.9341,590 200,590 95.065898,590 10,504.9341 10,400 V 10 H 200 390 Z"
        );
        position: relative;
        transform-origin: 50%;
        top: -200px;

        .circle {
          background-color: #fee7d3;
          border-radius: 50%;
          cursor: pointer;
          height: 380px;
          left: 10px;
          pointer-events: none;
          position: absolute;
          top: 210px;
          width: 380px;
        }

        .img {
          pointer-events: none;
          position: relative;
          transform: translateY(20px) scale(1.15);
          transform-origin: 50% bottom;
          transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);

          &:hover {
            transform: translateY(0) scale(1.2);
          }
        }

        .img1 {
          left: 22px;
          top: 164px;
          width: 340px;
        }
        .img2 {
          left: -46px;
          top: 174px;
          width: 444px;
        }
        .img3 {
          left: -16px;
          top: 144px;
          width: 466px;
        }
        .img4 {
          left: -26px;
          top: 154px;
          width: 460px;
        }
      }
    }

    .divider {
      background-color: #ca6060;
      height: 1px;
      width: 160px;
    }

    .name {
      color: #404245;
      font-size: 36px;
      font-weight: 600;
      margin-top: 16px;
      text-align: center;
    }

    .title {
      color: #6e6e6e;
      font-family: Arial, sans-serif;
      font-size: 14px;
      font-style: italic;
      margin-top: 4px;
    }
  }
`;

const TeamMembers = () => {
  return (
    <TeamContainer>
      <h1>Our Team</h1>
      {[
        {
          name: "Loius Gadza",
          title: "Bachelor of Honours in Engineering (Bialystok University)",
          imgClass: "img1",
          imgSrc: gadzaImage,
        },
        {
          name: "Prince Chidembo ",
          title:
            "Bachelor of Honours in Atuarial Science (National University of Science and Technology)",
          imgClass: "img2",
          imgSrc: princoImage,
        },
        {
          name: "Lawarence Chatindiara",
          title:
            "Bachelor of Honours in Atuarial Science (University of Zimbabwe)",
          imgClass: "img3",
          imgSrc: chatslawImage,
        },
        {
          name: "Ngqabuto Sibanda",
          title:
            "Bachelor of Honours in Atuarial Science (National University of Science and Technology)",
          imgClass: "img4",
          imgSrc: ngqabutoImage,
        },
      ].map((member, index) => (
        <div className="person" key={index}>
          <div className="container">
            <div className="container-inner">
              <img className="circle" src="" alt="" />
              <img
                className={`img ${member.imgClass}`}
                src={member.imgSrc}
                alt={member.name}
              />
            </div>
          </div>
          <div className="divider"></div>
          <div className="name">{member.name}</div>
          <div className="title">{member.title}</div>
        </div>
      ))}
    </TeamContainer>
  );
};

export default TeamMembers;
