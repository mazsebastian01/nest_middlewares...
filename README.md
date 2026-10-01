# Actividad práctica - Flujo de una petición en NestJS

Mini API de reservas para practicar:

- Middleware
- Exception Filters
- Guards
- Interceptors
- Pipes / ValidationPipe
- Controller
- Service

## 1. Instalar

```bash
npm install
```

## 2. Ejecutar

```bash
npm run start:dev
```

La API queda en:

`http://localhost:3000`

## 3. Endpoints

### GET /reservations

Es público.

```http
GET http://localhost:3000/reservations
```

### POST /reservations

Necesita:

```http
x-api-key: restaurant-secret
Content-Type: application/json
```

Body:

```json
{
  "customerName": "Carlos Pérez",
  "email": "carlos@email.com",
  "people": 4
}
```

## 4. Pruebas de la actividad

### Caso 1: POST válido + API Key

Debe devolver `success: true`.

### Caso 2: POST sin API Key

Debe devolver `403`.

### Caso 3: datos inválidos

Usar:

```json
{
  "customerName": "",
  "email": "esto-no-es-un-email",
  "people": 0
}
```

Debe devolver un error de validación.

### Caso 4: Exception Filter

El Guard y el ValidationPipe generan HttpExceptions que pasan por el Exception Filter.

### Caso 5: Middleware

Revisar la terminal. Debe aparecer algo parecido a:

```text
[REQUEST] POST /reservations - 7:30:15 PM
POST /reservations - 12ms
```

### Caso 6: Interceptor

Las respuestas exitosas tienen:

```json
{
  "success": true,
  "data": {},
  "timestamp": "..."
}
```

## Flujo

```text
Request
  ↓
Middleware
  ↓
Guard
  ↓
Interceptor (antes)
  ↓
Pipe
  ↓
Controller
  ↓
Service
  ↓
Interceptor (después)
  ↓
Response

Error → Exception Filter → Error Response
```

## Nota

Las reservas se guardan en memoria para mantener la actividad sencilla. No se usa base de datos porque el documento de la actividad no la exige.
