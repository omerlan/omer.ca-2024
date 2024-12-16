import React from "react";

interface Button {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  label?: string;
  classes?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary"; // Define the possible variants
}

function Button({ type, label, classes, variant, onClick }: Button) {
  const variantClasses =
    variant === "primary"
      ? "bg-oPrimary text-bg hover:text-oPrimary hover:bg-inherit"
      : "text-oPrimary bg-inherit hover:text-bg hover:bg-oPrimary";

  return (
    <button
      onClick={onClick}
      type={type}
      className={`text-sm px-4 py-2 capitalize font-sans_bold border-oPrimary border-opacity-20 border bg-fg rounded shadow-lg active:shadow-none active:translate-y-1 transition-[shadow_translate_font] duration-200 outline-none cursor-pointer ${variantClasses} ${classes}`}
    >
      {label}
    </button>
  );
}

export default Button;
