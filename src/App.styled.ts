import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  max-width: 1200px;
  width: 100%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.img`
  height: 100px;
`;

export const Info = styled.div`
  display: flex;
  gap: 100px;
`;

export const Contains = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
`;
