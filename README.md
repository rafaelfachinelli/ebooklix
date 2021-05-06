<div align="center">

<img alt="Ebooklix" src=".github/banner.png">

</div>

<p align="center"> 
  <img alt="Tamanho do Repositório" src="https://img.shields.io/github/repo-size/rafaelfachinelli/ebooklix?style=for-the-badge&color=15D6D6">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/rafaelfachinelli/ebooklix?style=for-the-badge&color=15D6D6">
  <a href="https://github.com/rafaelfachinelli">
    <img alt="Feito por Rafael Fachinelli" src="https://img.shields.io/badge/feito%20por-Rafael Fachinelli-%15B6D6?style=for-the-badge&color=15D6D6">
  </a>
  <img alt="Licença" src="https://img.shields.io/github/license/rafaelfachinelli/ebooklix?style=for-the-badge&color=15D6D6"/>
<p>

<p align="center">
 <a href="#movie_camera-demonstração">Demonstração</a> •
 <a href="#computer-sobre">Sobre</a> •
 <a href="#triangular_ruler-status-do-projeto">Status</a> •
 <a href="#dvd-executar-o-projeto">Executar</a> •
 <a href="#hammer-tecnologias">Tecnologias</a> •
 <a href="#boy-autor">Autor</a> •
 <a href="#page_facing_up-licença">Licença</a>
</p>

---
## :movie_camera: **Demonstração**

https://ebooklix.vercel.app

https://ebooklix.herokuapp.com

<p align="center"><b> :computer: PLATAFORMA WEB </b></p>

<p align="center">
  <kbd>
    <img style="border-radius: 5px" width="450px" height="250px" alt="Demonstração do Aplicativo Ebooklix" src="./.github/demo-desk-ebooklix.gif">
  </kbd> 
</p>

---
## :computer: Sobre

Plataforma com interface inspirada no Netflix utilizando React e NodeJS para organizar meus ebooks.

Projeto desenvolvido durante a **Imersão React** oferecida pela [Alura](https://www.alura.com.br).
A imersão é uma experiência online com muito conteúdo prático e desafios com duração de uma semana para conclusão.

---
## :triangular_ruler: **Status do Projeto**

<h4 align="center"> 
	👶 Finalizado.
</h4>

---
## :dvd: **Executar o Projeto**

### :desktop_computer: **WEB Responsivo**

Entre na pasta [`web/`](web/) e execute os seguintes comandos:

<details>
<summary><i>com <b>npm</b></i></summary>

```bash
# Instalar dependências
$ npm install

# Iniciar servidor de desenvolvimento
$ npm start
```

</details>

<details>
<summary><i>com <b>yarn</b></i></summary>

```bash
# Instalar dependências
$ yarn

# Iniciar servidor de desenvolvimento
$ yarn start

```

</details>

> ⚠️ O servidor de desenvolvimento iniciará na porta:3000 - Acesse <http://localhost:3000>

### :globe_with_meridians: **Servidor**

Entre na pasta [`server/`](server/) e execute os seguintes comandos:

<details>
<summary><i>com <b>npm</b></i></summary>

```bash
# Instalar dependências
$ npm install

# Criar banco de dados
$ npm typeorm migration:run

# Iniciar servidor
$ npm dev
```

</details>

<details>
<summary><i>com <b>yarn</b></i></summary>

```bash
# Instalar dependências
$ yarn

# Criar banco de dados
$ yarn typeorm migration:run

# Iniciar servidor de desenvolvimento
$ yarn dev
```

</details>

> ⚠️ O servidor iniciará na porta:3333 - Acesse <http://localhost:3333>

> ⚠️ O Banco de Dados fica salvo em [`server/src/database/database.sqlite`](server/src/database/database.sqlite)

---
## :hammer: **Tecnologias**

As seguintes ferramentas foram utilizadas na construção do projeto:

<div align="center">

|WEB Responsivo|Servidor|
|:---:|:---:|
|React|Node.js|

</div>

---
## :boy: **Autor**

<div align="center">
  
[![Author](https://github.com/rafaelfachinelli/rafaelfachinelli/blob/master/.github/author.svg)](https://www.linkedin.com/in/rafaelfachinelli/)

</div>

---
## :page_facing_up: **Licença**

<div align="center">
  
[![License](https://github.com/rafaelfachinelli/rafaelfachinelli/blob/master/.github/license.svg)](./LICENSE)

</div>
