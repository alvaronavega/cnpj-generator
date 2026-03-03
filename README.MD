
# 🧾 Gerador e Validador de CNPJs

Este projeto é uma ferramenta **CLI (Command-Line Interface)** para gerar e validar CNPJs — nos formatos **alfanumérico**, **numérico**, **com pontuação** ou **sem pontuação**.  
Permite gerar CNPJs válidos, exibi-los no terminal e salvá-los em arquivo JSON. Também é possível validar CNPJs fornecidos pelo usuário.

---

## 📚 Índice
1. [Pré-requisitos](#-pré-requisitos)
2. [Instalação](#-instalação)
3. [Como Usar](#️-como-usar)
4. [Parâmetros Disponíveis](#️-parâmetros-disponíveis)
5. [Exemplos de Uso](#-exemplos-de-uso)
6. [Estrutura do Projeto](#-estrutura-do-projeto)
7. [Contribuição](#-contribuição)
8. [Licença](#-licença)
9. [Feito por](#️-feito-por)

---

## 📋 Pré-requisitos

- Node.js **v12.0.0 ou superior**
- Acesso ao terminal / prompt de comando

---

## 📦 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/alvaronavega/cnpj-generator.git


Acesse o diretório do projeto:

cd cnpj-generator


Verifique se o Node.js está instalado:

node -v


Caso não esteja instalado, baixe em:
👉 https://nodejs.org

Pronto! O projeto não possui dependências externas — você já pode usar o script imediatamente.

▶️ Como Usar

O script principal é o arquivo generate.js.
Execute:

node generate.js [opções]

🛠️ Parâmetros Disponíveis
Parâmetro	Descrição	Valor Padrão
-c, --count <n>	Quantidade de CNPJs a serem gerados.	10
-o, --output <f>	Nome do arquivo onde os CNPJs gerados serão salvos.	cnpjs.json
-v, --validate <c>	Valida um CNPJ fornecido (alfanumérico ou numérico, com ou sem pontuação).	Não aplicável
-n, --numeric	Gera CNPJs no formato numérico (somente números).	false (alfanumérico)
-u, --unformatted	Gera CNPJs sem pontuação (ex.: 12345678901234 em vez de 12.345.678/9012-34).	false
-p, --print	Exibe os CNPJs gerados diretamente no terminal.	false
-h, --help	Exibe a ajuda do programa com a lista de comandos disponíveis.	Não aplicável
-V, --version	Exibe a versão atual do programa.	Não aplicável
🧪 Exemplos de Uso
1️⃣ Gerar CNPJs
node generate.js --count 5 --output cnpjs.json


💡 Resultado: 5 CNPJs alfanuméricos com pontuação, salvos em cnpjs.json.

2️⃣ Gerar CNPJs apenas numéricos
node generate.js --count 10 --numeric --output numeric_cnpjs.json


💡 Resultado: 10 CNPJs numéricos com pontuação, salvos em numeric_cnpjs.json.

3️⃣ Gerar CNPJs sem pontuação
node generate.js --count 3 --unformatted --output unformatted_cnpjs.json


💡 Resultado: 3 CNPJs alfanuméricos sem pontuação, salvos em unformatted_cnpjs.json.

4️⃣ Gerar e exibir os CNPJs no terminal
node generate.js --count 5 --print


💡 Resultado: 5 CNPJs alfanuméricos com pontuação exibidos diretamente no terminal.

5️⃣ Validar um CNPJ
node generate.js --validate 12.345.678/9012-34


💡 Saída possível:

✅ O CNPJ "12.345.678/9012-34" é válido.


ou

❌ O CNPJ "12.345.678/9012-34" é inválido.

6️⃣ Exibir ajuda
node generate.js --help


💡 Resultado: Exibe a lista de comandos disponíveis e suas descrições.

7️⃣ Exibir versão do programa
node generate.js --version


💡 Resultado esperado:

1.0.0

📂 Estrutura do Projeto
cnpj-generator/
├── generate.js       # Script principal
├── README.md         # Documentação
└── cnpjs.json        # Exemplo de saída

🤝 Contribuição

Contribuições são bem-vindas!
Para colaborar:

Faça um fork do projeto.
Crie uma branch:
git checkout -b minha-feature

Faça commit das alterações:
git commit -m "Descrição da minha feature"

Envie para o repositório remoto:
git push origin minha-feature

Abra um Pull Request.
📄 Licença

Este projeto está licenciado sob a licença MIT.
Você pode usar, modificar e distribuir livremente com a devida atribuição.

✍️ Feito por
=============================
Feito por *** ALVARO *** com IA  
Versão: 1.0.0
=============================



