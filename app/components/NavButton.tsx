interface Props {
  isActive: boolean;
  handleIsActive: (buttonText: string) => void;
  buttonText: string;
  buttonCategory: string;
}

export default function NavButton(props: Props) {
  const { isActive, handleIsActive, buttonText, buttonCategory } = props;

  return (
    <button
      className={
        isActive
          ? "bg-accent text-white rounded-md px-2 py-1"
          : "nav-link px-2 py-1"
      }
      onClick={() => {
        handleIsActive(buttonCategory);
      }}
    >
      {buttonText}
    </button>
  );
}
