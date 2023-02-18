import ohailongboards from '../../../assets/projects/ohailongboards.png';
import mybraintodolist from '../../../assets/projects/mybraintodolist.png';

export const sites = [
  {
    name: 'My Brain Todo List',
    description: 'Lista de Tarefas',
    url: {
      site: 'https://gablucas.github.io/mybrain-todolist-react',
      github: 'https://github.com/gablucas/mybrain-todolist-react',
    },
    image: {
      path: mybraintodolist,
      alt: 'Imagem do site My Brain Todo List',
    },
    features: [
      'CRUD',
      'Etiquetar e filtrar listas',
      'Fixar lista',
      'Duplicar lista',
      'Alterar cor da lista', 
    ],
    technologies: [
      'Html',
      'Css',
      'JavaScript',
      'React',
    ]
  },
  {
    name: 'Ohai Boards',
    description: 'E-commerce de Longboard',
    url: {
      site: 'https://gablucas.github.io/site-longboard-loja',
      github: 'https://github.com/gablucas/site-longboard-loja',
    },
    image: {
      path: ohailongboards,
      alt: 'Imagem do site Ohai Longboards',
    },
    features: [
      'Cadastro de usuários', 
      'Painel do usuário', 
      'Favoritar produto', 
      'Adicionar produto ao carrinho', 
      'Finalizar compra', 
      'Alterar dados do usuário', 
      'Ver dados do pedido',
      'Dados salvos no localStorage para simular um banco de dados'
    ],
    technologies: [
      'Html',
      'Css',
      'JavaScript',
      'Figma'
    ]
  },
]