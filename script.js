const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

  const perguntas= [
    {
        enunciado:"No coração da floresta do Congo, uma nova espécie de planta herbácea chamada Flora Lumina foi descoberta. Seus galhos emitem uma luz suave e pulsante durante a noite, iluminando a vegetação ao redor. Cientistas notaram que a luz da Flora Lumina tem efeitos extraordinários e a descoberta promete revolucionar a medicina e a agricultura. A comunidade científica enfrenta um dilema sobre como utilizar a Flora Lumina.",
        alternativas: [
            {
                texto:"Optam por investir no desenvolvimento de tratamentos médicos baseados nos poderes curativos da planta.",
                afirmacao: "Investir no desenvolvimento de tratamentos médicos baseados na Flora Lumina leva a avanços significativos na medicina, aumentando a esperança de vida e a qualidade dos cuidados de saúde globalmente."
            },
            {
              texto:"Decidem suspender a pesquisa devido aos riscos associados aos efeitos colaterais da planta, priorizando a segurança dos pacientes.",
              afirmacao:"Suspendem a pesquisa devido aos riscos reduz a exposição aos efeitos colaterais, mas também limita o potencial de descobertas que poderiam transformar o tratamento de várias doenças. A crescente demanda pela Flora Lumina afeta as comunidades locais."
            },
        ]
    },
    {
      enunciado:"Como a comunidade e os cientistas lidam com a coleta da Flora Lumina?",
      alternativas: [
        {
          texto:"As comunidades locais se unem aos cientistas para criar um modelo sustentável de coleta.",
          afirmacao:"A colaboração entre comunidades e cientistas resulta em um modelo sustentável que preserva o meio ambiente e garante benefícios mútuos, promovendo a conservação e o desenvolvimento econômico local."
        },
        {
          texto:"A planta é extraída de forma predatória e sem planejamento.",
          afirmacao:"A extração predatória da planta destrói o ecossistema e causa conflitos com as comunidades, levando a uma perda significativa de biodiversidade e ao empobrecimento das populações locais. Os governos começam a intervir na regulamentação da Flora Lumina."
        }
      ]
    },
    {
      enunciado:"Como os governos abordam a regulamentação da Flora Lumina?",
      alternativas:[
        {
          texto:"Implementam uma legislação robusta para a planta.",
          afirmacao:"A implementação de uma legislação robusta cria um equilíbrio entre exploração e preservação, estabelecendo padrões para o uso responsável da planta e protegendo os interesses ecológicos e sociais."
        },
        {
          texto:"Não estabelecem regulamentações eficazes.",
          afirmacao:"A falta de regulamentação eficaz resulta em práticas comerciais irresponsáveis que causam danos ambientais graves e exacerbam os conflitos entre exploração e conservação. As pesquisas clínicas com Flora Lumina têm resultados variados."
        }
      ]
    },
    {
      enunciado:"Quais são os resultados das pesquisas clínicas com a Flora Lumina?",
      alternativas: [
        {
          texto:"A planta proporciona descobertas médicas inovadoras.",
          afirmacao:"As descobertas inovadoras da planta transformam o tratamento de várias condições médicas, tornando-a um recurso valioso para a medicina moderna e melhorando a qualidade de vida de muitos pacientes."
        },
        {
          texto:"Problemas inesperados surgem, resultando em atrasos significativos nas pesquisas.",
          afirmacao:"Os problemas nas pesquisas desaceleram o progresso e diminuem a confiança na planta, resultando em desperdício de recursos e atrasos no desenvolvimento de tratamentos potenciais. O impacto global da Flora Lumina provoca diferentes reações entre defensores do meio ambiente e cientistas."
        }
      ]
    },
    {
      enunciado:"Qual é o impacto global da Flora Lumina sobre a colaboração internacional?",
      alternativas: [
        {
          texto:"Iniciativas internacionais são lançadas para proteger a planta.",
          afirmacao:"As iniciativas de proteção ajudam a garantir a conservação da planta e promovem um esforço global colaborativo, resultando em benefícios a longo prazo para o meio ambiente e a ciência."
        },
        {
          texto:"A controvérsia sobre o uso da planta gera conflitos intensificados entre conservação e exploração.",
          afirmacao:"A intensificação dos conflitos entre conservação e exploração prejudica a cooperação global, dificultando o progresso e comprometendo tanto a proteção ambiental quanto a pesquisa científica."
        }
      ]
    },
  ];


  let atual = 0;
  let perguntaAtual;
  let historiaFinal= "";

  function mostraPergunta() {
    if (atual >= perguntas.length) {
      mostraResultado();
      return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
  }

function mostraAlternativas(){
  for(const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
