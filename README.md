# use-local-storage-state

> 🧠 A lightweight React hook for managing persistent state using `localStorage` or `sessionStorage`.

## [![npm version](https://img.shields.io/npm/v/use-local-storage.svg?style=flat-square)](https://www.npmjs.com/package/@sarah_mn/use-local-storage-state) [![npm downloads](https://img.shields.io/npm/dm/use-local-storage.svg?style=flat-square)](https://www.npmjs.com/package/@sarah_mn/use-local-storage-state) [![license](https://img.shields.io/npm/l/use-local-storage.svg?style=flat-square)](LICENSE)

## Installation

```bash

npm  install  @sarah_mn/use-local-storage-state

# or

yarn  add  @sarah_mn/use-local-storage-state

# or

pnpm  add  @sarah_mn/use-local-storage-state

```

---

## Usage

```tsx
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [name, setName] = useLocalStorageState("name", "Sarah");

  return <input value={name} onChange={(e) => setName(e.target.value)} />;
}
```

---

## API

**useLocalStorageState(key, initialValue, options?)**

- `key` — string key for storage

- `initialValue` — default value

- `options` — `"local" || "session"`

---

## ✨ Features

- ⚡ Simple React hook interface

- 🔒 Syncs state with `localStorage` or `sessionStorage`

- 🧩 TypeScript ready

- 🔁 Works across tabs and reloads

- 🌗 Supports SSR-safe defaults

---

## Contributing

if your pull requests makes documentation changes, please update readme file.

## License

MIT © [Sarah_Mn](https://github.com/Sarah-Mn)
