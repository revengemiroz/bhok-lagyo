import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid green;
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Title = styled.p`
  font-size: 30px;
  font-family: "Poppins";
  font-weight: 400;
  border: 2px solid green;
  text-align: center;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 500px;
  margin: 20px 0;
  border: 2px solid green;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
