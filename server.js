const scraper = require('./scraper');
const fs = require('fs');
const url = 'http://imgur.com/gallery/MYDbg';
const write_to_file = 'text.txt';

scraper.imgScrape(url)
	.then((scrapedData) => {
		"use strict";
		console.log("\n data from  website scrape received ")
		fs.writeFile(write_to_file, JSON.stringify(scrapedData), (error) => {
			if (error) {
				consosle.log(error);
			}
			console.log('\n Successfully wrote to ' + write_to_file);
		})
		}).catch((error) => {
			console.log('\n error scraping/saving data ');
	});