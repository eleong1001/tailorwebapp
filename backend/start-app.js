const { SSMClient, GetParametersCommand } = require("@aws-sdk/client-ssm");
const { exec } = require('child_process');

const ssmClient = new SSMClient({ region: 'us-east-1' });

const parameterMapping = {
  '/tailorwebapp/database/access-password': 'REACT_APP_DATABASE_ACCESS',
  '/tailorwebapp/ip/public_ip': 'REACT_APP_API_BASE_URL'
};


async function getParameters(names) {
  const command = new GetParametersCommand({
    Names: names,
    WithDecryption: true
  });

  try {
    const result = await ssmClient.send(command);
    return result.Parameters.reduce((acc, param) => {
      const envName = parameterMapping[param.Name] || param.Name;
      acc[envName] = param.Value;
      return acc;
    }, {});
  } catch (error) {
    console.error('Error retrieving parameters:', error);
    process.exit(1);
  }
}

async function main() {
  const parameterNames = Object.keys(parameterMapping);

  const parameters = await getParameters(parameterNames);

  const envVars = Object.entries(parameters)
    .map(([key, value]) => `${key}=${value}`)
    .join(' ');

  const command = `${envVars} pm2 start ecosystem.config.js`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

main();
