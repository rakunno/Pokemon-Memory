import { Container, Label, Value } from "./styles";

interface GameInfoProps {
  label: string;
  value: string;
}

export const GameInfo = ({ label, value }: GameInfoProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Container>
  );
};
