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
  height: auto; // Changed from 100vh to auto for better responsiveness
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
      border-radius: 50%; // Ensure it's circular
      height: 312px;
      width: 400px;
      overflow: hidden; // Ensure child elements stay within the circle
      position: relative;
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        transform: scale(0.54);
      }

      .img {
        width: 100%; // Full width
        height: 100%; // Full height
        object-fit: cover; // Maintain aspect ratio while covering the container
        position: absolute;
        top: 50%; // Center the image vertically
        left: 50%; // Center the image horizontally
        transform: translate(-50%, -50%); // Center the image
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

  @media (max-width: 768px) {
    .person {
      .container {
        height: 200px; // Smaller height for mobile
        width: 200px; // Smaller width for mobile
      }

      .name {
        font-size: 24px; // Smaller name font size for mobile
      }

      .title {
        font-size: 12px; // Smaller title font size for mobile
      }
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
          imgSrc: gadzaImage,
        },
        {
          name: "Prince Chidembo",
          title:
            "Bachelor of Honours in Atuarial Science (National University of Science and Technology)",
          imgSrc: princoImage,
        },
        {
          name: "Lawarence Chatindiara",
          title:
            "Bachelor of Honours in Atuarial Science (University of Zimbabwe)",
          imgSrc: chatslawImage,
        },
        {
          name: "Ngqabuto Sibanda",
          title:
            "Bachelor of Honours in Atuarial Science (National University of Science and Technology)",
          imgSrc: ngqabutoImage,
        },
      ].map((member, index) => (
        <div className="person" key={index}>
          <div className="container">
            <img className="img" src={member.imgSrc} alt={member.name} />
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
