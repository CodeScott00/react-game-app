interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

export const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};
