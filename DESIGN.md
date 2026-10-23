---
name: Sítio Recanto da Mata
description: Página de aluguel de fim de semana de um sítio em São Joaquim de Bicas (MG), no estilo "Clássico de natureza".
colors:
  verde: "#1F3527"
  verde-2: "#2A4534"
  latao: "#B8925A"
  latao-texto: "#76592C"
  areia: "#F5F3EC"
  areia-2: "#ECE8DD"
  tinta: "#1C231E"
  tinta-2: "#5A6158"
  sobre-verde: "#F5F3EC"
  sobre-verde-2: "#C5CDBF"
  linha: "rgb(28 35 30 / 0.14)"
  linha-clara: "rgb(245 243 236 / 0.22)"
  veu: "#0C160F"
  branco-campo: "#FFFFFF"
typography:
  display:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(3.1rem, 9vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(2.25rem, 4.8vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  headline-ambiente:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(2.25rem, 4.4vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.05
  title:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1.15
  numero:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(2.75rem, 7vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "lnum"
  lead:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  item:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 650
    lineHeight: 1.35
  small:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0.14em"
rounded:
  reto: "0px"
  circulo: "50%"
spacing:
  gutter: "clamp(16px, 4.5vw, 56px)"
  coluna: "24px"
  secao: "clamp(80px, 11vw, 144px)"
  largura: "1240px"
  topo: "72px"
  toque: "44px"
  botao: "54px"
components:
  button-primary:
    backgroundColor: "{colors.verde}"
    textColor: "{colors.areia}"
    typography: "{typography.label}"
    rounded: "{rounded.reto}"
    padding: "14px 28px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.verde-2}"
    textColor: "{colors.areia}"
  button-claro:
    backgroundColor: "{colors.areia}"
    textColor: "{colors.verde}"
    typography: "{typography.label}"
    rounded: "{rounded.reto}"
    padding: "14px 28px"
    height: "54px"
  button-contorno:
    backgroundColor: "transparent"
    textColor: "currentColor"
    typography: "{typography.label}"
    rounded: "{rounded.reto}"
    padding: "10px 20px"
    height: "44px"
  button-contorno-hover:
    backgroundColor: "{colors.areia}"
    textColor: "{colors.verde}"
  filtro:
    backgroundColor: "transparent"
    textColor: "{colors.verde}"
    rounded: "{rounded.reto}"
    padding: "8px 18px"
    height: "44px"
  filtro-ativo:
    backgroundColor: "{colors.verde}"
    textColor: "{colors.areia}"
  opcao:
    backgroundColor: "{colors.branco-campo}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.reto}"
    padding: "8px 16px"
    height: "44px"
  opcao-marcada:
    backgroundColor: "{colors.verde}"
    textColor: "{colors.areia}"
  campo:
    backgroundColor: "{colors.branco-campo}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.reto}"
    padding: "10px 16px"
    height: "54px"
  flutuante:
    backgroundColor: "{colors.verde}"
    textColor: "{colors.areia}"
    typography: "{typography.label}"
    rounded: "{rounded.reto}"
    padding: "0 22px 0 18px"
    height: "56px"
  previa:
    backgroundColor: "{colors.areia-2}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.reto}"
    padding: "16px 18px"
  caixa-sobre-foto:
    backgroundColor: "{colors.areia}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.reto}"
    padding: "clamp(28px, 4vw, 48px)"
  passo-numero:
    backgroundColor: "transparent"
    textColor: "{colors.sobre-verde}"
    rounded: "{rounded.circulo}"
    size: "44px"
---

# Design System: Sítio Recanto da Mata

## Overview

**Creative North Star: "O Clássico de Natureza"**

É o padrão dos sites de lançamento imobiliário (a referência escolhida pelo dono é o Amalfi Marina) executado com capricho para um sítio: a foto real manda, a tipografia é calma e o caminho até o WhatsApp está sempre à vista. A página alterna dois chãos — areia clara e verde-mata profundo — e entre eles corre a foto em tela cheia, sangrada, sem moldura, com um véu escuro só onde o texto precisa ler por cima. O latão aparece em pouquíssimos lugares, como ferragem de casa antiga: filetes, ícones e o traço sob um link.

A densidade é baixa e o ritmo é de respiro. Cada seção ganha muito espaço vertical (de 80 a 144px), os títulos em Libre Caslon Display falam em tom de convite, e o texto corrido em Figtree é grande (18px) para ser lido sem zoom por gente de todas as idades no celular. Hierarquia vem de tamanho, de espaço e da troca de chão (areia → areia-2 → verde), não de caixas, sombras ou cor forte.

O estilo foi escolhido pelo dono em 23/10/2026, depois de recusar a "casa mineira caiada" por não combinar com natureza e sítio. A página recusa o modelo de chácara com carrossel, cores fortes e ícones coloridos. Mudar de estilo é decisão do dono.

**Key Characteristics:**
- Foto real em tela cheia, sangrada, com véu verde-escuro em degradê.
- Dois chãos alternados: areia (`#F5F3EC`) e verde-mata (`#1F3527`).
- Latão só em filetes, ícones e sublinhados; nunca em texto sobre areia.
- Títulos em Libre Caslon Display, peso 400; texto em Figtree, 18px.
- Tudo reto: botões, campos, caixas e fotos com canto de 0px.
- Filetes de 1px separam itens de lista; nada de cartão com sombra.
- Botões e rótulos em caixa-alta com espaçamento largo (0.14em).

## Colors

Paleta de dois chãos neutros quentes (areia) e um verde-mata profundo que faz o papel de cor de marca, com o latão como único acento metálico, usado em doses mínimas.

### Primary
- **Verde-Mata** (`verde`): a cor da marca e da ação. É o fundo dos botões principais, das seções escuras (Lazer, a coluna de informações da Reserva, o Rodapé), da cor de tema do navegador e de todos os títulos sobre areia. Também é a cor do contorno de foco e da seleção de texto.
- **Verde-Mata Aceso** (`verde-2`): só o estado de passar o mouse dos botões verdes. Um degrau mais claro, nunca usado como fundo de seção.

### Secondary
- **Latão** (`latao`): o acento metálico. Filete sob o título de cada grupo do Lazer, ícones do Lazer (sobre verde, 4,57:1), contorno dos círculos numerados dos passos, traço curto antes de cada item da lista de fatos, borda esquerda da prévia da mensagem e cor do sublinhado dos links verdes. Sobre areia ele mede só 2,59:1: por isso ali é sempre decoração, nunca texto nem ícone que carregue sentido.
- **Latão de Texto** (`latao-texto`): a versão escura do latão para quando ele precisa ser lido ou reconhecido sobre areia (5,85:1). Hoje colore o ícone de alfinete em "Onde fica".

### Neutral
- **Areia** (`areia`): o chão principal da página, o fundo do topo depois que ele fica sólido, a faixa de fatos no pé da abertura, a caixa de "Onde fica" e o texto/botão claro sobre verde e sobre foto.
- **Areia Funda** (`areia-2`): o segundo chão, um tom abaixo, para alternar seções (Ambientes, Galeria) e para a prévia da mensagem. Também é a cor do recorte em volta da foto de detalhe dos ambientes.
- **Tinta** (`tinta`): texto principal sobre areia (14,45:1) e rótulos de campo.
- **Tinta Suave** (`tinta-2`): texto secundário sobre areia e areia funda — parágrafos de apoio, legendas, rótulos dos fatos (5,76:1 e 5,22:1).
- **Sobre Verde** (`sobre-verde`): texto principal sobre o verde. Tem o mesmo valor da areia, mas é um papel à parte: quando o texto está no chão verde, usa-se este nome.
- **Sobre Verde Suave** (`sobre-verde-2`): texto secundário sobre verde (8,05:1) e a cor geral do rodapé.
- **Filete** (`linha`): tinta a 14%, para todos os filetes de 1px sobre areia.
- **Filete Claro** (`linha-clara`): areia a 22%, para filetes de 1px sobre verde.
- **Véu** (`veu`): o verde quase preto que escurece as fotos por baixo do texto, sempre com transparência (de 15% a 80%). Não existe como variável no CSS; aparece como `rgb(12 22 15 / …)` nas camadas de véu e na sombra do botão flutuante.
- **Branco de Campo** (`branco-campo`): fundo de campos, do contador e das opções do formulário, para que pareçam preenchíveis contra a areia.

### Named Rules
**A Regra dos Dois Chãos.** Toda seção fica sobre areia, areia funda, verde ou foto com véu — nada além disso. Quem cria contraste entre seções é a troca de chão, não uma borda nem uma sombra.

**A Regra do Latão Raro.** O latão é ferragem, não tinta: filete, ícone, sublinhado, contorno. Nunca é fundo, nunca é texto sobre areia, e nunca preenche área: é sempre traço de 1px ou ícone de traço.

**A Regra do Papel do Texto.** Sobre areia, o texto usa `tinta`/`tinta-2`; sobre verde, `sobre-verde`/`sobre-verde-2`. Não se troca um par pelo outro, mesmo quando os valores coincidem.

## Typography

**Display Font:** Libre Caslon Display (com Georgia, serif)
**Body Font:** Figtree (com system-ui, -apple-system, Segoe UI, Roboto, sans-serif)

**Character:** Um romano de alto contraste, de sabor clássico e editorial, conversa com um sem-serifa geométrico e amigável. O Caslon dá o tom de convite e de lugar bem cuidado; o Figtree mantém tudo legível e direto, sem formalidade. As duas fontes são servidas da própria pasta `assets/fonts/` (sem serviço de fora), com `font-display: swap`.

### Hierarchy
- **Display** (400, `clamp(3.1rem, 9vw, 6rem)`, 0.98): só o nome do sítio na abertura, centralizado, em duas linhas ("Sítio Recanto / da Mata").
- **Headline** (400, `clamp(2.25rem, 4.8vw, 3.75rem)`, 1.04, -0.01em): título de cada seção (`h2`). Em verde sobre areia; em `sobre-verde` sobre verde. Quebra equilibrada (`text-wrap: balance`).
- **Headline de Ambiente** (400, `clamp(2.25rem, 4.4vw, 3.25rem)`, 1.05): o nome de cada ambiente ("4 suítes", "Casa com 3 quartos").
- **Title** (400, 1.75rem, 1.15): títulos de terceiro nível em Caslon — ocasiões, grupos do Lazer (1.875rem), links do menu do celular, nome no rodapé.
- **Número** (400, até `clamp(2.75rem, 7vw, 4.25rem)`, 1, algarismos alinhados): números em destaque — o preço na Reserva e os números da faixa de fatos (2rem no celular, 2.5rem no computador). Números sempre em Caslon com `lining-nums`.
- **Lead** (400, 1.1875rem, 1.65): o parágrafo de abertura de cada seção, em `tinta-2`. O parágrafo de destaque da introdução sobe para `clamp(1.25rem, 2.2vw, 1.4375rem)` em `tinta`.
- **Body** (400, 1.125rem, 1.65): todo o texto corrido. Medida limitada a cerca de 34–36rem.
- **Item** (650, 1.125rem, 1.35): nome de cada item em listas (lazer, lista de fatos, local), com a descrição embaixo em body menor (1rem) e cor suave.
- **Small** (400, 0.9375rem): legendas de foto, rodapé, notas.
- **Label** (700, 0.8125rem, 0.14em, caixa-alta): botões, menu, links de ação, rótulos de campo (0.12em), filtros (0.1em) e rótulos dos fatos (600). No botão de largura total do celular o espaçamento cai para 0.08em, para o texto caber.

### Named Rules
**A Regra do Caslon em Paz.** O Caslon só aparece em peso 400 e nunca em caixa-alta: a elegância dele vem do desenho, não de negrito nem de espaçamento. Força em título se consegue com tamanho.

**A Regra do Rótulo Espaçado.** Tudo que é ação ou rótulo (botão, menu, nome de campo) é Figtree 700 em caixa-alta com 0.12–0.14em de espaçamento. Texto que se lê nunca fica em caixa-alta.

## Layout

Coluna central de no máximo 1240px (`largura`), com margem lateral fluida (`gutter`, de 16px no celular a 56px no computador). A partir de 960px, intro e ambientes usam uma grade de 12 colunas com 24px de espaço entre colunas (`coluna`): texto em 4–6 colunas, fotos em 7. Os ambientes alternam o lado da foto (o do meio é invertido). Fotos de abertura, faixa de frase e "Onde fica" ocupam a largura toda da tela.

Seções comuns têm `secao` de respiro vertical (80 a 144px); a lista de ocasiões, que funciona como continuação da faixa de foto, usa um respiro menor (56 a 96px). Cabeçalhos de seção ficam limitados a 46rem e, nas seções de catálogo (Ambientes, Lazer, Galeria), centralizados.

A Reserva é a única seção dividida em duas metades de 50% a partir de 1000px: informações sobre verde à esquerda, formulário sobre areia à direita, as duas alinhadas à coluna central. No celular, empilham.

Celular primeiro. Os pontos de quebra observados: 700px (galeria 2→3 colunas, abertura muda o enquadramento da foto), 900px (Lazer em 3 colunas, ocasiões em 5, rodapé em 2), 960px (grade de 12 colunas), 1000px (menu completo no topo, fatos em uma linha, Reserva em duas metades) e 1100px (galeria em 4 colunas).

O topo é fixo, com 72px (`topo`), transparente sobre a foto da abertura e areia sólida depois de 40px de rolagem. A rolagem por âncora desconta essa altura. Todo alvo de toque tem no mínimo 44px (`toque`); botões principais e campos têm 54px (`botao`). O botão flutuante e o rodapé respeitam a área segura do iPhone (`env(safe-area-inset-*)`).

### Named Rules
**A Regra do Toque Grande.** Nenhum elemento que se toca tem menos de 44px de altura; botão principal e campo de formulário têm 54px. Link de texto também ganha os 44px (por `min-height`), não só o botão.

## Elevation & Depth

O sistema é plano. Profundidade vem da sobreposição de foto e chão, da troca de chão entre seções e do véu escuro sobre as fotos — não de sombra. Há três exceções, todas funcionais: o filete de 1px que aparece sob o topo quando ele fica sólido, uma sombra difusa curta sob o botão flutuante (que precisa se destacar de qualquer foto que passe por baixo) e uma sombra de texto bem macia na abertura, para o título ler sobre a foto.

### Shadow Vocabulary
- **Filete do topo** (`box-shadow: 0 1px 0 var(--linha)`): só no topo sólido ou com menu aberto.
- **Sombra do flutuante** (`box-shadow: 0 8px 16px -8px rgb(12 22 15 / 0.6)`): só no botão flutuante do WhatsApp.
- **Halo do título** (`text-shadow: 0 1px 18px rgb(8 16 11 / 0.35)`): só no texto da abertura, sobre a foto.
- **Véu de foto** (degradê `rgb(12 22 15 / 0.15 → 0.80)`): sobre toda foto que carrega texto. Na abertura, mais escuro em cima (atrás do topo) e embaixo (atrás da faixa de fatos); no celular, mais escuro no meio também.

### Named Rules
**A Regra do Chão Plano.** Superfícies não flutuam. Caixa, cartão e seção ficam rentes ao chão; sombra só existe no que de fato flutua sobre a página (o botão do WhatsApp) e no que precisa ler sobre foto.

**A Regra do Véu.** Texto sobre foto exige véu em degradê do verde quase preto (`veu`), nunca preto puro e nunca caixa opaca por cima da imagem. A foto continua visível; o véu só baixa a luz onde o texto passa.

## Shapes

Tudo é reto (`reto`, 0px): botões, campos, opções, filtros, caixas, prévia, fotos e o botão flutuante. Os cantos vivos são a assinatura do estilo e casam com os filetes de 1px. O círculo (`circulo`) é a única forma curva e aparece só em dois lugares: os números dos passos da Reserva (44px, contorno de latão) e os botões do visor de fotos (52px, contorno branco a 30%).

Fotos são recortadas em proporção fixa com `object-fit: cover`: 4:3 é o padrão (galeria, ambientes, introdução); 3:4 só na foto menor da introdução no computador. Nos ambientes, uma foto de detalhe menor se sobrepõe ao canto da foto principal, separada dela por um recorte da cor do chão (6px no celular, 10px no computador) — é esse recorte, e não uma moldura, que faz a sobreposição ler.

Filetes de 1px (`linha` sobre areia, `linha-clara` sobre verde, `latao` para destaque) dividem itens de lista, os fatos da abertura, as colunas de ocasiões e o rodapé.

## Components

### Buttons
Retos, firmes e discretos: um retângulo verde com rótulo espaçado em caixa-alta.
- **Shape:** canto vivo (0px), borda de 1px da mesma cor do fundo.
- **Primary:** fundo `verde`, texto `areia`, 54px de altura, 14px × 28px de recheio, rótulo label (13px, 700, 0.14em). Ícone de 20px à esquerda, 12px de espaço.
- **Hover:** fundo e borda passam para `verde-2` em 0.25s.
- **Claro:** fundo `areia`, texto `verde` — o botão sobre a foto da abertura. No hover, vai a branco.
- **Contorno:** transparente, borda e texto na cor do contexto, 44px de altura; no hover, enche de areia com texto verde. É o "Consultar datas" do topo no computador.
- **Largo:** ocupa a largura toda (envio do formulário; botão da abertura no celular).
- **Links de ação:** `link-verde` (sobre areia) e `link-claro` (sobre foto) usam o mesmo rótulo espaçado, sublinhado de 1px a 5px do texto — em latão no verde, em areia a 50% no claro —, com 44px de alvo.

### Chips
- **Filtro da galeria:** retângulo reto de 44px, borda verde a 35%, texto verde em label (0.1em) e a contagem de fotos ao lado, sem caixa-alta e com algarismos tabulares. Hover acende a borda em verde cheio. Ativo (`aria-pressed="true"`): enche de verde com texto areia. No celular, a fileira rola na horizontal sem barra visível.
- **Opção do formulário:** a mesma forma, com fundo branco, borda tinta a 28% e texto em 15px/600. Marcada: verde com texto areia. O botão de rádio real fica invisível por cima, ocupando a opção toda.

### Cards / Containers
O sistema quase não usa caixas: listas e seções se resolvem com filetes e chão.
- **Caixa sobre foto ("Onde fica"):** fundo `areia`, canto vivo, sem sombra, recheio de 28 a 48px, no máximo 30rem, apoiada sobre a foto com véu a 35%.
- **Prévia da mensagem:** fundo `areia-2`, filete de latão de 1px só à esquerda, recheio de 16px × 18px, rótulo pequeno em caixa-alta e o texto da mensagem com quebras de linha preservadas.
- **Placa de preço:** sem caixa — só filetes claros em cima e embaixo, "a partir de" em Figtree pequeno sobre o valor em Caslon grande, e a nota em `sobre-verde-2`.

### Inputs / Fields
- **Style:** fundo branco, borda de 1px em tinta a 30%, canto vivo, 54px de altura, texto 17px. Rótulo acima em label (0.12em, `tinta`).
- **Hover:** borda escurece para tinta a 55%.
- **Focus:** contorno de 2px em `verde`, sem afastamento, e a borda também vira verde. O cursor de digitação é verde.
- **Contador de pessoas:** campo numérico central com algarismos tabulares em negrito, entre dois botões quadrados de 54px com ícone de menos/mais; os três se encostam numa peça só de até 240px.
- **Aviso:** sem vermelho. O aviso do formulário é uma linha em verde, 600.

### Navigation
- **Topo:** fixo, 72px. Sobre a foto, transparente com texto areia; depois de rolar, areia sólida com texto verde e filete de 1px embaixo (transição de 0.35s). O nome "Recanto da Mata" fica à esquerda em Caslon 24px.
- **Computador (≥1000px):** cinco links em label (600, 0.14em), com sublinhado em latão no hover, e o botão de contorno "Consultar datas" à direita.
- **Celular:** botão "Menu" com dois traços que viram um X. Abre um painel areia de altura inteira, com os links em Caslon 28px separados por filetes, e o botão verde do WhatsApp no fim. A página atrás não rola enquanto o menu está aberto; Esc fecha.
- **Rodapé:** chão verde, nome em Caslon, os mesmos cinco links em label, nota final separada por filete claro.

### Faixa de Fatos (componente-assinatura)
A faixa areia que fecha a abertura e responde em segundos "o que tem e quanto custa": 3 ambientes, 4 suítes, 2 piscinas e o preço de entrada. Número grande em Caslon com o rótulo em caixa-alta pequena embaixo, separados por filetes de 1px. Duas colunas no celular; uma linha de quatro no computador, com a coluna do preço mais larga (1.35fr).

### Lista do Lazer (componente-assinatura)
Sobre o chão verde, três grupos ("Água", "Mesa e fogo", "Ao ar livre"), cada um com título em Caslon sobre filete de latão. Cada item é um ícone de traço de 30px em latão, o nome em item (650) e uma linha de descrição em `sobre-verde-2`, separados por filete claro. É assim que o sistema mostra o que não tem foto: em texto, com ícone de traço, nunca com imagem de banco.

### Passos da Reserva
Lista numerada de três passos sobre verde: número em Caslon dentro de um círculo de 44px com contorno de latão, título em Figtree 700 e explicação em `sobre-verde-2`.

### Botão Flutuante do WhatsApp
Retângulo verde de 56px com borda areia de 2px e a única sombra do sistema. Entra subindo (0.45s) depois que a pessoa passa da abertura, e some enquanto a seção de Reserva está na tela, para não competir com o formulário. Respeita a área segura do iPhone.

### Visor de Fotos
Um `dialog` de tela inteira em verde quase preto (95%), com a foto centralizada, legenda e contagem ("3 de 19") embaixo. Botões circulares de 52px com borda branca translúcida: fechar no canto, anterior/próxima nas laterais (no celular, embaixo, ao alcance do polegar). Troca por seta do teclado e por deslizar o dedo; tocar fora da foto fecha.

### Iconografia
Ícones desenhados à mão em SVG embutido, grade de 24, só traço de 1.5px com pontas e junções arredondadas, sem cor própria (`currentColor`), sempre `aria-hidden`. Tamanhos: 20px em botões, 24px no flutuante, 26px no local, 30px no Lazer. O ícone do WhatsApp é um balão de conversa com telefone desenhado no mesmo traço, não o logotipo colorido.

### Movimento
Uma só curva para tudo, `cubic-bezier(0.16, 1, 0.3, 1)` (saída longa e macia). Na abertura, a foto assenta devagar (escala de 1.08 para 1 em 9s) e o texto sobe uma vez, 18px, em 1.1s, com 0.12s de atraso entre as linhas. Na galeria, a foto cresce 4% em 0.8s no hover. Trocas de cor duram 0.2–0.25s. Com "reduzir movimento" ligado, as animações nem são ativadas e as transições ficam instantâneas.

## Do's and Don'ts

### Do:
- **Do** usar foto real do sítio, sangrada até a borda, recortada em 4:3 (ou 3:4) com `object-fit: cover`.
- **Do** colocar véu em degradê de `rgb(12 22 15 / …)` sob qualquer texto que fique sobre foto.
- **Do** alternar o chão das seções entre areia, areia funda, verde e foto para marcar a passagem de uma parte para outra.
- **Do** separar itens de lista com filetes de 1px (`linha` sobre areia, `linha-clara` sobre verde).
- **Do** escrever títulos em Libre Caslon Display 400 e todo o resto em Figtree, com texto corrido em 18px.
- **Do** usar o rótulo espaçado (Figtree 700, 13px, caixa-alta, 0.14em) em botões, menu e nomes de campo.
- **Do** manter 44px de alvo em tudo que se toca e 54px em botão principal e campo.
- **Do** levar todo caminho de ação para o WhatsApp, com o ícone de traço do balão ao lado do rótulo.
- **Do** escrever números em destaque (preço, quantidades) em Caslon com algarismos alinhados.
- **Do** dizer em texto, com ícone de traço em latão, o que ainda não tem foto.

### Don't:
- **Don't** usar foto de banco de imagens nem ilustração que se passe pelo sítio.
- **Don't** arredondar botões, campos, caixas ou fotos; o círculo fica restrito aos números dos passos e aos controles do visor.
- **Don't** usar o latão (`#B8925A`) como texto ou fundo sobre areia (2,59:1); quando precisar ser lido sobre areia, use `latao-texto`.
- **Don't** colocar sombra em caixa, cartão ou seção; sombra é só do botão flutuante.
- **Don't** usar carrossel automático, cores fortes ou ícones coloridos — o modelo de chácara que o estilo recusa.
- **Don't** pôr vermelho em aviso de formulário; o aviso é verde.
- **Don't** usar Caslon em negrito ou em caixa-alta.
- **Don't** pôr texto de leitura em caixa-alta; caixa-alta é só para rótulo e ação.
- **Don't** escrever hex solto no meio do CSS quando já existe uma variável de `:root` com o papel certo.
