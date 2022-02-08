import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  width: 80vw;
  height: 80vh;

  .title {
    text-align: center;
    font-family: "Poppins";
    font-size: 32px;
    font-weight: 600;
    margin: 0;
  }
`;

export const ImgContainer = styled.div`
  height: 500px;
  width: fit-content;
  overflow: hidden;
  margin: 20px auto;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
