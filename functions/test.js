exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'david',
      age: 28,
      email: 'test@gmail.com'
    })
  };
};