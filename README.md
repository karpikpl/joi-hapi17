# About
Example of using Joi validation with Hapi 17

# Why make this sample?
Hapi had a lot of breaking changes between 16 and 17. One of those changes affected the default response for validated routes.

### In Hapi 16
https://github.com/karpikpl/joi-hapi16
```
curl -X "POST" .:8081/data/4 -d '{"id":"4", "url":"not a URL"}' -H 'content-type: application/json'
```
The result is:
```
{"statusCode":400,"error":"Bad Request","message":"child \"url\" fails because [\"url\" must be a valid uri]","validation":{"source":"payload","keys":["url"]}}
```

### In Hapi 17
https://github.com/karpikpl/joi-hapi17

```
curl -X "POST" .:8081/data/4 -d '{"id":"4", "url":"not a URL"}' -H 'content-type: application/json'
```
The result is:
```
{"statusCode":400,"error":"Bad Request","message":"Invalid request payload input"
```
