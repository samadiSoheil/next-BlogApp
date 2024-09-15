const btnType = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
};

const Button = ({ children, onClick, variant = "primary", classNameAd, ...res }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType[variant]} ${classNameAd}`}
      {...res}
    >
      {children}
    </button>
  );
};

export default Button;
