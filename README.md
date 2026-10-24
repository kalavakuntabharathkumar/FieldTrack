# FieldTrack — Offline-First Field Sales App

Runnable React Native / Expo / TypeScript starter for field sales agents. It uses SQLite for local-first visit capture, Redux Toolkit for app state, Firebase Authentication + Cloud Messaging integration points, Jest tests, and Sentry-ready error reporting.

## Run on Windows
1. Install Node.js 20+ and Android Studio (optional for emulator).
2. `cd FieldTrack`
3. `npm install`
4. Copy `.env.example` to `.env` and fill Firebase/Sentry values if using those integrations.
5. `npx expo start` and scan the QR code with Expo Go, or press `a` for Android emulator.

## Included
- Login/identity demo screen
- Offline visit form stored in SQLite
- Pending-sync queue and manual sync action (demo sync handler)
- Redux Toolkit state slice
- Firebase Auth/FCM setup module (requires native Firebase config)
- Sentry setup hook
- Unit tests and app config

## Important implementation notes
- SQLite persists visits on device. The sample sync function demonstrates queue processing but is not connected to a production API; configure a backend endpoint before using real data.
- Firebase native setup needs a Firebase project and platform config. Push notifications need a physical device and platform credentials.
- No sales customer data is included. Resume metrics (120 agents, 63% fewer errors, 40 minutes saved, 99.2% crash-free sessions, etc.) are illustrative claims from the supplied résumé text, not measured by this starter. Do not claim them as verified without evidence.
