/* ==========================================================================
   NÚMERO DO WHATSAPP DAS RESERVAS
   É o único lugar que precisa mudar. Escreva só os números, começando por
   55 (Brasil) e o DDD. Exemplo: "5531999999999".
   Enquanto estiver vazio, os botões levam para a seção "Reserve".
   ========================================================================== */
const WHATSAPP = "";

const MENSAGEM_PADRAO =
  "Olá! Vi o site do Sítio Recanto da Mata e gostaria de consultar as datas disponíveis para um fim de semana.";

(function () {
  "use strict";

  const numero = WHATSAPP.replace(/\D/g, "");
  const temNumero = numero.length >= 12;
  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

  /* ---------- Topo: sombra ao rolar ---------- */

  const topo = document.querySelector("[data-topo]");
  if (topo) {
    const marcaRolagem = function () {
      topo.classList.toggle("rolou", window.scrollY > 8);
    };
    marcaRolagem();
    window.addEventListener("scroll", marcaRolagem, { passive: true });
  }

  /* ---------- Janela da abertura ---------- */

  const janela = document.querySelector("[data-janela]");
  if (janela && !reduzMovimento) {
    document.documentElement.classList.add("anima");
    const img = janela.querySelector("img");
    const abrir = function () {
      requestAnimationFrame(function () {
        janela.classList.add("aberta");
      });
    };
    if (img && !img.complete) {
      img.addEventListener("load", abrir, { once: true });
      img.addEventListener("error", abrir, { once: true });
      // Conexão lenta: não deixa a janela fechada esperando a foto.
      setTimeout(abrir, 1800);
    } else {
      abrir();
    }
    const folha = janela.querySelector(".janela__folha--dir");
    if (folha) {
      folha.addEventListener("animationend", function () {
        janela.classList.add("recolhida");
      });
    }
  }

  /* ---------- Barra de reserva no celular ---------- */

  const barra = document.querySelector("[data-barra]");
  const gatilho = document.querySelector("[data-acompanha-barra]");
  const zonasSemBarra = document.querySelectorAll("#reservar, #onde, .rodape");
  if (barra && gatilho && "IntersectionObserver" in window) {
    let passouAbertura = false;
    const zonasVisiveis = new Set();
    const atualiza = function () {
      const mostra = passouAbertura && zonasVisiveis.size === 0;
      barra.classList.toggle("visivel", mostra);
      barra.setAttribute("aria-hidden", mostra ? "false" : "true");
      barra.querySelectorAll("a").forEach(function (a) {
        a.tabIndex = mostra ? 0 : -1;
      });
    };
    new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        passouAbertura = !e.isIntersecting && e.boundingClientRect.top < 0;
      });
      atualiza();
    }).observe(gatilho);
    const obsZonas = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) zonasVisiveis.add(e.target);
        else zonasVisiveis.delete(e.target);
      });
      atualiza();
    });
    zonasSemBarra.forEach(function (z) { obsZonas.observe(z); });
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
