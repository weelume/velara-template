import test from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';
const root=new URL('../',import.meta.url);
test('双语注册与文章路由完整',async()=>{const m=JSON.parse(await readFile(new URL('.tpl/template.json',root)));assert.deepEqual(m.surfaces[0].locales,['zh','en']);assert.equal(m.surfaces[0].pages.length,11);assert.equal(new Set(m.surfaces[0].pages.map(p=>p.slug)).size,11)});
test('联系表单没有外发或持久化',async()=>{const s=await readFile(new URL('src/features/site-templates/catalog/velara/pages/ContactPage.tsx',root),'utf8');assert.doesNotMatch(s,/fetch\(|localStorage|sessionStorage|sendBeacon|axios/);assert.match(s,/sent:false,saved:false/)});
test('视频源均存在且为 mp4 容器',async()=>{for(const name of ['hero','globe']){const b=await readFile(new URL('public/templates/velara/'+name+'.mp4',root));assert.equal(b.toString('ascii',4,8),'ftyp');assert.ok(b.length>100000)}});
