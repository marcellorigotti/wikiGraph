import axios from 'axios';
import * as cheerio from 'cheerio';
import pretty from 'pretty';


async function doGetRequest() {

    let website = await axios.get('https://en.wikipedia.org/wiki/Graph_theory');

    // console.log(website.data);
    let $ = cheerio.load(website.data);
    console.log(pretty($.html()));
}

doGetRequest();