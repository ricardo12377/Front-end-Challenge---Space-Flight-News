<h3>Front-end-Challenge Space Flight News</h3>

<strong>Sumário</strong>
<ul>
  <li>Descrição</li>
  <li>Tecnologias usadas</li>
  <li>Como iniciar um projeto</li>
</ul>

<h5>Descrição</h5>
<em>
  Projeto feito para completar um desafio de front-end, onde criei um site de notícias consumindo uma API externa, foi implementada todas as funções requeridas no projeto,
  são elas, a função de buscar notícia pelo título, alternar ordem de reprodução por data mais antiga ou mais nova e aumentar número de notícias na tela, de 10 em 10.
  
  Foi feito o modal, com o link para acessar o site da notícía.
  
  Foram realizados testes nos pontos cruciáis do código, como card de notícia e lista de notícia.
  
  <strong> Optei usar CSS puro para aplicar a base e nativo do desenvolvimento web, porém caso necessário usar algum pré-processador ou framework CSS, possúo prática. 
</em>


<h2>Tecnologias usadas</h2>

<ul>
  <li>ReactJS</li>
  <li>React Router Dom</li>
  <li>Controle de estado com ContextAPI</li>
  <li>CSS puro</li>
  <li> React Testing Library / Jest Dom </li>
</ul>


<h2>Como iniciar um projeto</h2>

<strong>Com Docker</strong>

  1 - Na realizar o processo de build: <em>  docker build -t docker-react . </em>
  
  2 - Para rodar o projeto que já foi feito a build: <em> docker run -it docker-react bash </em>
  
  3 - Para abrir o projeto no navegador: <em> docker run -it -p 3000:3000 docker-react npm start </em>
  
  
<strong>Com a pasta raiz sem o Docker </strong>

  1 - Entrar na pasta "desafio_react" e digitar: <em> npm install </em>
  
  2 - Quando instalado todas as dependências: <em> npm start </em>
  
