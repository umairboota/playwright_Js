
# Playwright Codegen Commands

Playwright's `npx playwright codegen` command generates test code automatically by recording your browser interactions. Here are the commands for different browsers and languages:

## Basic Syntax
```bash
npx playwright codegen [URL] [options]
```

## By Browser

### Chromium
```bash
npx playwright codegen https://example.com --target chromium
```

### Firefox
```bash
npx playwright codegen https://example.com --target firefox
```

### WebKit
```bash
npx playwright codegen https://example.com --target webkit
```

## By Language

### JavaScript
```bash
npx playwright codegen https://example.com --target javascript
```

### TypeScript
```bash
npx playwright codegen https://example.com --target typescript
```

### Python
```bash
npx playwright codegen https://example.com --target python
```

### C#
```bash
npx playwright codegen https://example.com --target csharp
```

## Combined Examples

### Firefox + Python
```bash
npx playwright codegen https://example.com --target firefox --lang python
```

### Chromium + TypeScript
```bash
npx playwright codegen https://example.com --target chromium --lang typescript
```

### WebKit + C#
```bash
npx playwright codegen https://example.com --target webkit --lang csharp
```

## Common Options
- `--output` - Save generated code to file
- `--save-trace` - Record trace for debugging
- `--headed` - Run browser in headed mode (visible window)
