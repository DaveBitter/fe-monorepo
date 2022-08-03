import Text from './Text';

export default {
	title: 'Components/Text',
	argTypes: {
		tagName: {
			control: { type: 'select' },
			options: [
				'p',
				'h1',
				'h2',
				'h3',
				'h4',
				'h5',
				'h6',
				'span',
				'br',
				'strong',
				'em',
				'blockquote',
				'q',
				'mark',
				'ins',
				'del',
				'sup',
				'sub',
				'small',
				'i',
				'b',
			],
		},
	},
	args: {
		tagName: 'p',
		label: 'Text',
	},
};

const Template = (args) => Text(args);

export const Dynamic = Template.bind({});

export const H1 = Template.bind({});
H1.storyName = 'h1';
H1.args = {
	tagName: 'h1',
};

export const H2 = Template.bind({});
H2.storyName = 'h2';
H2.args = {
	tagName: 'h2',
};

export const H3 = Template.bind({});
H3.storyName = 'h3';
H3.args = {
	tagName: 'h3',
};

export const H4 = Template.bind({});
H4.storyName = 'h4';
H4.args = {
	tagName: 'h4',
};

export const H5 = Template.bind({});
H5.storyName = 'h5';
H5.args = {
	tagName: 'h5',
};

export const H6 = Template.bind({});
H6.storyName = 'h6';
H6.args = {
	tagName: 'h6',
};
