# Acervo Cadastro-Livro

![Preview-Screens](https://github.com/paulogermanopg/cadastro-livros/blob/main/imagem.png)

## Sobre este projeto

Este projeto traz como ideia um pequeno CRUD para cadastramento de livros, com uma interface simples e agradável aos olhos do usuário. Possibilitando o armazenamento com um banco de dado online. No projeto aqui presente foi utilizado o Firebase.

## O motivo

O projeto tem como objetivo exemplificar um CRUD adaptável para inúmeras situações, naõ apenas para acervos. Ele faz parte de meu portfólio pessoal, então sinta-se livre para dar seu feedback, criar seus forks e opinar; e se de algum modo este projeto foi importante para você eu já me sinto satisfeito.

Meu LinkedIn, disponível em: [LinkedIn](https://www.linkedin.com/in/paulo-germano-pg/).

## Instalação

Este é um projeto [Next.js](https://nextjs.org/) criado através de [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Startando o projeto 
(perdoem-me o neologismo) 

Primeiramente, execute o servidor com:

```bash
npm run dev
# or
yarn dev
```

Abra em seu navegador [http://localhost:3000](http://localhost:3000) para ver o rultado da aplicação.

## Estilo da aplicação

O projeto traz como estilo de seus componentes o [TailWind CSS](https://tailwindcss.com/), com ícones obtidos em [Hero Icons](https://heroicons.com/).

## Armazenamento

O projeto usa para armazenamento dos dados o Firebase. Para criar uma conta no firebase acesse: [Firebase](https://firebase.google.com/?hl=pt)
Crie um novo projeto e acesse o Firestore. Em suas configurações encontrará as informações necessárias para preencher o .env.local de seu projeto.

## .env.local

Crie um arquivo chamado .env.local na pasta raiz de sua aplicação, ele não será enviado para o seu repositório pois irá contar as informações sensíveis do seu banco de dados.
Nele deverá ser digitado tais informações:

NEXT_PUBLIC_FIREBASE_API_KEY=

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=

NEXT_PUBLIC_FIREBASE_PROJECT_ID=

Encontradas nas configurações do Firestore Database.

## Clonando o repositório

**Clone o repositório com:**

```
$ git clone https://github.com/paulogermanopg/cadastro-livros.git
$ cd cadastro-livros
```

**Instale as dependências com:**

```
$ yarn
```

_ou_

```
$ npm i

```

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE.md](https://github.com/paulogermanopg/cadastro-livros/blob/main/LICENSE) para obter detalhes.
