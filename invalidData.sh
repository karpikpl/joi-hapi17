curl -X "POST" .:8081/data/4 -d '{"id":"4", "url":"not a URL"}' -H 'content-type: application/json'
