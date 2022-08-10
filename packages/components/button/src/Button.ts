/* eslint-disable import/extensions */
import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map.js';

import './styles/button.css';

/**
 * Primary UI component for user interaction
 */
export type ButtonProps = {
	primary?: boolean;
	backgroundColor?: string | null;
	size?: 'small' | 'medium' | 'large';
	label?: string;
	onClick?: () => void;
	testId?: string;
};
const Button = ({
	primary,
	backgroundColor = null,
	size,
	label,
	onClick,
	testId = 'button',
}: ButtonProps) => {
	const mode = primary ? 'button--primarsy' : 'button--secondary';

	return html`
		<button
			type="button"
			class=${['button', `button--${size || 'medium'}`, mode].join(' ')}
			style=${styleMap({ backgroundColor })}
			@click=${onClick}
			data-testid="${testId}"
		>
			${label}
		</button>
	`;
};

export default Button;
