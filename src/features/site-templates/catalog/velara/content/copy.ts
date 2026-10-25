import type { Bilingual } from '../config/brand';
export const nav: { slug: string; label: Bilingual }[] = [
  { slug: '', label: { zh: '概览', en: 'Overview' } }, { slug: 'features', label: { zh: '产品功能', en: 'Features' } },
  { slug: 'pricing', label: { zh: '价格方案', en: 'Pricing' } }, { slug: 'blog', label: { zh: '财务手记', en: 'Journal' } }, { slug: 'contact', label: { zh: '联系我们', en: 'Contact' } },
];
export const benefits = [
  { icon: 'bolt', title: { zh: '即时支付', en: 'Instant payments' }, body: { zh: '轻松查看每一笔转账，让收支变化一目了然。', en: 'Follow your transfers and see every balance change in real time.' } },
  { icon: 'eye', title: { zh: '费用清晰', en: 'No hidden fees' }, body: { zh: '清晰简单的费用展示，始终了解每一项支出。', en: 'Clear and simple pricing. Always be aware of costs.' } },
  { icon: 'wallet', title: { zh: '数字钱包', en: 'Digital wallet' }, body: { zh: '集中查看账户、订阅与预算，财务管理井井有条。', en: 'Bring accounts, subscriptions and budgets into one clear view.' } },
  { icon: 'shield', title: { zh: '安全设计', en: 'Security by design' }, body: { zh: '了解加密、权限与隐私如何构成安全管理体验。', en: 'Explore how encryption, permissions and privacy work together.' } },
  { icon: 'headphones', title: { zh: '随时获得支持', en: 'Support when you need it' }, body: { zh: '从常见问题到使用指南，每一步都有清晰指引。', en: 'Clear guidance at every step, from FAQs to practical guides.' } },
  { icon: 'globe', title: { zh: '全球视野', en: 'Global transfers' }, body: { zh: '跨币种查看财务动态，让全球收支更易理解。', en: 'See your finances across currencies with a global perspective.' } },
];
export const plans = [
  { name: { zh: '基础版', en: 'Basic Plan' }, price: '$10', desc: { zh: '适合开始整理个人收支的你', en: 'For a clearer view of your personal finances' }, features: [{ zh: '智能收支分类', en: 'Smart expense categories' }, { zh: '清晰财务报表', en: 'Simple financial reports' }, { zh: '月度预算管理', en: 'Monthly budgets' }, { zh: '最多 10 个演示账户', en: 'Up to 10 demo accounts' }, { zh: '目标进度跟踪', en: 'Goal tracking' }] },
  { name: { zh: '专业版', en: 'Pro Plan' }, price: '$20', desc: { zh: '为更长远的财务目标而设计', en: 'Built for your longer-term financial goals' }, features: [{ zh: '全部基础功能', en: 'All basic features' }, { zh: '高级趋势洞察', en: 'Advanced trend insights' }, { zh: '订阅与账单提醒', en: 'Subscription and bill alerts' }, { zh: '最多 50 个演示账户', en: 'Up to 50 demo accounts' }, { zh: '多币种报表', en: 'Multi-currency reports' }] },
  { name: { zh: '企业版', en: 'Enterprise Plan' }, price: { zh: '定制', en: 'Custom' }, desc: { zh: '适合需要团队协作的组织', en: 'For organizations managing finances together' }, features: [{ zh: '定制财务看板', en: 'Custom dashboards' }, { zh: '团队访问权限', en: 'Team access controls' }, { zh: '多层级预算', en: 'Multi-level budgets' }, { zh: '专属使用支持', en: 'Dedicated guidance' }, { zh: '灵活的部署规划', en: 'Flexible deployment planning' }] },
];
export const faqs = [
  { q: { zh: '这是可以连接银行的真实产品吗？', en: 'Does this demo connect to my bank?' }, a: { zh: '这是前端展示模板。账户、金额和图表均为演示数据，没有连接银行、支付或投资服务。', en: 'This is a frontend demonstration. Accounts, balances and charts use sample data; no banking, payment or investment services are connected.' } },
  { q: { zh: '智能预算如何帮助我？', en: 'How can smart budgeting help me?' }, a: { zh: '界面演示了收支分类、预算进度和账单提醒。真实应用可在接入经授权的数据服务后实现这些能力。', en: 'The interface demonstrates categories, budget progress and bill alerts. A production application needs an authorized data service to provide these features.' } },
  { q: { zh: '我的数据会被发送或保存吗？', en: 'Is my information sent or saved?' }, a: { zh: '不会。演示表单只在当前浏览器校验，不发送、不保存；请勿输入真实金融账户信息。', en: 'No. Demo forms validate in your browser only and do not send or save entries. Do not enter real financial account details.' } },
  { q: { zh: '支持手机和平板使用吗？', en: 'Can I use it on mobile and tablet?' }, a: { zh: '支持。页面针对电脑、平板和手机调整布局，提供触控菜单、双语切换和可访问的操作控件。', en: 'Yes. Layouts adapt to desktop, tablet and mobile, with touch navigation, language switching and accessible controls.' } },
  { q: { zh: '如何选择合适的方案？', en: 'How do I choose a plan?' }, a: { zh: '价格仅用于演示。你可以比较各方案功能，或前往联系页体验本地表单，不会产生订单或扣费。', en: 'Prices are illustrative. Compare the plans or try the local contact form. No orders or charges are created.' } },
];
export const reviews = [
  { name: 'Emily Smith', place: 'Lyon, France', avatar: 47, quote: { zh: '界面直观清晰，终于能看懂自己的钱花在哪里，也更容易坚持储蓄目标。', en: 'The app is intuitive and easy to navigate, and it helps me see exactly where my money goes.' } },
  { name: 'Michael Brown', place: 'London, UK', avatar: 33, quote: { zh: '把收支集中在一个地方，改变了我管理日常财务的习惯。', en: 'Having everything in one place has completely transformed my relationship with money.' } },
  { name: 'Sarah Jenkins', place: 'Berlin, DE', avatar: 48, quote: { zh: '预算和趋势都清楚了，规划下个月时更有方向。', en: 'The visibility into my future spending is crystal clear now. Planning feels simpler.' } },
  { name: 'Wade Warren', place: 'Michigan, US', avatar: 11, quote: { zh: '从繁杂的账单里找回秩序，财务目标也变得具体可见。', en: 'I have finally taken control of my finances. The goals make progress easy to see.' } },
  { name: 'Jane Cooper', place: 'Montreal, Canada', avatar: 25, quote: { zh: '喜欢这些清晰的小提醒，日常预算管理轻松了许多。', en: 'Clear little reminders make everyday budgeting feel effortless.' } },
  { name: 'Arthur Dent', place: 'Woking, UK', avatar: 12, quote: { zh: '终于不用在许多表格间来回切换，所有信息都触手可及。', en: 'A guide to my financial galaxy. Everything I need is finally within reach.' } },
];
export const articles = [
  { slug: 'a-clearer-budget', category: { zh: '预算入门', en: 'BUDGETING' }, title: { zh: '从一份清晰的月度预算开始', en: 'Start with a clearer monthly budget' }, intro: { zh: '先理解支出，再为真正重要的事情留出空间。', en: 'Understand your spending, then make room for what matters.' }, paragraphs: [
    { zh: '预算的第一步不是限制，而是观察。将一个月的支出分为固定账单、日常需要和灵活消费，找出你的真实节奏。', en: 'The first step is observation. Group a month of spending into fixed bills, daily essentials and flexible purchases to understand your actual habits.' },
    { zh: '为每类支出设定合理的范围，并留出弹性空间。每周花十分钟回顾，比一开始制定过于严格的数字更容易坚持。', en: 'Set a reasonable range for each category and leave some flexibility. A ten-minute weekly review is easier to sustain than rigid targets.' },
    { zh: '本手记只提供一般性信息，不构成财务建议。演示数据不反映任何真实账户。', en: 'This journal provides general information, not financial advice. Sample data does not represent real accounts.' },
  ] },
  { slug: 'small-saving-habits', category: { zh: '储蓄习惯', en: 'SAVING' }, title: { zh: '让小习惯成为长期目标的起点', en: 'Small habits, longer-term goals' }, intro: { zh: '可持续的储蓄，来自适合自己的节奏。', en: 'Sustainable saving starts with a rhythm that works for you.' }, paragraphs: [
    { zh: '为目标起一个具体的名字，例如旅行、学习或应急储备。具体的目标更容易帮助你判断一笔支出是否值得。', en: 'Give your goal a concrete name: travel, learning or an emergency reserve. A specific goal helps you make more deliberate spending choices.' },
    { zh: '定期查看进度，也允许计划随着生活变化。重要的是建立可以持续回顾的习惯，而不是追求每个月完全一致。', en: 'Review progress regularly and let the plan adapt to life. The aim is a sustainable habit, rather than identical results every month.' },
  ] },
  { slug: 'understanding-subscriptions', category: { zh: '支出洞察', en: 'INSIGHTS' }, title: { zh: '给订阅服务做一次整理', en: 'Make space by reviewing subscriptions' }, intro: { zh: '看见周期性支出，让每一次续费更有意识。', en: 'See recurring expenses and make renewal a deliberate choice.' }, paragraphs: [
    { zh: '列出订阅名称、费用和续费日期。按实际使用频率回顾，不必仅因为金额小就忽略一项支出。', en: 'List names, costs and renewal dates. Review each subscription against actual use; a small price can still deserve attention.' },
    { zh: '在续费前设置回顾提醒，并通过服务商官方入口管理订阅。这个模板不会替你取消服务或执行任何支付。', en: 'Set a reminder before renewal and manage subscriptions through the provider. This template does not cancel services or execute payments.' },
  ] },
];
