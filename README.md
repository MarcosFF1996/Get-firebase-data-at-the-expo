# Get-firebase-data-at-the-expo

# Informações
Esse exemplo foi feito com React Function Components e utiliza React-Hooks.

# Instalação
Na pasta do seu projeto execute seguinte comando

```bash
expo install --save firebase
```

# Iniciando a API do Firebase
Crie um novo arquivo para as configurações do Firebase, no meu caso criei o arquivo em `src/firebase.js`

Primeiro importamos o Firebase

```js
import firebase from 'firebase/app';
import 'firebase/database';
```

Em seguida definimos as configurações de autenticação da nossa conta no Firebase.
Esses dados são adiquiridos ao criar o projeto no Firebase escolhendo a opção Web.

```js
const config = {
  apiKey: "????",
  authDomain: "????",
  databaseURL: "????",
  projectId: "????",
  storageBucket: "????",
  messagingSenderId: "????",
  appId: "????"
};
```

Iniciamos a conexão.

```js
!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
```

E no final exportamos

```js
export default firebase;
```

# Consumindo a API

Primeiro importamos o arquivo com a configuração da conexão

```js
import firebase from './src/firebase';
```

Para pegar os dados é necessário utilizar o Hook `useEffect` para garantir a execução apenas uma vez.
No exemplo eu estou pegando o `nome` do `usuario1`.

```js
useEffect(() => {
  firebase.database().ref('usuarios/usuario1/nome').on('value', (snapshot) => {
    const nome = snapshot.val();
    //Salvar o resultado em uma State
  });
}, []);
```
