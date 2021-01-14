// at a minimum your handler function must return a status code and a body
exports.handler = async () => {
  return {
    statusCode: 200,
    body: "boop",
  };
};
