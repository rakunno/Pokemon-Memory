import styled from "styled-components";

interface ContainerProps {
  showBackground: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) =>
    props.showBackground ? "#76befe" : "#fc6c6d"};
  background-blend-mode: soft-light;
  padding: 15px;
  display: flex;
  justify-content: center;
  height: 200px;
  width: 200px;
  border-radius: 20%;
`;

interface CardProps {
  sownCard?: boolean;
}
export const Card = styled.img<CardProps>`
  opacity: ${(props) => (props.sownCard ? 0.5 : 1)}; ;
  cursor: pointer;
`;
