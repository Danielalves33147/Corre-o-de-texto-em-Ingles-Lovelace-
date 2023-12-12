// Substitua 'SUA_CHAVE_DE_API' pela sua chave de API da OpenAI
const apiKey = 'SUA_CHAVE_DE_API';

// Texto em inglês que você deseja verificar
const texto = "Your text here.";

// Fazendo a chamada para a API do GPT-3.5 Turbo
fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify({
    prompt: `Check if the following English text is correct: "${texto}"`,
    max_tokens: 150
  })
})
.then(response => response.json())
.then(data => {
  const resposta = data.choices[0].text.trim(); // Obtém a resposta do GPT-3.5 Turbo
  console.log(resposta); // Exibe a resposta no console
})
.catch(error => {
  console.error('Erro ao chamar a API do GPT-3.5 Turbo: ', error);
});
