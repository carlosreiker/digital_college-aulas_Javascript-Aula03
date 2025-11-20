# Aulas - Digital College (JavaScript)

Repositório com exercícios e pequenas atividades em JavaScript. Projetado para estudo e demonstração de conceitos básicos, com páginas estáticas prontas para abrir no navegador.

## Atividades incluídas

- `SORT NUMBERS/sort-number.html` — Sorteador de números (0–9). Interface com campo para chutar, botão **Chutar** e botão **Tentar novamente**.
- `IMC/imc.html` — Calculadora de IMC (Índice de Massa Corporal).
- `index.html` — Página principal com links para as atividades.
- `styles/index.css` — Estilos principais usados na página `index.html`.

## Como executar localmente

1. Abra um terminal na pasta do projeto.

2. Inicie um servidor HTTP simples (recomendado para evitar problemas de CORS/paths):

```bash
python3 -m http.server 8000
```

3. Abra o navegador e acesse:

```
http://localhost:8000/index.html
```

ou abra diretamente alguma atividade, por exemplo:

```
http://localhost:8000/SORT%20NUMBERS/sort-number.html
```

> Observação: o espaço no nome da pasta `SORT NUMBERS` é codificado como `%20` na URL.

## Detalhes do Sorteador de Números

- Digite um número inteiro entre `0` e `9` e clique em **Chutar**.
- Se acertar, o botão **Chutar** ficará desabilitado até você clicar em **Tentar novamente**, que sorteia um novo número.
- Validação básica impede entradas fora do intervalo ou vazias.

## Contribuição

Pull requests são bem-vindos. Para mudanças simples, faça um fork, crie uma branch, aplique as alterações e abra um PR.

## Licença

Veja o arquivo `LICENSE` na raiz do repositório.

---

Se quiser, posso:
- Mover estilos embutidos para arquivos CSS separados.
- Adicionar instruções para executar com `live-server` (npm) ou Docker.
- Melhorar README com badges e instruções de contribuição detalhadas.

Diga qual opção prefere.