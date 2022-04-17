import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
  background: #1e90ff;
  padding: 15px 35px;
  border-radius: 25px;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Label = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const Icon = styled.img`
  height: 30px;
`;
