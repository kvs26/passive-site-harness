# API credential UI setup for `pain-fetch.py`

Research date: 2026-09-01 (Asia/Kolkata)

Scope: current browser navigation for obtaining the four optional credentials used by `scripts/pain-fetch.py`. Only official first-party documentation and pages were used, except where the Stack Exchange section transparently identifies a current Stack Apps community FAQ used for a login-only UI detail.

## Fast recommendation

| Environment variable | What to create | Minimum access for this script | Cost / quota summary |
| --- | --- | --- | --- |
| `GITHUB_PAT` | Fine-grained personal access token | No extra permissions; public repositories are automatically readable | No separate PAT charge is shown. Public issue search is 10 requests/minute without authentication and 30 requests/minute when authenticated; the general REST budget also rises from 60/hour to 5,000/hour. |
| `STACKEXCHANGE_KEY` | Stack Exchange API key for a registered app | An app key only; no OAuth token or OAuth scopes are needed for public searches | A live keyless response showed 300 requests/day. A valid key normally gives a 10,000-request daily quota. |
| `YOUTUBE_API_KEY` | Standard Google API key restricted to YouTube Data API v3 | API key only for public search and public comments; OAuth is needed for private-user or write actions | Official 2026 docs give `search.list` its own 100-calls/day bucket, `videos.insert` its own 100-calls/day bucket, and 10,000 units/day for other endpoints. No per-call monetary price is listed in the YouTube setup docs. |
| `PRODUCTHUNT_TOKEN` | Product Hunt `developer_token` | Default read-only/public access | Token does not expire and is linked to the account. GraphQL has a documented 6,250-complexity-points/15-minute quota. API use is non-commercial by default; commercial use requires contacting Product Hunt. |

Never paste a real credential into a commit, issue, screenshot, chat message, or command history. Put it only in the gitignored local credentials file that the user already prepared.

## 1. GitHub personal access token (`GITHUB_PAT`)

### Recommended path: fine-grained token

