import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Title = styled.p`
  font-size: 30px;
  font-family: "Poppins";
  font-weight: 600;
  text-align: center;
`;

export const SubText = styled.p`
  font-size: 20px;
  font-family: "Poppins";
  font-weight: 400;
  text-align: center;
`;

export const ImgContainer = styled.div`
  height: 500px;
  width: fit-content;
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
