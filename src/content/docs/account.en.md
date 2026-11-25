# Account and sync

## Sign in

Prime Work uses a Feishu account. Click sign in, authorize in Feishu, and return to the app.

The session is stored locally. Signing out does not delete local plugins, hosts or settings.

## Cloud sync

After signing in, the following data syncs with your account:

- Menus, categories and ordering
- Plugin states
- Site navigation
- SSH hosts
- AI sessions

They are restored on another device. If the cloud is temporarily unavailable, local choices are kept and synced later.

## Local data and encryption

- SSH passwords and private keys are encrypted; APIs never return plaintext.
- Model API keys are read from encrypted server-side configuration and are not written to browser localStorage.
- `secrets` fields in plugin settings are encrypted.
- Plugin source and caches stay local and are not uploaded with the account.

## Profile

The avatar opens the profile page, which shows the account, current version and update status, recent changelog, and sign out.

## Sign out

Signing out clears the local session only. Cloud data is kept and synced again on the next sign-in.
