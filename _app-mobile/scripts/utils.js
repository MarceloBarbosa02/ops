const fs = require('fs');
const { exec } = require('child_process');
const { resolve } = require('path');
const environments = require('../templates/development');

async function getClientInfo(environment) {
  try {
    const envContent = environments.filter((env) => env.env === environment)[0];

    console.log(`Dados do ambiente ${environment} buscados com sucesso`);

    return {
      env: environment,
      ...envContent,
    };
  } catch (error) {
    console.error(
      'Erro ao buscar dados da agência',
      err?.response?.data || err
    );

    process.exit(1);
  }
}

async function saveTemplateJson(data) {
  const file_path = resolve(__dirname, '..', 'template.json');

  fs.writeFileSync(file_path, JSON.stringify(data, null, 2));

  console.log(`Template alterado para novo ambiente ${data?.env} com sucesso`);
}

module.exports = {
  getClientInfo,
  saveTemplateJson,
};
