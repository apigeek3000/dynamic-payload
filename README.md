# dynamic-payload
Example to dynamically augment a request payload depending on the data within

## Intro
It's important to be able to understand how to manipulate your request and response data in a dynamic fashion. In this repo you'll learn how to accomplish this using both native Apigee ExtractVariable & AssignMessage policies as well as using only a JavaScript policy. 

## dynamic-payload

This approach uses ExtractVariable and AssignMessage policies. To implement this solution, download the dynamic-payload.zip file and upload it to Apigee as a proxy bundle (Apigee Dash > Proxies > Create New > Upload Proxy Bundle). Don't forget to deploy thereafter.

Once the proxy is deployed you can call on it using a curl command like this:
```
curl --location --request POST 'https://[your-apigee-domain]/dynamic-payload' \
--header 'Content: application/json' \
--header 'Content-Type: application/json' \
--data-raw '{
    "reqType": "reqType1",
    "reqType1Field": "reqType1Value",
    "reqType2Field": "reqType2Value"
}'
```

## dynamic-payload-js

This approach uses only a JavaScript policy. To implement this solution, download the dynamic-payload-js.zip file and upload it to Apigee as a proxy bundle (Apigee Dash > Proxies > Create New > Upload Proxy Bundle). Don't forget to deploy thereafter.

Once the proxy is deployed you can call on it using a curl command like this:
```
curl --location --request POST 'https://[your-apigee-domain]/dynamic-payload-js' \
--header 'Content: application/json' \
--header 'Content-Type: application/json' \
--data-raw '{
    "reqType": "reqType1",
    "reqType1Field": "reqType1Value",
    "reqType2Field": "reqType2Value"
}'
```
