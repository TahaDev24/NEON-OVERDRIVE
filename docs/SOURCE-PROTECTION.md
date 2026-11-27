# Source Protection

Browser games must deliver executable code to the player's device. That means no client-side HTML, CSS or JavaScript can be made impossible to copy.

For release builds:

- Bundle the modules.
- Minify the JavaScript.
- Keep development comments and project documentation in the source repository.
- Do not include secrets, private keys, API credentials or server-only logic in client files.

Minification and obfuscation can make casual reading harder, but they are not DRM and do not prevent reverse engineering.
