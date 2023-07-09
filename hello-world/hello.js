/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// Lambda function code

/* 
This function takes an incoming event object from Lambda and logs it to the console. 
Then it returns an object which API Gateway will use to generate an HTTP response.
*/

module.exports.handler = async (event) => {
  console.log("Event: ", event);
  let responseMessage = "Hello, World!";

  /*
   if statement to replace the responseMessage if the request includes a Name query parameter.
  */
  if (event.queryStringParameters && event.queryStringParameters["Name"]) {
    responseMessage = "Hello, " + event.queryStringParameters["Name"] + "!";
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  };
};
