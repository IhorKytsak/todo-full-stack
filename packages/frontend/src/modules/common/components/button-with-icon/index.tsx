import Button from '@mui/material/Button';

interface ButtonWithIconProps {
  onClickHandler: () => void;
  text: string;
  icon: React.ReactNode;
}

const ButtonWithIcon = ({ onClickHandler, text, icon }: ButtonWithIconProps) => (
  <Button onClick={onClickHandler} variant="outlined" startIcon={icon}>
    {text}
  </Button>
);

export default ButtonWithIcon;
