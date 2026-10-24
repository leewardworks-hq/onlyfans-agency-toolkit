# OnlyFans & Fansly Agency Toolkit

Free, practical templates for running an OnlyFans or Fansly agency: a chatter payroll calculator, a shift schedule, a shift handover template, daily numbers to check, a chatter onboarding checklist and a glossary of agency terms.

Everything here works without special software: in a browser, Google Sheets or Excel. No sign-up, no tracking.

**Calculator online:** [English](https://leewardworks.github.io/onlyfans-agency-toolkit/calculator/) · [Русский](https://leewardworks.github.io/onlyfans-agency-toolkit/calculator/ru/) · [Українська](https://leewardworks.github.io/onlyfans-agency-toolkit/calculator/uk/)

## What's inside

| File | What it is for |
|---|---|
| [`calculator/`](calculator/index.html) | Chatter payroll calculator: hourly pay, fixed base, commission on sales, bonus or penalty, and real pay per hour. Exports CSV. Runs in the browser, nothing is sent anywhere. English, Russian and Ukrainian. |
| [`templates/chatter-payroll.csv`](templates/chatter-payroll.csv) | The same payroll as a spreadsheet, with the formulas already in it. Open it in Google Sheets or Excel. |
| [`templates/shift-schedule.csv`](templates/shift-schedule.csv) | A week of three 8-hour shifts that cover 24 hours, in UTC, with columns for your local time. |
| [`checklists/daily-agency-metrics.md`](checklists/daily-agency-metrics.md) | What to look at every morning, during a shift and once a week. |
| [`checklists/shift-handover.md`](checklists/shift-handover.md) | What the outgoing chatter passes to the next one, so fans don't feel the change. |
| [`checklists/chatter-onboarding.md`](checklists/chatter-onboarding.md) | The first week of a new chatter, step by step. |
| [`docs/glossary.md`](docs/glossary.md) | PPV, whales, rebill, mass messages and the other words agencies use every day. |
| [`checklists/ru/`](checklists/ru/) · [`checklists/uk/`](checklists/uk/) · [`docs/ru/`](docs/ru/) · [`docs/uk/`](docs/uk/) | The checklists and the glossary in Russian and Ukrainian. |

## How chatter pay is counted

Agencies usually pay chatters in one of three ways: by the hour, a commission on sales, or a fixed base plus a commission. The calculator and the spreadsheet support all three: leave a field empty if you don't use it.

Formulas in `templates/chatter-payroll.csv` (first chatter in row 2):

| Column | Formula |
|---|---|
| Base pay (I) | `=D2*E2+F2` (hours × hourly rate + fixed base) |
| Commission (J) | `=G2*H2/100` (sales × commission %) |
| Total (L) | `=I2+J2+K2` (base pay + commission + bonus or penalty) |
| USD per hour (M) | `=IF(D2>0,L2/D2,0)` |

Pay per hour lets you compare chatters who are paid on different terms.

## Shift schedule tips

- Plan shifts around your fans' time zone, not yours. If most of a model's fans are in the US, the busiest hours are evening and night in US time, which is night and early morning in Europe.
- Three 8-hour shifts cover the day. A 15–30 minute overlap gives time for the handover.
- Decide who covers the night first. If nobody is on a model at night, fans who write at night wait until morning, and a fan who gets no answer may leave without buying.
- Give every shift a team lead who checks that everyone on shift is actually online.

## Use and share

MIT license: use it, copy it, change it, including in your agency. Pull requests with better templates are welcome.

---

Made by the team behind [Leeward](https://leewardworks.com/), a desktop CRM for OnlyFans and Fansly agencies: fan chats across all models, chatter shifts in real time, payroll and agency analytics.

More detail in our articles:
- [Which agency numbers to check every day](https://leewardwork.com/blog/agency-daily-metrics/)
- [Chatter shifts: the schedule and the handover](https://leewardwork.com/blog/chatter-shifts/)
- [How to pay OnlyFans chatters](https://leewardwork.com/blog/how-to-pay-onlyfans-chatters/)
- [Onboarding new chatters](https://leewardwork.com/blog/onboard-onlyfans-chatters/)
- [What an OnlyFans chatter does](https://leewardwork.com/blog/what-is-onlyfans-chatter/)

### На русском

Бесплатные шаблоны для агентства онлифанс и Fansly:
- калькулятор зарплаты чатеров — [открыть на русском](https://leewardworks.github.io/onlyfans-agency-toolkit/calculator/ru/);
- [ежедневные цифры агентства](checklists/ru/daily-agency-metrics.md);
- [шаблон передачи смены](checklists/ru/shift-handover.md);
- [первая неделя нового чатера](checklists/ru/chatter-onboarding.md);
- [словарь агентства](docs/ru/glossary.md);
- шаблоны зарплаты и графика смен — в папке [`templates`](templates/) (на английском).

Статьи на русском — в [блоге Leeward](https://leewardwork.com/ru/blog/).

### Українською

Безкоштовні шаблони для агенції онліфанс і Fansly:
- калькулятор зарплати чатерів — [відкрити українською](https://leewardworks.github.io/onlyfans-agency-toolkit/calculator/uk/);
- [щоденні цифри агенції](checklists/uk/daily-agency-metrics.md);
- [шаблон передачі зміни](checklists/uk/shift-handover.md);
- [перший тиждень нового чатера](checklists/uk/chatter-onboarding.md);
- [словник агенції](docs/uk/glossary.md);
- шаблони зарплати й графіка змін — у папці [`templates`](templates/) (англійською).

Статті українською — у [блозі Leeward](https://leewardwork.com/uk/blog/).
