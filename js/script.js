// Conteúdo das 8 matérias (gerado por IA).
// Para o futuro podemos inclementar um Apii para gerenciar isso.
const articles = {
  1: {
    title: "Assistentes de Código em Tempo Real",
    content: ` 
    <p>Assistentes que integram sugestões inteligentes ao editor mudaram a produtividade dos desenvolvedores. Neste capítulo apresentamos arquitetura, integração com extensões (VS Code), e padrões para executar inferência local versus na nuvem.</p>
    <h3>Arquitetura sugerida</h3>
    <p>1. Frontend (plugin/extension) envia contexto: trecho de arquivo, posição do cursor, linguagem.<br>
    2. Backend leve que autentica e encaminha para o modelo (local ou API).<br>
    3. Cache local para snippets e políticas de segurança.</p>
    <h3>Exemplo prático</h3>
    <p>Um endpoint que recebe o trecho e retorna 3 sugestões classificadas por relevância; o plugin mostra opções inline e há telemetria anônima para melhorar o modelo.</p>
    <p><em>Legenda: conteúdo gerado por IA.</em></p>`,
  },
  2: {
    title: "CI/CD com Inteligência",
    content: `
    <p>Modelos podem priorizar testes, prever flakiness e sugerir rollback. A integração com pipeline permite reduzir tempo de build e evitar deploys arriscados.</p>
    <h3>Boas práticas</h3>
    <ul>
      <li>Adicionar classificação de risco em cada PR.</li>
      <li>Executar apenas testes relevantes usando análise estática combinada com diff-aware testing.</li>
      <li>Monitorar pós-deploy com alertas baseados em anomalias.</li>
    </ul>
    <p><em>Legenda: conteúdo gerado por IA.</em></p>`,
  },
  3: {
    title: "Observability Aumentada por IA",
    content: `
    <p>A IA pode correlacionar logs, métricas e traces automaticamente, sugerindo pontos de investigação quando detecta padrões incomuns.</p>
    <h3>Implementação</h3>
    <p>Use pipelines de telemetria que rotulam eventos e treinam modelos de anomalia. Ofereça playbooks automáticos sugeridos pelo sistema.</p>
    <p><em>Legenda: conteúdo gerado por IA.</em></p>`,
  },
  4: {
    title: "ChatOps e Automação",
    content: `
    <p>Integre chatbots para executar runbooks, criar tickets e disparar rotinas. O importante é manter controle de acesso e logs auditáveis.</p>
    <h3>Segurança</h3>
    <p>Use scopes, aprovação humana para ações sensíveis e simulações antes de executar comandos reais.</p>
    <p><em>Legenda: conteúdo gerado por IA.</em></p>`,
  },
  5: {
    title: "ModelOps: Levando Modelos à Produção",
    content: `
    <p>ModelOps trata do ciclo completo: versionamento, testes, deploy, monitoramento de desempenho e drift.</p>
    <h3>Checklist</h3>
    <ol>
      <li>Versionar pesos e código.</li>
      <li>Testes de regressão e fairness.</li>
      <li>Monitorar latência, acurácia e custo.</li>
    </ol>
    <p><em>Legenda: conteúdo gerado por IA.</em></p>`,
  },
  6: {
    title: "Segurança e Privacidade",
    content: `
    <p>Ao trabalhar com IA, proteja dados sensíveis, utilize anonimização e crie políticas rigorosas de acesso a modelos e logs.</p>
    <h3>Recomendações</h3>
    <ul>
      <li>Tokenização/anonimização de dados de treinamento</li>
      <li>Auditoria de prompts e acesso</li>
      <li>Testes de adversarial robustness</li>
    </ul>
    <p><em>Legenda: conteúdo gerado por IA.</em></p>`,
  },
  7: {
    title: "Aumento de Produtividade com IA",
    content: `
    <p>Plugins, snippets inteligentes e automações liberam tempo de desenvolvedores para tarefas criativas. Aprenda a mapear processos que podem ser automatizados de forma segura.</p>
    <h3>Exemplos</h3>
    <p>Geração de testes unitários, templates de infra como código e revisão automática de PRs.</p>
    <p><em>Legenda: conteúdo gerado por IA.</em></p>`,
  },
  8: {
    title: "Futuro e Ética",
    content: `
    <p>Discussões sobre desemprego tecnológico, viés algorítmico e responsabilidade das equipes são centrais ao adotar IA em escala.</p>
    <h3>Direcionamentos</h3>
    <p>Transparência, governança e inclusão devem orientar a adoção de IA.</p>
    <p><em>Legenda: conteúdo gerado por IA.</em></p>`,
  },
};

document.addEventListener("DOMContentLoaded", () => {
  // adiciona listeners aos botões
  document.querySelectorAll(".btn-read").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      openArticle(id);
    });
  });

  document.getElementById("modalClose").addEventListener("click", closeModal);
  // fechar com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});

function openArticle(id) {
  const article = articles[id];
  if (!article) return;
  const modal = document.getElementById("readerModal");
  const content = document.getElementById("modalContent");
  content.innerHTML = `
    <h2>${article.title}</h2>
    ${article.content}
  `;
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const modal = document.getElementById("readerModal");
  modal.setAttribute("aria-hidden", "true");
  document.getElementById("modalContent").innerHTML = "";
}
