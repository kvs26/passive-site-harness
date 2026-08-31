# 07 — Set up .env credentials (Reddit OAuth, GitHub PAT)

Type: task
Status: claimed

## Question

Provision the optional credentials so scout/validate's credentialed adapters activate. HITL — human creates the credentials with this checklist; agent then writes `.env` (gitignored) and verifies the adapters.

### Checklist for the human

**Reddit (free):**
1. Log in to reddit.com → https://www.reddit.com/prefs/apps
2. "create another app…" → type **script**; name anything; redirect URI `http://localhost:8080`
3. Note the **client id** (under the app name) and **secret**

**GitHub (free):**
1. github.com → Settings → Developer settings → Personal access tokens → Fine-grained
2. Generate token, **Public repositories (read-only)**, no extra permissions
3. Copy the token (shown once)

### Then

Provide values in chat or paste into `.env` at repo root:

```
REDDIT_CLIENT_ID=...
REDDIT_CLIENT_SECRET=...
GITHUB_PAT=...
```

Resolve by: confirming `.env` exists and is gitignored, adapters detect the keys, and recording (no secrets!) which adapters went live.
