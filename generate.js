const fs = require('fs');
const { Command } = require('commander');

// Versão do programa
const VERSION = '1.0.0';

/**
 * Gera uma string numérica aleatória.
 * @param {number} length - Tamanho da string.
 * @returns {string} String numérica gerada.
 */
function generateNumericString(length) {
  const chars = '0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Gera uma string alfanumérica aleatória.
 * @param {number} length - Tamanho da string.
 * @returns {string} String alfanumérica gerada.
 */
function generateAlphanumericString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Converte um caractere alfanumérico em um valor numérico para o cálculo do DV.
 * Letras (A-Z) são convertidas com base na tabela ASCII, subtraindo 48.
 * Números (0-9) permanecem como estão.
 * @param {string} char - Caractere alfanumérico.
 * @returns {number} Valor numérico correspondente.
 */
function convertCharToValue(char) {
  const asciiValue = char.charCodeAt(0);
  return asciiValue - 48; // Subtrai 48 conforme a regra
}

/**
 * Calcula os dígitos verificadores (DV) de um CNPJ.
 * @param {string} base - Os 12 primeiros caracteres do CNPJ.
 * @returns {string} Os dois dígitos verificadores.
 */
function calculateCheckDigits(base) {
  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  const calculateDigit = (base, weights) => {
    const sum = base
      .split('')
      .map((char, index) => convertCharToValue(char) * weights[index])
      .reduce((acc, val) => acc + val, 0);

    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const firstDigit = calculateDigit(base, weights1);
  const secondDigit = calculateDigit(base + firstDigit, weights2);

  return `${firstDigit}${secondDigit}`;
}

/**
 * Formata um CNPJ com pontuação.
 * @param {string} cnpj - O CNPJ a ser formatado.
 * @returns {string} CNPJ formatado.
 */
function formatCNPJ(cnpj) {
  return `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12)}`;
}

/**
 * Gera um CNPJ válido (alfanumérico ou numérico).
 * @param {boolean} numeric - Se true, gera um CNPJ numérico.
 * @param {boolean} unformatted - Se true, gera o CNPJ sem pontuação.
 * @returns {string} CNPJ gerado.
 */
function generateValidCNPJ(numeric = false, unformatted = false) {
  const base = numeric
    ? generateNumericString(8) + generateNumericString(4) // Numérico
    : generateAlphanumericString(8) + generateAlphanumericString(4); // Alfanumérico

  const checkDigits = calculateCheckDigits(base); // Calcula os dígitos verificadores
  const cnpj = `${base}${checkDigits}`; // CNPJ completo

  return unformatted ? cnpj : formatCNPJ(cnpj); // Retorna formatado ou não
}

/**
 * Valida um CNPJ (alfanumérico ou numérico, com ou sem pontuação).
 * @param {string} cnpj - O CNPJ a ser validado.
 * @returns {boolean} True se o CNPJ for válido, false caso contrário.
 */
function validateCNPJ(cnpj) {
  // Remove pontuação, se houver
  const cleanCNPJ = cnpj.replace(/[.\-\/]/g, '');

  if (cleanCNPJ.length !== 14) {
    return false;
  }

  const base = cleanCNPJ.slice(0, 12); // Os 12 primeiros caracteres
  const providedCheckDigits = cleanCNPJ.slice(12); // Os 2 últimos caracteres (DV)
  const calculatedCheckDigits = calculateCheckDigits(base);

  return providedCheckDigits === calculatedCheckDigits;
}

/**
 * Gera uma massa de dados com CNPJs válidos.
 * @param {number} count - Quantidade de CNPJs a serem gerados.
 * @param {boolean} numeric - Se true, gera CNPJs numéricos.
 * @param {boolean} unformatted - Se true, gera CNPJs sem pontuação.
 * @returns {Array} Array de CNPJs gerados.
 */
function generateDataMass(count, numeric = false, unformatted = false) {
  const data = [];
  for (let i = 0; i < count; i++) {
    const cnpj = generateValidCNPJ(numeric, unformatted);
    data.push({ cnpj });
  }
  return data;
}

// Configuração do CLI
const program = new Command();
program
  .version(VERSION)
  .description('Gerador e validador de CNPJs válidos (alfanuméricos e numéricos)')
  .option('-c, --count <number>', 'Quantidade de CNPJs a serem gerados', '10')
  .option('-o, --output <file>', 'Arquivo de saída para salvar os CNPJs', 'cnpjs.json')
  .option('-v, --validate <cnpj>', 'Valida um CNPJ fornecido')
  .option('-n, --numeric', 'Gera CNPJs no formato numérico')
  .option('-u, --unformatted', 'Gera CNPJs sem pontuação')
  .option('-p, --print', 'Exibe os CNPJs gerados no terminal')
  .addHelpText(
    'after',
    `\n================================\nFeito por *** ALVARO *** com IA\nVersão: ${VERSION}\n================================`
  )
  .action((options) => {
    if (options.validate) {
      const isValid = validateCNPJ(options.validate);
      console.log(
        isValid
          ? `✅ O CNPJ "${options.validate}" é válido.`
          : `❌ O CNPJ "${options.validate}" é inválido.`
      );
      return;
    }

    const count = parseInt(options.count, 10);
    const output = options.output;
    const numeric = options.numeric || false;
    const unformatted = options.unformatted || false;
    const print = options.print || false;

    if (isNaN(count) || count <= 0) {
      console.error('A quantidade de CNPJs deve ser um número maior que 0.');
      process.exit(1);
    }

    const data = generateDataMass(count, numeric, unformatted);

    // Exibe os CNPJs no terminal, se solicitado
    if (print) {
      console.log('CNPJs Gerados:');
      data.forEach((item) => console.log(`- ${item.cnpj}`));
    }

    // Salva os dados no arquivo especificado
    fs.writeFileSync(output, JSON.stringify(data, null, 2), 'utf-8');
    console.log(
      `✅ ${count} CNPJs ${
        numeric ? 'numéricos' : 'alfanuméricos'
      } ${unformatted ? 'sem pontuação' : 'com pontuação'} gerados e salvos em "${output}".`
    );
  });

// Exibe a ajuda automaticamente se nenhum argumento for fornecido
if (process.argv.length <= 2) {
  program.outputHelp();
  process.exit(0);
}

program.parse(process.argv);
