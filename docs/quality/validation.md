# Repository Validation

## Static structure audit

Run:

```bash
python tools/validation/check_structure.py
```

The audit uses only the Python standard library. It checks that the expected root entry files exist and that local `src` and `href` references in `index.html` resolve to files in the repository.

The script does not launch a browser, execute the game, inspect gameplay, validate audio, or guarantee mobile compatibility.

## Known finding in the audited snapshot

The current HTML references `css/style.css` and `js/game.js`, while the tracked files are at the repository root. The structure audit is expected to report those unresolved references until the project owner separately approves a runtime-path correction.

## Limits

A successful static audit only means the checks implemented by the script passed. It is not a substitute for browser testing on desktop and mobile. Do not describe static checks as gameplay tests.
