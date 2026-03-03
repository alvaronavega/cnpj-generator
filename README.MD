# 🧾 Gerador e Validador de CNPJs

Este projeto é uma ferramenta **CLI (Command-Line Interface)** para gerar e validar CNPJs — nos formatos **alfanumérico**, **numérico**, **com pontuação** ou **sem pontuação**.  
Permite gerar CNPJs válidos, exibi-los no terminal e salvar em arquivo JSON. Também é possível validar CNPJs fornecidos pelo usuário.

---

## 📚 **Índice**
1. [Pré-requisitos](#pré-requisitos)
2. Instalação
3. [Como Usar](#comometros Disponíveis
5. Exemplos de Uso
6. Estrutura do Projeto
7. Contribuição
8. Licença
9. [Feito por](#feito-⚙️ **Pré-requisitos**

- Node.js **v12.0.0 ou superior**
- Acesso ao terminal / prompt de comando

---

## 📦 **Instalação**

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/alvaronavega/cnpj-generator.git
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd cnpj-generator
   ```

3. **Verifique se o Node.js está instalado:**
   ```bash
   node -v
   ```

   Caso não esteja instalado, baixe em:  
   👉 https://nodejs.org

Pronto! O projeto não possui dependências externas — você já pode usar o script imediatamente.

---

## ▶️ **Como Usar**

O script principal é o arquivo **generate.js**.  
Execute:

```bash
node generate.js [opções]
```

---

## 🛠️ **Parâmetros Disponíveis**

| Parâmetro | Descrição | Valor Padrão |
|----------|-----------|---------------|
| `-c, --count <n>` | Quantidade de CNPJs a serem gerados | `10` |
| `-o, --output <f>` | Nome do arquivo de saída | `cnpjs.json` |
| `-v, --validate <c>` | Valida um CNPJ fornecido | — |
| `-n, --numeric` | Gera apenas números | `false` |
| `-u, --unformatted` | Gera sem pontuação | `false` |
| `-p, --print` | Exibe os CNPJs no terminal | `false` |
| `-h, --help` | Exibe ajuda | — |
| `-V, --version` | Mostra a versão do programa | — |

---

## 🧪 **Exemplos de Uso**

### 1️⃣ Gerar CNPJsrão)
```bash
node generate.js --count 5 --output cnpjs.json
```
💡 **Resultado:** 5 CNPJs com pontuação, salvos em *cnpjs.json*.

---

### 2️⃣ Gerar CNPJs apenas numéricos
```bash
node generate.js --count 10 --numeric --output numeric_cnpjs.json
```

---

### 3️⃣ Gerar CNPJs sem pontuação
```bash
node generate.js --count 3 --unformatted --output unformatted_cnpjs.json
```

---

### 4️⃣ Gerar e exibir os CNPJs no terminal
```bash
node generate.js --count 5 --print
```

---

### 5️⃣ Validar um CNPJ
```bash
node generate.js --validate 12.345.678/9012-34
```

Saída possível:
```
✅ O CNPJ "12.345.678/9012-34" é válido.
```
ou
```
❌ O CNPJ "12.345.678/9012-34" é inválido.
```

---

### 6️⃣ Exibir ajuda
```bash
node generate.js --help
```

---

### 7️⃣ Exibir versão do programa
```bash
node generate.js --version
```

Resultado esperado:
```
1.0.0
```

---

## 📂 **Estrutura do Projeto**

```
cnpj-generator/
├── generate.js       # Script principal
├── README.md         # Documentação
└── cnpjs.json        # Exemplo de saída
```

---

## 🤝 **Contribuição**

Contribuições são bem-vindas!  
Para colaborar:

1. Faça um **fork** do projeto.
2. Crie uma branch:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das alterações:
   ```bash
   git commit -m "Descrição da minha feature"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um **Pull Request**.

---

## 📄 **Licença**

Este projeto está licenciado sob a licença **MIT**.  
Você pode usar, modificar e distribuir livremente com a devida atribuição.

---

## ✍️ **Feito por**
```
=============================
Feito por *** ALVARO *** com IA  
Versão: 1.0.0
=============================
```

``
