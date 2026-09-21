import { Link } from 'react-router-dom'

const LegalPage = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <main className="min-h-screen bg-[#f7fbf8] px-5 py-12 text-slate-900">
    <div className="mx-auto max-w-3xl rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm md:p-12">
      <Link to="/" className="text-sm font-bold text-emerald-700">
        ← Voltar ao site
      </Link>
      <h1 className="mt-8 text-3xl font-black text-emerald-950">{title}</h1>
      <p className="mt-3 text-sm text-amber-700">
        Minuta operacional — revisar e aprovar antes da cobrança ou publicação jurídica.
      </p>
      <div className="prose prose-slate mt-8 max-w-none text-sm leading-7">{children}</div>
    </div>
  </main>
)

export const Privacy = () => (
  <LegalPage title="Política de Privacidade">
    <p>
      Esta é uma minuta inicial da Política de Privacidade do Família Finance. O texto final deverá
      identificar o controlador, o encarregado, as finalidades, bases legais, categorias de dados,
      retenção, suboperadores, transferências, direitos dos titulares e canal de atendimento.
    </p>
    <h2>Dados financeiros e familiares</h2>
    <p>
      O produto poderá tratar dados informados pelo usuário para organizar contas, transações,
      metas, dívidas, documentos e membros autorizados da família. O acesso administrativo deve ser
      limitado e auditado.
    </p>
    <h2>Aura e inteligência artificial</h2>
    <p>
      A Aura poderá processar mensagens e documentos para gerar explicações e sugestões. Ações que
      alterem dados devem exigir confirmação. O usuário deverá receber informação clara sobre a
      finalidade e os limites do processamento.
    </p>
    <h2>Direitos</h2>
    <p>
      O titular poderá solicitar confirmação, acesso, correção, eliminação quando aplicável,
      portabilidade nos termos regulamentados, informação sobre compartilhamentos e revogação de
      consentimentos.
    </p>
  </LegalPage>
)

export const Terms = () => (
  <LegalPage title="Termos de Uso">
    <p>
      Esta é uma minuta inicial dos Termos de Uso. O serviço oferece organização financeira familiar
      e assistência informacional; não substitui contador, advogado, consultor de investimentos,
      instituição financeira ou atendimento de emergência.
    </p>
    <h2>Planos e beta</h2>
    <p>
      Preços, franquias, membros, canais e condições devem ser exibidos antes da contratação. O Beta
      Fundadores é gratuito durante o programa conforme regras e prazo que serão formalizados.
    </p>
    <h2>Confirmação</h2>
    <p>
      Importações, registros e outras ações relevantes podem exigir confirmação do usuário. A Aura
      não deve prometer resultado financeiro, aprovação de crédito ou economia garantida.
    </p>
    <h2>Cancelamento</h2>
    <p>
      O cancelamento, reembolso e direito de arrependimento serão oferecidos conforme a legislação
      aplicável e as condições exibidas na contratação.
    </p>
  </LegalPage>
)
