const generator = require("generate-password");
const password = generator.generate({
  length: 10,
  useNumbers: true,
});
console.log(password)