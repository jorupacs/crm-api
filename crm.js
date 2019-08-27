'use strict';

module.exports.process = (event, context, callback) => {
  const body = {
    data: JSON.parse(event.body),
    success: Math.random() < 0.5
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify(body)
  };

  console.log(body);

  callback(null, response);
}
