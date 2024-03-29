import puppeteer from 'puppeteer';
import measureExecutionTime from './utils/measureExecutionTime.js';

const handleSubmit = async (req, res) => {
	const link = req.body.link;

	try {
		const browser = await puppeteer.launch({
			headless: false,
			args: ['--start-maximized'],
		});
		const page = await browser.newPage();

		await measureExecutionTime(async () => {
			// Navigate the page to a URL
			await page.goto(link);

			// Set screen size
			await page.setViewport({ width: 1920, height: 1080 });

			// // Type into search box
			// await page.type('.devsite-search-field', 'automate beyond recorder');

			// // Wait and click on first result
			// const searchResultSelector = '.devsite-result-item-link';
			// await page.waitForSelector(searchResultSelector);
			// await page.click(searchResultSelector);

			// // Locate the full title with a unique string
			// const textSelector = await page.waitForSelector(
			// 	'text/Customize and automate'
			// );
			// const fullTitle = await textSelector?.evaluate((el) => el.textContent);

			// // Print the full title
			// console.log('The title of this blog post is "%s".', fullTitle);

			// await browser.close();
		});
	} catch (error) {
		console.error('An error occurred:', error);
		await res.status(500).send('An error occurred. Please try again later.');
	} finally {
		await res.redirect('/');
	}
};

export default handleSubmit;
