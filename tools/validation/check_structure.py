#!/usr/bin/env python3
"""Read-only static audit for the NEON OVERDRIVE repository structure."""

from __future__ import annotations

import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[2]
REQUIRED_ROOT_FILES = ("index.html", "game.js", "style.css", "README.md")


class LocalReferenceParser(HTMLParser):
    """Collect local src/href references from HTML elements."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.references: list[tuple[str, str]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        for attribute, value in attrs:
            if attribute in {"src", "href"} and value:
                self.references.append((tag, value.strip()))


def is_external_reference(value: str) -> bool:
    lowered = value.lower()
    return (
        not value
        or value.startswith("#")
        or lowered.startswith(
            ("http://", "https://", "//", "data:", "mailto:", "tel:", "javascript:")
        )
    )


def main() -> int:
    errors: list[str] = []
    warnings: list[str] = []

    for filename in REQUIRED_ROOT_FILES:
        if not (ROOT / filename).is_file():
            errors.append(f"Required root file is missing: {filename}")

    html_path = ROOT / "index.html"
    if not html_path.is_file():
        print("FAIL: index.html is missing; cannot inspect local references.")
        return 1

    parser = LocalReferenceParser()
    try:
        parser.feed(html_path.read_text(encoding="utf-8"))
    except (OSError, UnicodeError) as exc:
        print(f"FAIL: unable to read index.html: {exc}")
        return 1

    for tag, raw_reference in parser.references:
        if is_external_reference(raw_reference):
            continue

        parsed = urlsplit(raw_reference)
        relative_path = unquote(parsed.path)
        if not relative_path:
            continue

        target = (ROOT / relative_path.lstrip("/")).resolve()
        try:
            target.relative_to(ROOT.resolve())
        except ValueError:
            errors.append(f"Reference escapes repository root: {raw_reference}")
            continue

        if not target.is_file():
            errors.append(
                f"Unresolved local {tag} reference in index.html: {raw_reference}"
            )

    if errors:
        print("FAIL: repository structure audit found problems:")
        for item in errors:
            print(f"  - {item}")
    else:
        print("PASS: required root files and local HTML references are present.")

    for item in warnings:
        print(f"WARN: {item}")

    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
