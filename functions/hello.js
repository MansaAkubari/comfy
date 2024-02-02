// domain/.netlify/functions/hello
const items = [{ name: "john" }, { name: "peter" }];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
  console.log(event);
};

// Path: functions/hello.js
