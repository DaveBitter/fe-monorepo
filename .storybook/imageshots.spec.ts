import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

initStoryshots({
	suite: 'Imageshots',
	framework: 'web-components',
	test: imageSnapshot({
		storybookUrl: `file://${path.resolve(__dirname, '../storybook-static')}`,
	}),
});
