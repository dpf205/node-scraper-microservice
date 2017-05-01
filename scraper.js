const request = require('request');
const cheerio = require('cheerio');


// Promises example
exports.imgScrape = (url) => {
	"use strict";
	return new Promise((resolve, reject) =>{
		request(url, (error, response, parsedBody) => {
			"use strict";
			if (error) {
				reject(error);
			}
			let loadCheerio = cheerio.load(parsedBody);
			let spraped_url = url;
			let scraped_img = loadCheerio('.post-image img').attr('src');
			let scraped_title = loadCheerio('.post-title').text();
			let scraped_description = loadCheerio('[itemprop=description]').text();


			let image = {
				url: spraped_url,
				img: 'http:' + scraped_img,
				title: scraped_title,
				description: scraped_description || ' no description available'
			};

			// respond with the final JSON
			console.log('scrape successful (scraper.js): ' + image);
			resolve(image);
		});
	})
};


