1. [Komma igång](#komma-igng)
2. [Färger](#frger--)
3. [Navigation](#navigation)
4. [Utförande](#utfrande)

## Komma igång

- `npx create-react-app frontend --template typescript`
- `cd frontend`
  - package.json
    - `npm i react-router-dom @types/react-router-dom`
    - `npm i typescript @types/typescript`
- App.tsx
  - Tömt filen
- Mappstruktur
  - components
    - navigation.tsx
  - shared
    - data
    - global
      - style
      - Global.ts
  - routes
  - view
    - AboutView
    - Contact
    - Cooperative
    - Home
    - NotFound
    - Received
    - Services
    - Support

### Färger -

`color: #d06acf` - ljus rgba (128, 27, 169, opacity)

`color: #801ba9` - mörk rgba (208, 105, 207, opacity)

### Navigation

Navigation skapar jag med en meny som kommer fram vid tryck på en hamburgermeny i mobil och surfplatta-läge. När man
sedan är i desktop-läge kommer menyn att ligga på toppen. För att göra en navigation skapar jag två filer till att börja
med.

- [RoutePath](./client/src/routes/RoutePath.ts) - Alla sökvägar som kommer existera på hemsidan
- [Routing](./client/src/routes/Routing.tsx) - Alla sökvägar skapar länk till rätt sökväg samt rätt vy

Därefter börjar jag skapa min mapp för components

- components
  - navigation
    - NavigationBar.tsx
    - mobile
      - Menu.tsx
      - Burger.tsx
      - Burger.styled.ts
    - desktop
      - Desktop.tsx
      - Desktop.styled.ts

Här bygger jag stil och kod för hur navigationen ska fungera.
Tanken är att det ska vara en "pop-up"-meny som dyker upp när man trycker på en hamburgermeny-knapp.
Det ska då komma fram en block-menu som har alla menyval. Detta då i mobil och surfplatta vy endast.

Jag använder useState för att öppna och stänga menyn. För open, setOpen.
En funktion för att trycka på knappen och stänga menyn varje gång man går från menyn via en menylänk.

Färgerna ska spegla Delecsys tema på hemsidan och temat vi bestämt är de klassiska färgerna för
Delecsys - Lila, Rosa, Orange och sedan har vi inslag av mörkt och ljust.

Fonten som ska användas över hela sidan kommer att vara Roboto, som standard använder vi Roboto thin, sans-serif

### Utförande

Denna hemsida bygger på React, typeScript och Node. För att kunna skapa detta projekt krävs en dator, installation av
Node.js på den, sedan har jag valt att använda Webstorm som min IDE - (integrated development environment).
Så har jag använt Node.js och installerat en react-applikation med hjälp av commando:
`npx create-react-app client --template typescript`

Jag bygger först upp själva strukturen, det vill säga mappar, filer som är nödvändiga och sätter sedan ihop dessa med
kod.
Jag börjar med min App.tsx, denna fil är kopplad till index.tsx samt css-filerna i rooten. Det är också denna som
konverteras till en läsbar index.html när vi väl ser den på hemsidan.
Jag skapar en container och den kan få en stil, jag anpassar såklart för mobilt läge, tablet-läge och desktop-läge.
Detta gör jag med @media-queries och bestämmer en minsta bredd som krävs för att stilen ska aktiveras och jag utgår från
mobilt läge.

Sedan använder jag också css-moduler och dessa används i respektive fil, alternativt kan de vara en egen fil som
exporterar stilen och den kan då användas i samtliga filer.
En global stil som kommer synas på samtliga sidor skapas och läggs till via import i App.tsx

- Portal
- HomeView
- Image
- Text

---

Jag har skapat directory routes för att bygga upp routingen i navigationbar / dropdown-menyn och där använder jag mig
av `npm i react-router-dom @types/react-router-dom`
Med hjälp av detta kan jag skapa en .ts-fil med alla routes som kommer synas i webbläsaren så som '/about' osv.

Och i den andra filen jag skapar som är en .tsx-fil där kommer samtliga tillåtna sökvägar att ligga så att man kan länka
till dom.

Dessa kopplas sedan till navigation-filerna där jag anropar varje länk för sig.

---

Jag har skapat en egen fil, med egen stil till kundportalen som kommer att synas både
