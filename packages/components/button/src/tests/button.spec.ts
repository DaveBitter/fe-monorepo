import { screen } from 'testing-library__dom';
import { fixture } from '@open-wc/testing-helpers';
import Button from '../Button';

describe('Button', () => {
	beforeEach(async () => {
		await fixture(Button({ label: 'test', testId: 'test-button' }));
	});

	it('renders passed label in button', () => {
		expect(screen.getByTestId('test-button')).toHaveTextContent('test');
	});
});
