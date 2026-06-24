# CONNECT Website (Admin Dashboard)

Next.js admin dashboard for the CONNECT platform. Connects to the Laravel API backend.

## Stack

- Next.js 16 (App Router)
- TypeScript, Tailwind CSS v4, shadcn/ui
- Zustand (auth), TanStack React Query (server state)
- i18next (en / my) with `[locale]` routes

## Quick start

```bash
# Start API
cd ../api && php artisan serve

# Start dashboard
cd ../website
cp .env.example .env.local   # if needed
npm run dev
```

Open [http://localhost:3006/en/login](http://localhost:3006/en/login)

**Default admin:** `admin@connect.test` / `password`

## Project structure

```
app/[locale]/          # Localized routes (en, my)
  dashboard/           # Stats + activity
  users/               # List, detail, edit, ban/unban, delete
  profiles/            # List, detail, edit, delete
  skills/              # List, create, edit, delete
  connections/         # List, detail, delete
  connection-requests/ # List with status filter
  meetings/            # List, detail, delete
  reports/             # List, detail, review/resolve/reject
  notifications/       # List + broadcast form
  telegram/            # Stats + logs
  logs/                # List, detail
  login/
api/                   # API client modules (all admin endpoints)
components/common/     # DataTable, ConfirmDialog, PageHeader, etc.
hooks/
store/
schemas/
i18n/
lib/
```

## API

All admin endpoints use base URL `NEXT_PUBLIC_APP_API_BASE_URL` (default `http://localhost:8000/api/v1/admin`).

Auth: `POST /auth/login`, `GET /auth/me`, `POST /auth/logout` with `Authorization: Bearer {token}`.
# connect_website
# connect_frontend
