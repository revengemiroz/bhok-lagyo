import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid green;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  border: 2px solid green;
  width: 80vw;
  height: 80vh;

  .title {
    text-align: center;
    border: 2px solid green;
    font-family: "Poppins";
    font-size: 22px;
    font-weight: 700;
    margin: 0;
  }
`;

export const ImgContainer = styled.div`
  border: 2px solid green;
  height: 500px;
  overflow: hidden;
  margin: 20px 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
