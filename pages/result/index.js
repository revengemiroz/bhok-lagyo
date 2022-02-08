import React from "react";

import { ImgContainer, Title, SubText } from "../../styles/Result/style";

function Index(props) {
  return (
    <div>
      <Title className="title">Result</Title>

      <ImgContainer>
        <img
          src="https://i.ibb.co/HdDNR1r/20e71c10c4764d35be48e021b544ada3.jpg"
          alt="pic"
        />
      </ImgContainer>

      <SubText>kripaya result ko lagi wait garna hos. Dhanyabad</SubText>
    </div>
  );
}

export default Index;
