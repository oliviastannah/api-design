const fs = require('fs/promises')
const path = require('path')

// blocking
const blocking = fs.readFileSync("some/path/to/file.txt");

// non-blocking
const nonBlocking = await fs.readFile("some/path/to/file.txt");
// or
const read = async () => { 
  const result = fs.readFile(path.join(__dirname, "some/path/to/file.txt"))
  return result;
}
read().then(f => console.log(f))

