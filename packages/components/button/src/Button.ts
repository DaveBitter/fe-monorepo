import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map.js";
import "./styles/button.css";

/**
 * Primary UI component for user interaction
 */
export type ButtonProps = {
  primary?: boolean;
  backgroundColor?: string | null;
  size?: "small" | "medium" | "large";
  label?: string;
  onClick?: () => void;
};
const Button = ({
  primary,
  backgroundColor = null,
  size,
  label,
  onClick,
}: ButtonProps) => {
  const mode = primary ? "button--primary" : "button--secondary";

  return html`
    <button
      type="button"
      class=${["button", `button--${size || "medium"}`, mode].join(" ")}
      style=${styleMap({ backgroundColor })}
      @click=${onClick}
    >
      ${label}
    </button>
  `;
};

export default Button;