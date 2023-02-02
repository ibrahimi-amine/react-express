# IBRAHIMI-TP2

## Etat du projet
Projet lancé sans aucun problème

## Dépendances

### Server dependencies

    Dependencies : 

        @types/express: ^4.17.15,
        @types/node: ^18.11.18,
        express: ^4.18.2,
        socket.io: ^4.5.4

    Development dependencies: 

        ts-node: ^10.9.1,
        typescript: ^4.9.4

### Client dependencies

    Dependencies : 

        @babel/preset-react: ^7.0.0,
        easy-peasy: ^5.2.0,
        file-loader: ^6.2.0,
        jsx-loader: ^0.13.2,
        webpack: ^5.75.0

    Development dependencies: 
        @babel/core: ^7.20.12,
        @babel/preset-env: ^7.20.2,
        @types/react: ^18.0.26,
        @types/react-dom: ^18.0.10,
        @types/react-router-dom: ^5.3.3,
        @types/redux-logger: ^3.0.9,
        @typescript-eslint/eslint-plugin: ^5.0.0,
        @typescript-eslint/parser: ^5.48.2,
        babel-loader: ^9.1.2,
        babel-preset-es2015: ^6.24.1,
        css-loader: ^6.7.3,
        eslint: ^8.0.1,
        eslint-config-standard-with-typescript: ^27.0.1,
        eslint-plugin-import: ^2.25.2,
        eslint-plugin-n: ^15.0.0,
        eslint-plugin-promise: ^6.0.0,
        eslint-plugin-react: ^7.32.0,
        eslint-webpack-plugin: ^3.2.0,
        html-webpack-plugin: ^5.5.0,
        mini-css-extract-plugin: ^2.7.2,
        react: ^18.2.0,
        react-device-detect: ^2.2.2,
        react-dom: ^18.2.0,
        react-full-screen: ^1.1.1,
        react-router-dom: 5.2.0,
        socket.io-client: ^4.5.4,
        source-map-loader: ^4.0.1,
        style-loader: ^3.3.1,
        tailwindcss: ^3.2.4,
        ts-loader: ^9.4.2,
        typescript: *,
        webpack-cli: ^5.0.1

## Setup 

    Dans le serveur 
        yarn add express --save
        yarn add typescript ts-node express --dev
        yarn add @types/node @types/express
        npm i -g tsc
        tsc --init

    Dans le client
        yarn add typescript --dev 
        yarn add react-dom react @types/react-dom @types/react --dev
        yarn add --dev ts-loader
        npm install --save-dev @babel/core @babel/preset-env
        npm install --save-dev babel-loader
        yarn add --dev eslint
        yarn add --dev eslint-webpack-plugin

## Utilisation
        yarn run dev        :  pour le build du client en developpement
        yarn run production :  pour le build du client en production,
        yarn run start      :  pour lancer le serveur