GitHub recommends fine-grained tokens when possible. The exact issue-search endpoint used by the script supports fine-grained tokens and requires **no permissions** when searching public resources. Fine-grained tokens always include read-only access to public repositories. Sources: [manage personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), [search issues and pull requests](https://docs.github.com/en/rest/search/search#search-issues-and-pull-requests).

1. Open [github.com](https://github.com/) and sign in.
2. In the top-right corner, click your profile picture.
3. Click **Settings**.
4. In the left sidebar, scroll down and click **Developer settings**.
5. Under **Personal access tokens**, click **Fine-grained tokens**.
6. Click **Generate new token**. GitHub may ask you to confirm your password or two-factor authentication.
7. In **Token name**, enter something easy to recognize, such as `pain-fetch public issue search`.
8. In **Expiration**, choose a short useful period, such as 30 or 90 days. Renew it later if needed.
9. In **Description**, optionally write `Read public GitHub issues for local research`.
10. In **Resource owner**, choose your own personal GitHub account.
11. In **Repository access**, do not add any private repository. Public repositories are already read-only for the token. If the UI explicitly shows **Public repositories (read-only)**, keep that choice.
12. In **Permissions**, leave optional account, organization, and repository permissions at **No access**. The public issue-search endpoint does not require an added permission.
13. Click **Generate token**.
14. Copy the token immediately and put it after `GITHUB_PAT=` in the local gitignored credentials file.
15. Return to **Settings > Developer settings > Personal access tokens > Fine-grained tokens** whenever you need to revoke or replace it.

Direct page after sign-in: [Fine-grained token creation](https://github.com/settings/personal-access-tokens/new).

### Why the token helps

GitHub's normal REST limit is 60 requests/hour without authentication and 5,000 requests/hour for authenticated-user requests. Search has a separate tighter limit: 10 requests/minute without authentication and 30 requests/minute with authentication. The script uses `GET /search/issues`, so the 30/minute search limit is the immediate practical ceiling. Sources: [REST API rate limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api), [search rate limit](https://docs.github.com/en/rest/search/search#rate-limit).

### Cost, access, and safety

- GitHub's token and rate-limit documentation does not show a separate charge for creating or using this PAT.
- Do not select `repo`, write, administration, or private-repository access for this use case.
- Treat the token as a password. GitHub recommends minimum permissions, a minimum useful expiration, secure storage, rotation, and deletion when no longer needed. Source: [keeping GitHub API credentials secure](https://docs.github.com/en/rest/authentication/keeping-your-api-credentials-secure).
- If a token is leaked, revoke it from the fine-grained tokens page and create a replacement.

### Fallback: classic token

If the adapter ever fails with a fine-grained token, a classic token with **no scopes selected** can access public information. The path is **Settings > Developer settings > Personal access tokens > Tokens (classic) > Generate new token > Generate new token (classic)**. Add a short expiration, select no scopes, generate, and copy. GitHub considers classic tokens less secure, so use this only as a fallback. Source: [creating a classic PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

## 2. Stack Exchange application key (`STACKEXCHANGE_KEY`)

Stack Exchange separates **registering an application** from **generating an API key**. Older guides that say the key appears immediately on registration are now stale. Official API docs say applications must be registered on Stack Apps to receive a request key. Sources: [Stack Exchange API overview](https://api.stackexchange.com/docs), [Stack Apps registration page](https://stackapps.com/apps/oauth/register).

### Register the application

1. Open [Stack Apps](https://stackapps.com/) in a browser.
2. Click **Log in** and sign in with your Stack Exchange account.
3. In the left navigation, click **Your Apps**.
4. Click **Register**. You can also open [Register an application](https://stackapps.com/apps/oauth/register) after signing in.
5. Fill in the registration form:
   - **Application Name**: for example, `pain-fetch local research`.
   - **Description**: for example, `Local script that searches public Stack Exchange questions for research`.
   - **OAuth Domain**: use a domain you control. For a local-only script with no OAuth flow, `localhost` is the simplest honest value if the form accepts it.
   - **Application Website**: use the matching site URL. For a local-only script, try `http://localhost/`.
   - **Application Icon**: optional; leave blank.
   - **Stack Apps Post**: optional for this read-only use; leave blank.
   - Leave **Enable Client Side OAuth Flow** off. The script is not asking a Stack Exchange user to authorize private or write access.
6. Submit the form using the registration button. Its exact capitalization can change.

The registration page is behind sign-in, so the current unauthenticated page does not expose all form labels. The required field names above are also visible in the Stack Apps registration support record. Source: [Stack Apps registration-field record](https://stackapps.com/questions/8975/the-fieldnames-in-the-error-message-do-not-match-the-names-used-on-the-form).

If `localhost` is rejected, use a real domain and matching website URL that you control. Avoid inventing someone else's domain. The OAuth fields do not grant OAuth access by themselves, and no OAuth flow is needed for this script.

### Generate and copy the key

1. After registration, open the new app's dashboard page.
2. Find the **API Keys** section.
3. Click **Generate new API key**.
4. A modal shows the full key. Copy it immediately; the full value is shown only once.
5. Put it after `STACKEXCHANGE_KEY=` in the local gitignored credentials file.
6. The same dashboard lets you rotate a key, delete a key, or create another key later.

The separate **API Keys > Generate new API key** flow is documented in the Stack Apps FAQ updated June 2025. Stack Apps is Stack Exchange's official developer support site, but this particular UI description is a community-wiki support answer rather than the formal API reference: [I only need a key, what do I do?](https://stackapps.com/questions/8971/i-only-need-a-key-what-do-i-do).

### Cost, quota, access, and safety

- The registration/API documentation does not show a payment or billing step.
- A live keyless API response on the research date returned `quota_max: 300`: [live keyless `/info` response](https://api.stackexchange.com/2.3/info?site=stackoverflow).
- A valid application key normally gives a 10,000-request daily quota. Without an OAuth access token, this quota is shared by key/IP rules; with an access token, the quota is per user/app pair. Source: [Stack Exchange throttles](https://api.stackexchange.com/docs/throttle).
- The API may return a `backoff` value. The script must wait that many seconds before repeating that method. Stack Exchange also says not to make semantically identical requests more than once per minute.
- The key alone is enough for public read methods. It does not provide private-user or write access; those actions require OAuth access tokens and the relevant scopes. Source: [Stack Exchange authentication](https://api.stackexchange.com/docs/authentication).

## 3. YouTube Data API v3 key (`YOUTUBE_API_KEY`)

This is a standard API key for public YouTube data. An API key identifies the Google Cloud project and its quota; it does not authorize access to a person's Google/YouTube account. Private-user data and write actions require OAuth 2.0 instead. Sources: [YouTube authorization credentials](https://developers.google.com/youtube/registering_an_application), [Google API credentials overview](https://support.google.com/googleapi/answer/6158857).

### Create or choose a Google Cloud project

1. Open the [Google Cloud Console](https://console.cloud.google.com/) and sign in with a Google account.
2. At the top of the page, click the current project name or **Select a project**.
3. If you already have a project dedicated to this script, select it.
4. Otherwise, click **New Project**.
5. Enter a project name such as `pain-fetch-youtube`.
6. If Google asks for an organization or location, choose the correct value for your account. A personal account may show **No organization**.
7. Click **Create**, wait for creation to finish, then select the new project from the project picker.

### Enable YouTube Data API v3

1. Open the left navigation menu.
2. Click **APIs & Services**.
3. Click **Library** (the page may be called **API Library**).
4. In **Search for APIs & Services**, type `YouTube Data API v3`.
5. Click the result named **YouTube Data API v3**. Check the name carefully; do not choose an unrelated YouTube API.
6. Click **Enable**.
7. Wait until the API's overview/management page appears.

This is the official console path: **APIs & Services > Library > choose/search for API > Enable**. Sources: [enable and disable APIs](https://support.google.com/googleapi/answer/6158841), [YouTube Data API overview](https://developers.google.com/youtube/v3/getting-started).

### Create and restrict the API key

Google is rolling out a newer credential form. In one version, the restrictions are chosen before **Create**; in another, the key is created first and a **Restrict key** link appears. Both paths end in the same settings.

1. In **APIs & Services**, click **Credentials**.
2. Click **Create credentials**.
3. Choose **API key**.
4. Give it a clear name if the form asks, such as `pain-fetch YouTube read key`.
5. Under **API restrictions**, choose **Restrict key**.
6. Select only **YouTube Data API v3**.
7. Under **Application restrictions**:
   - If this script runs from one server with a stable public IP, choose **IP addresses** and add that IP.
   - If it runs from a changing home/laptop network, an IP restriction may break it. Leave application restriction unset only for local testing, and monitor use closely.
8. Click **Create** or **Save**, depending on which console form is shown.
9. Copy the generated key from the dialog or key details page.
10. Put it after `YOUTUBE_API_KEY=` in the local gitignored credentials file.

Google's current Cloud documentation says the console requires at least one **API restriction** when creating a key and recommends both an API restriction and an application restriction. It also gives the exact edit path: **Credentials > key name > API restrictions > Restrict key > select API > Save**. Source: [manage API keys](https://docs.cloud.google.com/docs/authentication/api-keys).

### Cost and current quotas

- The YouTube credential and quota pages do not list a per-call monetary price or require a billing account in their YouTube-specific setup steps. Google Cloud's general API help notes that enabling an API activates billing for that API only if billing is already enabled and the API is billable. Confirm any console billing prompt before accepting it. Sources: [YouTube credential setup](https://developers.google.com/youtube/registering_an_application), [enable an API](https://support.google.com/googleapi/answer/6158841).
- As of the 2026-06-01 official quota update, a newly enabled project gets:
  - 100 `search.list` calls per day in a separate search bucket;
  - 100 `videos.insert` calls per day in a separate upload bucket; and
  - 10,000 quota units per day combined for other endpoints.
- Each `search.list` call costs one unit from its 100-call bucket. Each extra page is another call. A typical comments-list request costs one unit from the general bucket. Daily quotas reset at midnight Pacific Time. Source: [YouTube quota calculator](https://developers.google.com/youtube/v3/determine_quota_cost).
- Additional quota requires a compliance audit/request; it is not simply a billing upgrade. Source: [quota and compliance audits](https://developers.google.com/youtube/v3/guides/quota_and_compliance_audits).

This 2026 quota structure is newer than the older shorthand "10,000 units/day." For a search-and-comments adapter, the 100 daily `search.list` calls are likely to be the first limit reached.

### Safety

- Never commit the key or put it in client-side/public code.
- Restrict it to **YouTube Data API v3**.
- Add an application restriction where practical.
- Delete unused keys and rotate exposed keys.

Source: [Google API key security best practices](https://docs.cloud.google.com/docs/authentication/api-keys-best-practices).

## 4. Product Hunt developer token (`PRODUCTHUNT_TOKEN`)

Product Hunt's simple-script credential is called a `developer_token`. It is available in the API dashboard, does not expire, and is linked to the Product Hunt account. Source: [Product Hunt API v2 documentation](https://api.producthunt.com/v2/docs).

### Get the token

1. Open [Product Hunt](https://www.producthunt.com/) and click **Sign in**.
2. Sign in with a personal Product Hunt account.
3. Open Product Hunt's [My Apps / API dashboard](https://api.producthunt.com/v2/oauth/applications).
4. Look for a section labeled **Developer token** or `developer_token`.
5. Use the nearby copy/reveal control to copy the token.
6. Put it after `PRODUCTHUNT_TOKEN=` in the local gitignored credentials file.

Official Product Hunt help uses the label **My Apps**, while the API documentation uses **API dashboard**. These are the same destination. The direct dashboard URL redirects signed-out visitors to the main Product Hunt page, so sign in first. Sources: [Does Product Hunt have an API?](https://help.producthunt.com/en/articles/484971-does-product-hunt-have-an-api), [API dashboard link in the v2 docs](https://api.producthunt.com/v2/docs).

If the dashboard shows an application-registration button before it shows the token, follow the on-screen **Create application** / **New application** flow with a descriptive name and a URL you control, then return to the dashboard. The public official pages do not expose that signed-in form, so the exact button and field labels could not be verified without changing an account.

### Access, use, quota, and cost constraints

- Send the token as `Authorization: Bearer YOUR_TOKEN` to `https://api.producthunt.com/v2/api/graphql`. Source: [Product Hunt API v2 docs](https://api.producthunt.com/v2/docs).
- Apps are read-only with `public` scope by default. `private` is for acting on behalf of an authenticated user, and `write` access requires Product Hunt approval. This script's public-data use should not request broader scopes.
- The GraphQL endpoint has a documented quota of 6,250 complexity points per 15 minutes. Product Hunt may also rate-limit applications that do not follow fair use. Source: [Product Hunt rate-limit headers](https://api.producthunt.com/v2/docs/rate_limits/headers).
- Product Hunt says its API must not be used commercially by default. For business/commercial use, contact `hello@producthunt.com`. This is a usage permission issue, not merely a pricing tier. Source: [Product Hunt API privileges and commercial-use rule](https://api.producthunt.com/v2/docs).
- The official docs do not publish a self-service price or billing step for the developer token.

### Safety

The developer token is long-lived and linked to the account. Treat it like a password even though its normal use is public/read-only data. Do not paste it into third-party sites, screenshots, browser forms other than Product Hunt's own dashboard, or public repositories. If it is exposed and the dashboard does not offer rotation/revocation, contact Product Hunt through its official support channel: [Product Hunt contact information](https://help.producthunt.com/en/articles/479621-contact-us).

## UI uncertainty log

- **GitHub:** UI labels are directly documented and were current on the research date. Fine-grained token creation may prompt for password/2FA or organization approval depending on account policy.
- **Stack Exchange:** Registration is login-only. The formal API docs verify the registration requirement; the newer separate key-generation labels come from a Stack Apps community-wiki FAQ updated in 2025.
- **Google Cloud:** Official Google pages currently describe both a create-then-restrict flow and a newer restrict-during-creation flow. Follow whichever version the console displays, ensuring the final key is restricted to YouTube Data API v3.
- **Product Hunt:** Official sources use both **My Apps** and **API dashboard**. The signed-in dashboard content is not public, so the token section's exact copy/reveal control could not be independently inspected.

## Primary sources

- GitHub: [token management](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), [issue search endpoint](https://docs.github.com/en/rest/search/search#search-issues-and-pull-requests), [REST rate limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api), [credential security](https://docs.github.com/en/rest/authentication/keeping-your-api-credentials-secure).
- Stack Exchange: [API overview](https://api.stackexchange.com/docs), [authentication](https://api.stackexchange.com/docs/authentication), [throttles](https://api.stackexchange.com/docs/throttle), [registration](https://stackapps.com/apps/oauth/register), [current Stack Apps key-generation FAQ](https://stackapps.com/questions/8971/i-only-need-a-key-what-do-i-do).
- Google / YouTube: [YouTube credentials](https://developers.google.com/youtube/registering_an_application), [enable APIs](https://support.google.com/googleapi/answer/6158841), [manage API keys](https://docs.cloud.google.com/docs/authentication/api-keys), [current quota calculator](https://developers.google.com/youtube/v3/determine_quota_cost), [security best practices](https://docs.cloud.google.com/docs/authentication/api-keys-best-practices).
- Product Hunt: [API v2 docs](https://api.producthunt.com/v2/docs), [official API help article](https://help.producthunt.com/en/articles/484971-does-product-hunt-have-an-api), [rate limits](https://api.producthunt.com/v2/docs/rate_limits/headers), [official contact route](https://help.producthunt.com/en/articles/479621-contact-us).
