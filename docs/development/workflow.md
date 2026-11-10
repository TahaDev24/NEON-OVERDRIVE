# Development Workflow

## Before changing files

1. Read the relevant source and the existing root README.
2. Identify whether the change affects runtime behavior, asset paths, saved data, controls, or browser compatibility.
3. Keep unrelated cleanup out of the change.
4. Prefer a focused change with a clear reason and a reproducible verification step.

## Branching and commits

- Work on a topic branch rather than directly on `main`.
- Use commit messages that describe the actual change.
- Keep commits logically grouped; do not create empty or cosmetic commits to inflate repository activity.
- Review the complete diff before proposing a merge.

## Runtime-file protection for this organization pass

The approved scope for `architecture-refactor` is supporting documentation and non-mutating repository tools only.

Do not edit or move:

- `index.html`
- `game.js`
- `style.css`
- `README.md`

If a runtime fix becomes necessary, document the finding and request separate approval before implementing it.

## Verification

Run the repository structure audit from the repository root:

```bash
python tools/validation/check_structure.py
```

The audit is read-only. A reported missing path is a finding to investigate, not permission for the script to modify files. Record the environment and exact command when reporting verification results.
