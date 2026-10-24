# Project 01 — Fullstack AI Platform

Базовый шаблон для разработки современных веб-приложений с разделением frontend, backend и AI-сервиса.

## Архитектура

Проект состоит из трёх основных приложений.

| Сервис | Технологии | Назначение |
|---|---|---|
| Frontend | React, Vite, Tailwind CSS, Motion | Пользовательский интерфейс |
| Backend | PHP, Laravel | API, бизнес-логика, авторизация и доступ к данным |
| AI | Python, FastAPI | AI-логика и отдельные API для интеллектуальных функций |

Docker используется для контейнеризации сервисов и воспроизводимого окружения разработки.

## Структура проекта

```text
01/
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── app/
│   ├── routes/
│   ├── resources/
│   └── Dockerfile
├── ai/
│   ├── main.py
│   ├── requirements.txt
│   └── Dockerfile
├── compose.yaml
└── README.md
```

## Как взаимодействуют сервисы

```text
Пользователь
     |
     v
React Frontend
     |
     v
Laravel Backend
     |
     v
FastAPI AI Service
```

Frontend отвечает за интерфейс. Laravel выступает основным backend и управляет бизнес-логикой. FastAPI предоставляет отдельный сервис для AI-функций.

В контейнерной сети сервисы должны обращаться друг к другу по именам сервисов Docker Compose, а не через `localhost`.

Например, адрес AI-сервиса из другого контейнера:

`http://ai:8001`

Внешние API-ключи и пароли должны храниться в переменных окружения, а не в исходном коде frontend.

## Локальная разработка

### 1. Frontend

```bash
cd frontend
npm install
npm run dev
```

Vite обычно доступен по адресу:

http://localhost:5173

### 2. Laravel Backend

```bash
cd backend
composer install
```

Создай `.env` на основе `.env.example`, настрой подключение к базе данных и выполни необходимые миграции, если они предусмотрены проектом.

Для запуска Laravel:

```bash
php artisan serve --host=0.0.0.0 --port=8000
```

Локальный адрес:

http://localhost:8000

### 3. FastAPI AI Service

```bash
cd ai
python -m venv .venv
```

Активация виртуального окружения в Ubuntu:

```bash
source .venv/bin/activate
```

Установка зависимостей:

```bash
pip install -r requirements.txt
```

Запуск сервиса:

```bash
uvicorn main:app --host 0.0.0.0 --port 8001 --reload
```

Документация API FastAPI:

http://localhost:8001/docs

## Docker Compose

Из корня проекта:

```bash
docker compose up --build -d
```

Проверить состояние контейнеров:

```bash
docker compose ps
```

Посмотреть логи:

```bash
docker compose logs -f
```

Остановить сервисы:

```bash
docker compose down
```

Фактические сервисы, порты, переменные окружения и зависимости определяются в `compose.yaml` и соответствующих Dockerfile.

## Переменные окружения и безопасность

- Не добавляй `.env` с секретами в Git.
- Не храни приватные API-ключи в React.
- Используй отдельные настройки для разработки и production.
- Не используй локальные пароли в production.
- Проверяй `.gitignore` перед добавлением новых файлов.

## Git Workflow

Проверить состояние:

```bash
git status
```

Добавить изменения:

```bash
git add -A
```

Создать коммит:

```bash
git commit -m "feat: describe changes"
```

Отправить изменения в GitHub:

```bash
git push origin main
```

Перед началом новой задачи убедись, что рабочая директория находится в ожидаемом состоянии.

## Принципы архитектуры

1. Разделять интерфейс, бизнес-логику и AI-логику.
2. Не размещать секреты в клиентском коде.
3. Использовать API-контракты между сервисами.
4. Хранить конфигурацию вне исходного кода.
5. Фиксировать законченные этапы разработки в Git.
6. Проверять работоспособность после существенных изменений.

---

**Статус:** базовый fullstack-шаблон. Конкретные production-настройки, CI/CD, мониторинг, безопасность и масштабирование оформляются по мере развития проекта.