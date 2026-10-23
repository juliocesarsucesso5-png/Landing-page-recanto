/* ==========================================================================
   NÚMERO DO WHATSAPP DAS RESERVAS
   É o único lugar que precisa mudar. Escreva o número com DDD, só os números.
   Exemplo: "31999999999". O 55 do Brasil é colocado sozinho.
   Enquanto estiver vazio, os botões levam para a seção "Reserve".
   ========================================================================== */
const WHATSAPP = "";

const MENSAGEM_PADRAO =
  "Olá! Vi o site do Sítio Recanto da Mata e gostaria de consultar as datas disponíveis para um fim de semana.";

(function () {
  "use strict";

  // Aceita "(31) 99999-9999", "31999999999" ou "5531999999999".
  let numero = WHATSAPP.replace(/\D/g, "");
  if (numero.length === 10 || numero.length === 11) numero = "55" + numero;
  const temNumero = /^55\d{10,11}$/.test(numero);

  function linkWhatsApp(texto) {
    return "https://wa.me/" + numero + "?text=" + encodeURIComponent(texto);
  }

  // (31) 99999-9999 a partir de 5531999999999
  function numeroLegivel() {
    const local = numero.slice(2);
    const ddd = local.slice(0, 2);
    const resto = local.slice(2);
    const corte = resto.length - 4;
    return "(" + ddd + ") " + resto.slice(0, corte) + "-" + resto.slice(corte);
  }

  /* ---------- Botões de WhatsApp ---------- */

  if (temNumero) {
    document.querySelectorAll("[data-whatsapp]").forEach(function (a) {
      a.href = linkWhatsApp(MENSAGEM_PADRAO);
      a.target = "_blank";
      a.rel = "noopener";
    });
    const alvo = document.querySelector("[data-numero]");
    const embrulho = document.querySelector("[data-numero-wrap]");
    if (alvo && embrulho) {
      alvo.textContent = numeroLegivel();
      embrulho.hidden = false;
    }
  }

  /* ---------- Topo: transparente sobre a foto, sólido depois dela ---------- */

  const topo = document.querySelector("[data-topo]");
  const abertura = document.querySelector(".abertura");
  const flutuante = document.querySelector("[data-flutuante]");
  const reservar = document.querySelector("#reservar");

  const aoRolar = function () {
    const limite = abertura ? abertura.offsetHeight - 120 : 200;
    const passou = window.scrollY > limite;
    if (topo) topo.classList.toggle("solido", window.scrollY > 40);
    if (flutuante) {
      let mostra = passou;
      if (reservar) {
        const r = reservar.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.75 && r.bottom > window.innerHeight * 0.25) mostra = false;
      }
      flutuante.classList.toggle("visivel", mostra);
    }
  };
  aoRolar();
  window.addEventListener("scroll", aoRolar, { passive: true });
  window.addEventListener("resize", aoRolar);

  /* ---------- Menu do celular ---------- */

  const botaoMenu = document.querySelector("[data-menu-botao]");
  const menu = document.querySelector("[data-menu]");
  if (botaoMenu && menu && topo) {
    const fecha = function () {
      menu.hidden = true;
      botaoMenu.setAttribute("aria-expanded", "false");
      topo.classList.remove("aberto");
    };
    botaoMenu.addEventListener("click", function () {
      const abrir = menu.hidden;
      menu.hidden = !abrir;
      botaoMenu.setAttribute("aria-expanded", abrir ? "true" : "false");
      topo.classList.toggle("aberto", abrir);
    });
    menu.addEventListener("click", function (ev) {
      if (ev.target.closest("a")) fecha();
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && !menu.hidden) {
        fecha();
        botaoMenu.focus();
      }
    });
  }

  /* ---------- Galeria: filtros ---------- */

  const galeria = document.querySelector("[data-galeria]");
  const itens = galeria ? Array.from(galeria.querySelectorAll("li")) : [];
  const filtros = document.querySelectorAll("[data-filtro]");

  document.querySelectorAll("[data-conta]").forEach(function (span) {
    const grupo = span.getAttribute("data-conta");
    const total = grupo === "todas"
      ? itens.length
      : itens.filter(function (li) { return li.dataset.grupo === grupo; }).length;
    span.textContent = String(total);
  });

  filtros.forEach(function (botao) {
    botao.addEventListener("click", function () {
      const grupo = botao.dataset.filtro;
      filtros.forEach(function (b) {
        b.setAttribute("aria-pressed", b === botao ? "true" : "false");
      });
      itens.forEach(function (li) {
        li.hidden = grupo !== "todas" && li.dataset.grupo !== grupo;
      });
    });
  });

  /* ---------- Visor de fotos ---------- */

  const visor = document.querySelector("[data-visor]");
  if (visor && typeof visor.showModal === "function" && galeria) {
    const vImg = visor.querySelector("[data-visor-img]");
    const vLegenda = visor.querySelector("[data-visor-legenda]");
    const vConta = visor.querySelector("[data-visor-conta]");
    let lista = [];
    let atual = 0;

    const mostra = function (i) {
      atual = (i + lista.length) % lista.length;
      const link = lista[atual];
      const original = link.querySelector("img");
      vImg.src = link.getAttribute("href");
      vImg.alt = original ? original.alt : "";
      vLegenda.textContent = link.dataset.legenda || "";
      vConta.textContent = atual + 1 + " de " + lista.length;
      // pré-carrega a vizinha
      const prox = lista[(atual + 1) % lista.length];
      if (prox) new Image().src = prox.getAttribute("href");
    };

    galeria.addEventListener("click", function (ev) {
      const link = ev.target.closest("[data-foto]");
      if (!link) return;
      ev.preventDefault();
      lista = itens
        .filter(function (li) { return !li.hidden; })
        .map(function (li) { return li.querySelector("[data-foto]"); });
      mostra(lista.indexOf(link));
      visor.showModal();
    });

    visor.querySelector("[data-visor-fechar]").addEventListener("click", function () { visor.close(); });
    visor.querySelector("[data-visor-ant]").addEventListener("click", function () { mostra(atual - 1); });
    visor.querySelector("[data-visor-prox]").addEventListener("click", function () { mostra(atual + 1); });

    visor.addEventListener("keydown", function (ev) {
      if (ev.key === "ArrowLeft") { ev.preventDefault(); mostra(atual - 1); }
      if (ev.key === "ArrowRight") { ev.preventDefault(); mostra(atual + 1); }
    });

    // tocar fora da foto fecha
    visor.addEventListener("click", function (ev) {
      if (ev.target === visor || ev.target.classList.contains("visor__figura")) visor.close();
    });

    // deslizar o dedo troca de foto
    let inicioX = null;
    vImg.addEventListener("pointerdown", function (ev) { inicioX = ev.clientX; });
    vImg.addEventListener("pointerup", function (ev) {
      if (inicioX === null) return;
      const dx = ev.clientX - inicioX;
      inicioX = null;
      if (Math.abs(dx) > 45) mostra(dx < 0 ? atual + 1 : atual - 1);
    });
  }

  /* ---------- Monte sua mensagem ---------- */

  const form = document.querySelector("[data-mensagem]");
  if (form) {
    const chegada = form.querySelector("#chegada");
    const pessoas = form.querySelector("#pessoas");
    const previa = form.querySelector("[data-previa]");
    const aviso = form.querySelector("[data-aviso]");

    const hoje = new Date();
    const doisDigitos = function (n) { return String(n).padStart(2, "0"); };
    chegada.min = hoje.getFullYear() + "-" + doisDigitos(hoje.getMonth() + 1) + "-" + doisDigitos(hoje.getDate());

    const dataPorExtenso = function (valor) {
      const partes = valor.split("-").map(Number);
      if (partes.length !== 3 || partes.some(isNaN)) return "";
      const d = new Date(partes[0], partes[1] - 1, partes[2]);
      return new Intl.DateTimeFormat("pt-BR", {
        weekday: "long", day: "2-digit", month: "2-digit", year: "numeric"
      }).format(d);
    };

    const quantas = function () {
      const n = parseInt(pessoas.value, 10);
      return isNaN(n) || n < 1 ? 0 : Math.min(n, 500);
    };

    const montaTexto = function () {
      const linhas = ["Olá! Vi o site do Sítio Recanto da Mata e gostaria de consultar a disponibilidade."];
      const data = chegada.value ? dataPorExtenso(chegada.value) : "";
      const n = quantas();
      const ocasiao = form.querySelector("input[name=ocasiao]:checked");
      if (data) linhas.push("Chegada: " + data);
      if (n) linhas.push("Pessoas: " + n);
      if (ocasiao) linhas.push("Ocasião: " + ocasiao.value);
      linhas.push(data ? "A data está livre? Qual seria o valor para o nosso grupo?" : "Quais datas estão livres e qual seria o valor para o nosso grupo?");
      return linhas.join("\n");
    };

    const atualiza = function () {
      previa.textContent = montaTexto();
      aviso.textContent = "";
    };

    form.querySelectorAll("[data-passo]").forEach(function (b) {
      b.addEventListener("click", function () {
        const passo = Number(b.dataset.passo);
        pessoas.value = String(Math.max(1, Math.min(500, (quantas() || 0) + passo)));
        atualiza();
      });
    });

    form.addEventListener("input", atualiza);
    form.addEventListener("change", atualiza);

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!temNumero) {
        aviso.textContent = "O número do WhatsApp ainda não foi configurado nesta página.";
        return;
      }
      window.open(linkWhatsApp(montaTexto()), "_blank", "noopener");
    });

    atualiza();
  }

  /* ---------- Ano no rodapé ---------- */

  const ano = document.querySelector("[data-ano]");
  if (ano) ano.textContent = String(new Date().getFullYear());
})();
