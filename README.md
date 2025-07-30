# Frontend - Simulateur de Crédit (Angular 2)

## Prérequis

- Windows avec Visual Studio 2017/2019 (.NET Framework 4.8)
- Node.js 8.17.0 et npm 5.6.0 ([nvm-windows recommandé pour gérer plusieurs versions](https://github.com/coreybutler/nvm-windows))
- Git

## Installation backend (.NET 4.8)

1. Ouvrir le dossier `SimpleFrameworkApp` dans Visual Studio.
2. Restaurer les packages NuGet si besoin.
3. Compiler et lancer le projet en mode `Debug` (F5).
4. L’API doit répondre sur `https://localhost:44389/api/credit/calculate`.

## Installation frontend (Angular 2)

1. Ouvrir un terminal dans le dossier `credit-app-ng2`.
2. S’assurer d’être sous Node 8.17.0 et npm 5.6.0 :
   ```
   node -v
   npm -v
   ```
3. Installer les dépendances :
   ```
   npm install
   ```
4. Lancer l’application :
   ```
   ng serve
   ```
5. Accéder à [http://localhost:4200](http://localhost:4200)

## Fonctionnalités

- Saisie du montant d'achat, fonds propres, durée, taux annuel
- Modification manuelle ou auto des frais d'achat et du montant à emprunter
- Calcul côté serveur de tous les résultats et génération du tableau d’amortissement
- Affichage conforme à l’exemple Excel

---

© 2025 - Aymen Khiari
