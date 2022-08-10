import { fixture } from '@open-wc/testing-helpers';
import { screen } from 'testing-library__dom';

import Button from '../Button';

describe('Button', () => {
	beforeEach(async () => {
		await fixture(Button({ label: 'test', testId: 'test-button' }));
	});

	it('renders passed label in as text in button', () => {
		expect(screen.getByTestId('test-button')).toHaveTextContent('test');
	});
});
