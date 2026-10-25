import type {SiteTemplate} from '../../types';
export const velaraTemplate:SiteTemplate={...{
  "id": "velara",
  "gitUrl": "https://github.com/weelume/velara-template",
  "name": "Velara AI · 智能财务",
  "localizedNames": {
    "en": "Velara AI · Smart finance"
  },
  "sceneId": "corporate-site",
  "listed": false,
  "tags": [
    "金融科技",
    "AI 预算",
    "视频背景",
    "动态仪表盘",
    "双语",
    "PC / iPad / H5"
  ],
  "summary": "紫色光束视频、动态资产图表、玻璃卡片和全球支付视频组成的双语智能财务官网。",
  "accentColor": "#a855f7",
  "cover": "/templates/velara/screenshots/desktop-home.webp",
  "screenshots": [
  {
    "src": "/templates/velara/screenshots/desktop-home.webp",
    "alt": "Velara PC 首页",
    "device": "desktop",
    "width": 1440,
    "height": 1000
  },
  {
    "src": "/templates/velara/screenshots/desktop-features.webp",
    "alt": "Velara PC 功能",
    "device": "desktop",
    "width": 1440,
    "height": 1000
  },
  {
    "src": "/templates/velara/screenshots/desktop-blog.webp",
    "alt": "Velara PC 博客",
    "device": "desktop",
    "width": 1440,
    "height": 1000
  },
  {
    "src": "/templates/velara/screenshots/desktop-contact.webp",
    "alt": "Velara PC 联系",
    "device": "desktop",
    "width": 1440,
    "height": 1000
  },
  {
    "src": "/templates/velara/screenshots/tablet-home.webp",
    "alt": "Velara iPad 首页",
    "device": "tablet",
    "width": 834,
    "height": 1180
  },
  {
    "src": "/templates/velara/screenshots/tablet-features.webp",
    "alt": "Velara iPad 功能",
    "device": "tablet",
    "width": 834,
    "height": 1180
  },
  {
    "src": "/templates/velara/screenshots/tablet-blog.webp",
    "alt": "Velara iPad 博客",
    "device": "tablet",
    "width": 834,
    "height": 1180
  },
  {
    "src": "/templates/velara/screenshots/tablet-contact.webp",
    "alt": "Velara iPad 联系",
    "device": "tablet",
    "width": 834,
    "height": 1180
  },
  {
    "src": "/templates/velara/screenshots/mobile-home.webp",
    "alt": "Velara H5 首页",
    "device": "mobile",
    "width": 390,
    "height": 844
  },
  {
    "src": "/templates/velara/screenshots/mobile-features.webp",
    "alt": "Velara H5 功能",
    "device": "mobile",
    "width": 390,
    "height": 844
  },
  {
    "src": "/templates/velara/screenshots/mobile-blog.webp",
    "alt": "Velara H5 博客",
    "device": "mobile",
    "width": 390,
    "height": 844
  },
  {
    "src": "/templates/velara/screenshots/mobile-contact.webp",
    "alt": "Velara H5 联系",
    "device": "mobile",
    "width": 390,
    "height": 844
  }
]
},surfaces:[{id:'site',name:'智能财务官网',platform:'pc',locales:['zh','en'],pages:[
{slug:"",title:"首页",localizedTitles:{en:"Home"},load:()=>import('./pages/HomePage')},
{slug:"features",title:"产品功能",localizedTitles:{en:"Features"},load:()=>import('./pages/FeaturesPage')},
{slug:"pricing",title:"价格方案",localizedTitles:{en:"Pricing"},load:()=>import('./pages/PricingPage')},
{slug:"about",title:"关于我们",localizedTitles:{en:"About"},load:()=>import('./pages/AboutPage')},
{slug:"blog",title:"财务手记",localizedTitles:{en:"Journal"},load:()=>import('./pages/BlogPage')},
{slug:"blog/a-clearer-budget",title:"清晰月度预算",localizedTitles:{en:"A clearer budget"},load:()=>import('./pages/BudgetArticle')},
{slug:"blog/small-saving-habits",title:"储蓄小习惯",localizedTitles:{en:"Small saving habits"},load:()=>import('./pages/SavingArticle')},
{slug:"blog/understanding-subscriptions",title:"整理订阅",localizedTitles:{en:"Understanding subscriptions"},load:()=>import('./pages/SubscriptionArticle')},
{slug:"contact",title:"联系",localizedTitles:{en:"Contact"},load:()=>import('./pages/ContactPage')},
{slug:"privacy",title:"隐私政策",localizedTitles:{en:"Privacy"},load:()=>import('./pages/PrivacyPage')},
{slug:"terms",title:"使用条款",localizedTitles:{en:"Terms"},load:()=>import('./pages/TermsPage')}
]}]};
