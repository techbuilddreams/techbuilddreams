#!/usr/bin/env node
// Submit the live sitemap URLs to IndexNow.
// IndexNow is consumed by Bing, Yandex, Naver, Seznam, and DuckDuckGo (via Bing).
// Bing powers ChatGPT web search, so this materially speeds AI-visibility pickup.
// Run after a production deploy: `npm run indexnow`
// Docs: https://www.indexnow.org/documentation

const HOST = 'techbuilddreams.com';
const KEY = '94422eb5c65f055d084ccad8363563db';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = 'https://api.indexnow.org/IndexNow';

const sitemapXml = await fetch(SITEMAP_URL).then((r) => {
  if (!r.ok) throw new Error(`Sitemap fetch failed: ${r.status}`);
  return r.text();
});

const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urls.length === 0) throw new Error('No URLs found in sitemap');

console.log(`Submitting ${urls.length} URLs to IndexNow…`);

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }),
});

const body = await res.text();
console.log(`IndexNow responded ${res.status} ${res.statusText}`);
if (body) console.log(body);

// 200 = accepted, 202 = accepted (will be processed), both are success.
if (res.status !== 200 && res.status !== 202) {
  console.error('Submission rejected — check key file is reachable at', KEY_LOCATION);
  process.exit(1);
}
console.log('Done.');
