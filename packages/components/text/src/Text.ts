import { html } from 'lit-html';
import { unsafeHTML } from 'lit/directives/unsafe-html.js'; // eslint-disable-line import/extensions

import './styles/text.css';

/**
 * Primary UI component for text
 */
export type TextProps = {
	tagName?:
		| 'p'
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'span'
		| 'br'
		| 'strong'
		| 'em'
		| 'blockquote'
		| 'q'
		| 'mark'
		| 'ins'
		| 'del'
		| 'sup'
		| 'sub'
		| 'small'
		| 'i'
		| 'b';
	label?: string;
	testId?: string;
};
const Text = ({ tagName = 'p', label = '', testId = 'text' }: TextProps) => {
	const template = `
    <${tagName} class='text' data-testid="${testId}">
      ${label}
    </${tagName}>
  `;

	return html` ${unsafeHTML(template)} `;
};

export default Text;
