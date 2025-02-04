# WebElozetes

# Web II. előzetes feladatok

Ez a projekt egy egyszerű filmeket listáző és szűrő frontend alkalmazást valamint egy express backend adminisztrációs rendszert tartalmaz.

## Telepítés

Használd a [npm](https://www.npmjs.com/) csomagkezelőt a függőségek telepítéséhez.

```bash
npm install
```

## Használat

### Frontend indítása

1. Nyisd meg a **`1/`** mappát VSCode-ban.
2. Használj egy live server bővítményt vagy nyisd meg az `index.html` fájlt egy böngészőben.

### Backend indítása

1. Nyisd meg a **`2/`** mappát egy terminálban.
2. Futtasd az alábbi parancsokat:
   ```bash
   npm install  # A szükséges csomagok telepítése
   node .       # A szerver indítása
   ```
3. A szerver alapértelmezés szerint a `http://localhost:3000` címen fut.

## Függőségek

A backend az alábbi főbb csomagokat használja:

- `express` - Webszerver keretrendszer
- `mustache-express` - Mustache sablonmotor
