# How to get API tokens for pain-fetch.py

Simple steps to create the 4 optional credentials used by `scripts/pain-fetch.py`. Paste each one into your local gitignored credentials file (`.env`) — never commit them anywhere.

Full research with sources: [docs/research/2026-09-01-api-credential-ui-setup.md](docs/research/2026-09-01-api-credential-ui-setup.md).

## 1. GitHub token (`GITHUB_PAT`)

1. Go to [github.com](https://github.com/) and sign in.
2. Click your profile picture (top right) → **Settings**.
3. Left sidebar → **Developer settings**.
4. Click **Personal access tokens** → **Fine-grained tokens**.
5. Click **Generate new token**.
6. Token name: `pain-fetch public issue search`.
7. Expiration: pick something short, like 30 or 90 days.
8. Resource owner: your own account.
9. Repository access: leave as-is, don't add any private repos.
10. Permissions: leave everything at **No access**.
11. Click **Generate token** and copy it right away.
12. Paste it as `GITHUB_PAT=your_token` in your credentials file.

No cost, no special permissions needed — this only reads public issues.

## 2. Stack Exchange key (`STACKEXCHANGE_KEY`)

**Register the app:**
1. Go to [Stack Apps](https://stackapps.com/) and log in with your Stack Exchange account.
2. Click **Your Apps** → **Register**.
3. Fill the form:
   - Application Name: `pain-fetch local research`
   - Description: `Local script that searches public Stack Exchange questions`
   - OAuth Domain: `localhost`
   - Application Website: `http://localhost/`
   - Leave **Enable Client Side OAuth Flow** off.
4. Submit.

**Get the key:**
1. Open your new app's dashboard.
2. Find **API Keys** → click **Generate new API key**.
3. Copy the key immediately (it's shown only once).
4. Paste it as `STACKEXCHANGE_KEY=your_key` in your credentials file.

No cost. Gives you a much higher daily quota than going keyless.

## 3. YouTube key (`YOUTUBE_API_KEY`)

**Create a project:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/) and sign in.
2. Click the project name at top → **New Project**.
3. Name it something like `pain-fetch-youtube` → **Create**.

**Turn on the YouTube API:**
1. Left menu → **APIs & Services** → **Library**.
2. Search `YouTube Data API v3` → click it → **Enable**.

**Create the key:**
1. **APIs & Services** → **Credentials** → **Create credentials** → **API key**.
2. Name it `pain-fetch YouTube read key`.
3. Under **API restrictions**, choose **Restrict key** → select only **YouTube Data API v3**.
4. Application restrictions: leave unset for local testing, or restrict by IP if you have a fixed one.
5. Click **Create**/**Save** and copy the key.
6. Paste it as `YOUTUBE_API_KEY=your_key` in your credentials file.

No cost for normal usage. Daily limits: 100 search calls, 100 upload calls, 10,000 other-call units — resets at midnight Pacific time.

## 4. Product Hunt token (`PRODUCTHUNT_TOKEN`)

1. Go to [Product Hunt](https://www.producthunt.com/) and sign in.
2. Open the [API dashboard](https://api.producthunt.com/v2/oauth/applications).
3. If asked to create an application first, do so with any name and a URL you control, then go back to the dashboard.
4. Find the **Developer token** section and copy the token shown there.
5. Paste it as `PRODUCTHUNT_TOKEN=your_token` in your credentials file.

Token doesn't expire. Read-only, public data only — don't request write/private scopes. Don't use it commercially without contacting Product Hunt first.

## 5. Reddit (no token needed)

Reddit's official Data API requires an approved support ticket now (2026 Responsible Builder Policy) — self-serve `reddit.com/prefs/apps` alone isn't enough, and our ticket was rejected. So `pain-fetch.py` doesn't use OAuth for Reddit at all. Nothing to create, nothing to paste in the credentials file.

Instead, the `reddit` adapter uses two credential-free sources:

1. **`reddit.com/search.rss`** — Reddit's own public search feed (site-wide, or subreddit-scoped with `restrict_sr=1`). No login, no app, no approval. Just needs a real browser-style User-Agent string (a bare `"Mozilla/5.0"` gets blocked; a full Chrome UA works). Anonymous requests are throttled to about 1 per 45 seconds — not a ban, just a `429` + retry wait.
2. **Arctic Shift** (`arctic-shift.photon-reddit.com`) — a free, no-auth Pushshift successor used for subreddit browsing/backup. Works well without a keyword filter; adding a `query` param is slow/unreliable on the free tier, so it's treated as best-effort, not primary.

A `site:reddit.com` DuckDuckGo search is kept as a tertiary fallback but isn't needed as the main path anymore.

## Safety reminders

- Never paste a real token into a commit, issue, screenshot, or chat.
- Keep tokens only in your local gitignored credentials file.
- If a token leaks, revoke/rotate it right away from the same dashboard where you created it.
