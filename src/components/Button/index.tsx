import { Container, Icon, Label } from "./styles";

interface ButtonProps {
  label: string;
  icon: any;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Button = ({ label, icon, onClick }: ButtonProps) => {
  return (
    <Container onClick={onClick}>
      <Icon src={icon} />
      <Label>{label}</Label>
    </Container>
  );
};
