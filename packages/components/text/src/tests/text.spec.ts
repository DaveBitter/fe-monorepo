import { screen } from 'testing-library__dom';
import { fixture } from '@open-wc/testing-helpers';
import Text from '../Text';

describe('Text', () => {
	beforeEach(async () => {
		await fixture(Text({ label: 'test', testId: 'test-text' }));
	});

	it('renders passed label as text', () => {
		expect(screen.getByTestId('test-text')).toHaveTextContent('test');
	});
});
