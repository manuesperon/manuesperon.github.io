type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  const hoverStyles = 'hover:bg-aquaGreen hover:text-black';
  return (
    <button
      className={`rounded-3xl border border-aquaGreen py-2 px-4 transition-colors ease-in-out duration-300 ${hoverStyles}`}
    >
      {children}
    </button>
  );
};

export default Button;
