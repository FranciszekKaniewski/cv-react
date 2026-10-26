# Portfolio — Franciszek Kaniewski

Portfolio w React i TypeScript, z polską i angielską wersją językową, filtrami projektów i galeriami.

Strona: [franciszekkaniewski.github.io/cv-react](https://franciszekkaniewski.github.io/cv-react/)

## Uruchomienie lokalne

```sh
npm ci
npm run dev
```

## Sprawdzenie projektu

```sh
npm test
npm run build
npm run preview
```

Wersja produkcyjna korzysta ze ścieżki `/cv-react/`. Serwer developerski działa pod `/`.

## Publikacja na GitHub Pages

```sh
npm run deploy
```

Komenda buduje aplikację i publikuje zawartość `dist` na branchu `gh-pages` repozytorium `origin`. Wymaga dostępu do zapisu w repozytorium przez Git. Kod źródłowy pozostaje na `main`.

W ustawieniach repozytorium **Settings → Pages** źródłem publikacji jest **Deploy from a branch → gh-pages → / (root)**.
