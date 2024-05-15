import * as cheerio from 'cheerio';
const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}
for(let i = 103; i>100; i--){
let response = await fetch(`http://thecodelesscode.com/case/${i}`)
response = await response.text();
//console.log(response);
const $ = cheerio.load(response);
let img = $('#contenttext>div>img');
console.log(img.attr('src'));
console.log(img.attr('title'));
console.log(img.attr('class'));
console.log("");
await delay(3000);
}