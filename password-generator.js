const generator = require("generate-password");

// Create function to generate password
const passwordGenerator = () => {
  const password = generator.generate({
    length: 10,
    numbers: true,
  });
  return password;
};

console.log(passwordGenerator());
