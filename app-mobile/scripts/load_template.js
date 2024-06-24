/* eslint-disable @typescript-eslint/no-var-requires */
const { program } = require('commander');

const utils = require('./utils');

const template = require('../template.json');

program.option(
  '-e, --environment <environment>',
  'Environment name (production | sandbox | development)'
);

program.parse(process.argv);

const config = program.opts();

const environment = config.environment || 'sandbox';

async function loadClientTemplate(environment) {
  console.log(`Iniciando parametrização do cliente kirvano em ${environment}`);

  const client = await utils.getClientInfo(environment);

  if (!client) return;
  console.log({ client });
  // Salva as informações no template principal
  await utils.saveTemplateJson(client);
}
loadClientTemplate(environment);
