import { NextResponse } from 'next/server';

const HOST = 'techbuilddreams.com';
const KEY = '94422eb5c65f055d084ccad8363563db';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = 'https://api.indexnow.org/IndexNow';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const auth = req.headers.get('authorization');
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const sitemapRes = await fetch(SITEMAP_URL, { cache: 'no-store' });
  if (!sitemapRes.ok) {
    return NextResponse.json(
      { error: `Sitemap fetch failed: ${sitemapRes.status}` },
      { status: 502 },
    );
  }

  const xml = await sitemapRes.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (urls.length === 0) {
    return NextResponse.json({ error: 'No URLs in sitemap' }, { status: 500 });
  }

  const submitRes = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    }),
  });

  return NextResponse.json({
    submitted: urls.length,
    indexNowStatus: submitRes.status,
    indexNowOk: submitRes.status === 200 || submitRes.status === 202,
  });
}
