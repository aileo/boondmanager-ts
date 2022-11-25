const path = require('path');
const wap = require('webapi-parser').WebApiParser

async function main() {
  try {
    console.log('starting');
    const model = await wap.raml08.parse(`file://${path.resolve(__dirname, 'api-externe.raml')}`);
    console.log('loaded');
    await wap.oas30.generateYamlFile(model, `file://${path.resolve(__dirname, 'api-externe.yml')}`);
    console.log('finished');
  } catch(e) {
    console.log(e);
  }
}

main();
