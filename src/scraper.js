const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const PORT = 8000;

const app = express();
const url =
  "https://www.mojedelo.com/prosta-delovna-mesta/napredno-iskanje?q=front+end";
axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const jobs = [];

    $(".ad-list", html).each(function () {
      const company = $(this).find("div.detail").text();
      const job = $(this).find("h2.title").text();
      jobs.push({ job, company });
    });
    console.log(jobs);
  })
  .catch((error) => console.log(error));

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
