# Subscribe API Endpoint

## Overview
This API endpoint handles email subscriptions for mobile app launch notifications.

## Endpoint
`POST /api/subscribe`

## Request Body
```json
{
  "email": "user@example.com"
}
```

## Response

### Success (201 Created)
```json
{
  "success": true,
  "message": "Terima kasih! Kami akan memberitahu Anda saat aplikasi diluncurkan."
}
```

### Error Responses

#### Empty Email (400 Bad Request)
```json
{
  "success": false,
  "error": "Alamat email tidak boleh kosong"
}
```

#### Invalid Email Format (400 Bad Request)
```json
{
  "success": false,
  "error": "Format email tidak valid. Contoh: nama@domain.com"
}
```

#### Duplicate Email (409 Conflict)
```json
{
  "success": false,
  "error": "Email ini sudah terdaftar untuk notifikasi."
}
```

#### Server Error (500 Internal Server Error)
```json
{
  "success": false,
  "error": "Terjadi kesalahan. Silakan coba lagi."
}
```

## Features
- ✅ Server-side email validation using `validateEmail` from `lib/utils.ts`
- ✅ Saves to `subscribers.json` in project root with ISO 8601 timestamp
- ✅ Handles duplicate emails gracefully (case-insensitive)
- ✅ Returns proper HTTP status codes
- ✅ Comprehensive error handling

## Data Storage
Subscribers are stored in `subscribers.json` with the following structure:
```json
[
  {
    "email": "user@example.com",
    "subscribedAt": "2025-06-15T10:30:00.000Z",
    "source": "mobile-app-section"
  }
]
```

## Requirements Validated
- **Requirement 12.3**: Email subscription functionality
- **Requirement 12.4**: Email validation and error handling
