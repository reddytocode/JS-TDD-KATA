
class Greeter {
  greet(name) {
    const nameTrim = name.trim();
    const nameCapitalized = nameTrim.charAt(0).toUpperCase() + nameTrim.slice(1);
    return `Hello ${nameCapitalized}`;
  }
}


const greeter = new Greeter()

test("Greet function returns Hello <name>", () =>{
  const resultado = greeter.greet("Maria")
  const esperado = "Hello Maria"
  
  expect(resultado).toBe(esperado);
})

test("Greet function receives a name with spaces and remove the spaces in the response", () => {
  const name = "   Maria "
  const resultado = greeter.greet(name);
  const esperado = `Hello ${name.trim()}`;

  expect(resultado).toBe(esperado);
})

test("Greet function capitalizes the first letter of the name", () => {
  const name = "maria"
  const resultado = greeter.greet(name);
  const esperado = "Hello Maria"

  expect(resultado).toBe(esperado);
});