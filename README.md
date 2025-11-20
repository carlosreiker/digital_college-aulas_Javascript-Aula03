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

## Demo (GitHub Pages)

- Uma versão hospedada deste projeto está disponível em GitHub Pages:

	https://carlosreiker.github.io/digital_college-aulas_Javascript/

	Abra o link acima para ver o conteúdo publicado sem precisar iniciar um servidor local.

## Detalhes do Sorteador de Números

- Digite um número inteiro entre `0` e `9` e clique em **Chutar**.
- Se acertar, o botão **Chutar** ficará desabilitado até você clicar em **Tentar novamente**, que sorteia um novo número.
- Validação básica impede entradas fora do intervalo ou vazias.

## Detalhes da Calculadora de IMC

- Local: `IMC/imc.html` (script: `IMC/js/imc.js`).
- Entradas: **Altura em centímetros** (ex.: `180`) e **Peso em kg** (ex.: `70.5`).
- Formato: o campo de altura aceita valores inteiros entre `30` e `999` (até 3 dígitos). O peso aceita valores até 3 dígitos na parte inteira e casas decimais.
- Uso: informe altura em cm e peso em kg e clique em **Calcular**. O resultado aparece na própria página.
- Exemplo: altura `180` cm e peso `70.5` kg → IMC ≈ `21.76` (Eutrofia / peso normal).
- Botões: **Calcular** executa a validação e o cálculo; **Limpar** reseta os campos.

Observações:
- Os cálculos convertem a altura (cm) para metros internamente antes de calcular o IMC (m = cm / 100).
- Há validação de entrada no front-end para evitar valores fora do intervalo e limitar dígitos.

## Licença

Veja o arquivo `LICENSE` na raiz do repositório.

---