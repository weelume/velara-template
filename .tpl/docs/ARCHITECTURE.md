# 架构

通用源码在 src/features/site-templates/catalog/velara。config/brand.ts 管理品牌，content/copy.ts 管理双语内容，theme.css 管理主题与响应式。components/ 按布局、图表、区块和基础交互分工，pages/ 组合页面。路由在 src/app/[[...slug]]/page.tsx，未知页面返回 404。host.tsx 允许消费方注入品牌和页脚；模板不依赖任何特定消费方。
