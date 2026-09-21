import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  MessageCircle,
  LockKeyhole,
} from 'lucide-react'

const plans = [
  {
    name: 'Essencial',
    price: '9,90',
    members: '1 pessoa',
    description: 'Para começar a organizar sua vida financeira com ajuda da Aura.',
  },
  {
    name: 'Família',
    price: '15,90',
    members: 'até 4 pessoas',
    description: 'Para famílias, casais e pessoas que moram juntas. O plano principal.',
    featured: true,
  },
  {
    name: 'Família + WhatsApp',
    price: '29,90',
    members: 'até 8 pessoas',
    description: 'Mais membros, mais franquia e o canal WhatsApp quando disponível.',
  },
]
const Index = () => (
  <main className="min-h-screen bg-[#f7fbf8] text-slate-900">
    <header className="sticky top-0 z-20 border-b border-emerald-100/80 bg-[#f7fbf8]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#inicio"
          className="flex items-center gap-2 font-extrabold tracking-tight text-emerald-900"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-600 text-white">
            <Wallet className="h-5 w-5" />
          </span>{' '}
          Família Finance
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
          <a href="#como-funciona">Como funciona</a>
          <a href="#planos">Planos</a>
          <a href="#seguranca">Segurança</a>
        </nav>
        <a
          href="#interesse"
          className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-emerald-700"
        >
          Quero conhecer
        </a>
      </div>
    </header>
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-20 md:grid-cols-[1.05fr_.95fr] md:pb-28 md:pt-28">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-xs font-bold text-emerald-800">
            <Sparkles className="h-4 w-4" /> Organização financeira para quem vive junto
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-emerald-950 md:text-6xl">
            O dinheiro da casa mais claro, combinado e possível.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            O Família Finance ajuda famílias, casais e pessoas que moram juntas a entender contas,
            organizar objetivos e tomar decisões melhores — com uma Aura financeira para orientar
            cada passo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700"
            >
              Conhecer os planos <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 py-3 font-bold text-emerald-800"
            >
              Ver como funciona
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Acesso à Aura em todos os planos, com franquias e capacidades diferentes. Sem promessa
            de uso ilimitado.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="relative rounded-3xl border border-emerald-100 bg-white p-5 shadow-2xl shadow-emerald-900/10">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Visão da casa
                </p>
                <p className="mt-1 text-xl font-extrabold text-slate-900">Março 2026</p>
              </div>
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
                <Users className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-emerald-50 p-4">
                <p className="text-xs font-semibold text-emerald-700">Saldo do mês</p>
                <p className="mt-2 text-2xl font-black text-emerald-900">R$ 2.480</p>
                <p className="mt-1 text-xs text-emerald-700">visão compartilhada</p>
              </div>
              <div className="rounded-2xl bg-amber-50 p-4">
                <p className="text-xs font-semibold text-amber-700">A vencer</p>
                <p className="mt-2 text-2xl font-black text-amber-900">R$ 860</p>
                <p className="mt-1 text-xs text-amber-700">próximos 7 dias</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-slate-100 p-4">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-emerald-600 p-2 text-white">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-bold">Aura sugere um próximo passo</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Há uma conta próxima do vencimento e uma meta da casa em andamento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="como-funciona" className="border-y border-emerald-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-extrabold uppercase tracking-wider text-emerald-600">
            Como funciona
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-emerald-950 md:text-4xl">
            Uma visão que respeita a vida real.
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Cada pessoa pode ter sua visão, enquanto a casa enxerga o que precisa ser combinado. A
            Aura explica, organiza e sugere — você confirma antes de qualquer ação.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-[#f7fbf8] p-6">
            <Users className="h-6 w-6 text-emerald-600" />
            <h3 className="mt-5 font-extrabold">Quem mora junto, junto no plano</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Membros, contas e responsabilidades em uma experiência pensada para a casa.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-[#f7fbf8] p-6">
            <Sparkles className="h-6 w-6 text-emerald-600" />
            <h3 className="mt-5 font-extrabold">Ajuda sem julgamento</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A Aura transforma dados em explicações e próximos passos compreensíveis.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-[#f7fbf8] p-6">
            <Wallet className="h-6 w-6 text-emerald-600" />
            <h3 className="mt-5 font-extrabold">Decisão antes da ação</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Importações, registros e mudanças importantes passam por confirmação.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="planos" className="mx-auto max-w-6xl px-5 py-20">
      <div className="text-center">
        <p className="text-sm font-extrabold uppercase tracking-wider text-emerald-600">
          Planos em definição
        </p>
        <h2 className="mt-3 text-3xl font-black text-emerald-950 md:text-4xl">
          Comece pelo tamanho da sua casa.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Valores aprovados para a hipótese comercial inicial. O checkout será liberado após a
          homologação do pagamento.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`relative rounded-3xl border p-6 ${plan.featured ? 'border-emerald-500 bg-emerald-950 text-white shadow-xl shadow-emerald-900/20' : 'border-slate-200 bg-white'}`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-6 rounded-full bg-amber-400 px-3 py-1 text-xs font-black text-amber-950">
                Plano principal
              </span>
            )}
            <h3 className="text-xl font-black">{plan.name}</h3>
            <p
              className={`mt-3 text-sm leading-6 ${plan.featured ? 'text-emerald-100' : 'text-slate-600'}`}
            >
              {plan.description}
            </p>
            <p className="mt-7 text-4xl font-black">
              R$ {plan.price}
              <span
                className={`text-sm font-semibold ${plan.featured ? 'text-emerald-200' : 'text-slate-500'}`}
              >
                /mês
              </span>
            </p>
            <p
              className={`mt-2 text-sm font-bold ${plan.featured ? 'text-emerald-200' : 'text-emerald-700'}`}
            >
              {plan.members}
            </p>
            <div
              className={`my-6 border-t ${plan.featured ? 'border-emerald-800' : 'border-slate-100'}`}
            />
            {['Aura incluída', 'Dados da casa organizados', 'Limites claros por plano'].map(
              (item) => (
                <p key={item} className="mb-3 flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-emerald-500" />
                  {item}
                </p>
              ),
            )}
            <a
              href="#interesse"
              className={`mt-5 block rounded-xl px-4 py-3 text-center text-sm font-extrabold ${plan.featured ? 'bg-white text-emerald-950' : 'bg-emerald-600 text-white'}`}
            >
              Quero ser avisado
            </a>
          </article>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-slate-500">
        Plano Beta Fundadores: gratuito durante o programa, com regras e duração a serem
        formalizadas nos termos do beta.
      </p>
    </section>
    <section id="seguranca" className="bg-emerald-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wider text-emerald-300">
            Segurança por princípio
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Seu dinheiro é seu. A operação também precisa provar isso.
          </h2>
          <p className="mt-5 leading-7 text-emerald-100">
            O produto separa o ambiente financeiro do cliente da operação administrativa. Métricas
            agregadas não significam acesso automático ao conteúdo financeiro individual.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-800 bg-emerald-900/40 p-5">
            <ShieldCheck className="h-6 w-6 text-emerald-300" />
            <p className="mt-4 font-extrabold">Privacidade por padrão</p>
            <p className="mt-2 text-sm leading-6 text-emerald-100">
              Acesso administrativo mínimo e auditável.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-800 bg-emerald-900/40 p-5">
            <LockKeyhole className="h-6 w-6 text-emerald-300" />
            <p className="mt-4 font-extrabold">Confirmação antes de gravar</p>
            <p className="mt-2 text-sm leading-6 text-emerald-100">
              A Aura explica e aguarda sua decisão.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-800 bg-emerald-900/40 p-5">
            <MessageCircle className="h-6 w-6 text-emerald-300" />
            <p className="mt-4 font-extrabold">Canais separados</p>
            <p className="mt-2 text-sm leading-6 text-emerald-100">
              WhatsApp oficial será integrado em etapa própria.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-800 bg-emerald-900/40 p-5">
            <Users className="h-6 w-6 text-emerald-300" />
            <p className="mt-4 font-extrabold">Para quem vive junto</p>
            <p className="mt-2 text-sm leading-6 text-emerald-100">
              O diferencial é organizar a casa, não só uma pessoa.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="interesse" className="mx-auto max-w-4xl px-5 py-20 text-center">
      <p className="text-sm font-extrabold uppercase tracking-wider text-emerald-600">
        Próximo passo
      </p>
      <h2 className="mt-3 text-3xl font-black text-emerald-950 md:text-4xl">
        Acompanhe a abertura do beta.
      </h2>
      <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
        O site está em preparação. O cadastro e o checkout serão ativados depois da homologação de
        pagamentos, termos e suporte.
      </p>
      <a
        href="mailto:mestredamente1@gmail.com?subject=Interesse%20no%20Família%20Finance"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-extrabold text-white hover:bg-emerald-700"
      >
        Enviar interesse <ArrowRight className="h-4 w-4" />
      </a>
    </section>
    <footer className="border-t border-emerald-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Família Finance</span>
        <span>
          <a className="hover:text-emerald-700" href="/privacidade">
            Privacidade
          </a>{' '}
          ·{' '}
          <a className="hover:text-emerald-700" href="/termos">
            Termos
          </a>{' '}
          · Site em preparação · Sem cobrança ativa
        </span>
      </div>
    </footer>
  </main>
)
export default Index
