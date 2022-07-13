//domain http://localhost:8888/netlify/functions/hello

//return promise
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "hello world",
  };
};
