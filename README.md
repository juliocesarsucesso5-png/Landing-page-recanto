# Sítio Recanto da Mata

Página de apresentação do Sítio Recanto da Mata, em São Joaquim de Bicas (MG),
para aluguel de fim de semana completo.

É um site simples: um arquivo de página (`index.html`), um de estilo
(`assets/css/site.css`) e um de funcionamento (`assets/js/site.js`). Não precisa
instalar nada para funcionar.

## O que falta antes de publicar

### 1. Colocar o número do WhatsApp

É um lugar só. Abra o arquivo `assets/js/site.js` e, logo no começo, troque:

```js
const WHATSAPP = "";
```

pelo número com DDD. Exemplo:

```js
const WHATSAPP = "31999999999";
```

Pode escrever com ou sem parênteses, espaço e traço, e com ou sem o 55: a
página arruma sozinha.

Pelo próprio GitHub dá para fazer isso: abra o arquivo, clique no lápis
("Edit this file"), troque o número e clique em "Commit changes".

Enquanto o número estiver vazio, os botões levam para a parte "Reserve o seu
fim de semana" da própria página, e o botão "Enviar pelo WhatsApp" avisa que o
número ainda não foi configurado.

### 2. Prévia do link no WhatsApp

Já está pronta para o endereço atual. Se um dia a página ganhar domínio
próprio, troque em `index.html` o endereço que aparece em `og:url` e em
`og:image`.

## Fotos

- `fotos/originais/` guarda as 19 fotos diferentes que vieram do WhatsApp, com
  nomes que dizem o que cada uma mostra. As 13 repetidas foram retiradas; elas
  continuam no histórico do git, se um dia precisar.
- `assets/img/` tem as mesmas fotos em dois tamanhos (640 e 1280 px) e em dois
  formatos (WebP e JPG), para a página abrir rápido no celular.
- Ainda não há fotos da piscina, da piscina infantil, do playground e do jardim
  iluminado à noite. A página fala desses itens em texto. Quando tiver as fotos,
  elas entram na galeria e na seção "Lazer para todas as idades".
- As fotos vieram pelo WhatsApp, que reduz tudo para 1280 px. Na abertura, que
  ocupa a tela inteira do computador, isso deixa a imagem um pouco macia. Se
  puder, mande as fotos originais do celular (sem passar pelo WhatsApp, por
  exemplo pelo Google Fotos ou por e-mail como arquivo) para a abertura ficar
  nítida.

## Como ver a página no computador

Abra o arquivo `index.html` com dois cliques: ele abre no navegador.

## Onde a página está publicada

Na Vercel, no projeto `sitio-recanto-da-mata`:
https://sitio-recanto-da-mata-two.vercel.app

O projeto está ligado a este repositório. A Vercel publica sozinha o que
entra na branch `main`. Enquanto o trabalho estiver na branch
`claude/intelligent-hawking-xt8950`, a publicação é feita a partir dela.
Para a página se atualizar sozinha a cada mudança, essa branch precisa ser
juntada à `main` (por um pull request no GitHub).

O arquivo `.vercelignore` deixa de fora do site o zip do Impeccable, as fotos
originais e os documentos internos.

## Arquivos de projeto

- `PRODUCT.md`: o que o sítio é, para quem e o que a página não pode prometer.
- `DESIGN.md`: as regras do visual (cores, letras, molduras), para manter tudo
  coerente quando a página mudar.
- `.claude/skills/impeccable/`: a ferramenta de design usada para construir a
  página, extraída de `impeccable-main.zip`.
