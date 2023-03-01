import battlecards_webp_1296 from '../../../assets/projects/battlecards/image_webp_1296.webp';
import battlecards_jpg_1296 from '../../../assets/projects/battlecards/image_jpg_1296.jpg';

import mybrain_webp_1296 from '../../../assets/projects/mybraintodolist/image_webp_1296.webp';
import mybrain_jpg_1296 from '../../../assets/projects/mybraintodolist/image_jpg_1296.jpg';

import ohai_webp_1296 from '../../../assets/projects/ohailongboards/image_webp_1296.webp';
import ohai_jpg_1296 from '../../../assets/projects/ohailongboards/image_jpg_1296.jpg';

import maplestory_webp_1296 from '../../../assets/projects/maplestoryclicker/image_webp_1296.webp';
import maplestory_jpg_1296 from '../../../assets/projects/maplestoryclicker/image_jpg_1296.jpg';

import dogs_webp_1296 from '../../../assets/projects/dogs/image_webp_1296.webp';
import dogs_jpg_1296 from '../../../assets/projects/dogs/image_jpg_1296.jpg';

const battlecards = {
  name: 'Pokemon Battle Cards',
  description: 'Game de batalha de cards',
  url: {
    site: 'https://gablucas.github.io/battlecards-pokemon-react',
    github: 'https://github.com/gablucas/battlecards-pokemon-react/tree/main',
  },
  image: {
    webp1296: battlecards_webp_1296,
    jpg1296: battlecards_jpg_1296,
    alt: 'Imagem do site Pokemon Battle Cards',
  },
  features: [
    'Sistema de dificuldades (Inteligência da máquina)',
    'Sistema de pontuação',
    'Sistema de turnos',
    'Animações com Styled Components',
    'Custom Hooks',
    'Consumo de Rest API',
  ],
  technologies: [
    'Html',
    'Css',
    'JavaScript',
    'React',
    'Styled Components',
  ]
};

const mybrain = {
  name: 'My Brain Todo List',
  description: 'Lista de Tarefas',
  url: {
    site: 'https://gablucas.github.io/mybrain-todolist-react',
    github: 'https://github.com/gablucas/mybrain-todolist-react/tree/main',
  },
  image: {
    webp1296: mybrain_webp_1296,
    jpg1296: mybrain_jpg_1296,
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
};

const ohailongboards = {
  name: 'Ohai Boards',
  description: 'E-commerce de Longboard',
  url: {
    site: 'https://gablucas.github.io/site-longboard-loja',
    github: 'https://github.com/gablucas/site-longboard-loja',
  },
  image: {
    webp1296: ohai_webp_1296,
    jpg1296: ohai_jpg_1296,
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
}

const maplestoryclicker =   {
  name: 'MapleStory Clicker',
  description: 'RPG Game Clicker',
  url: {
    site: 'https://gablucas.github.io/game-maplestory-clicker',
    github: 'https://github.com/gablucas/game-maplestory-clicker',
  },
  image: {
    webp1296: maplestory_webp_1296,
    jpg1296: maplestory_jpg_1296,
    alt: 'Imagem do site Ohai Longboards',
  },
  features: [
    'Sistema de progressão de níveis',
    'Progressão de fases de acordo com o nível do personagem',
    'Atacar monstros para ganhar recompensas (XP e Gold)', 
    'Loja de itens', 
    'Inventário do personagem',
    'Equipar itens',
    'Hotkeys', 
  ],
  technologies: [
    'Html',
    'Css',
    'JavaScript',
  ]
}

const dogs =   {
  name: 'Dogs',
  description: 'Rede Social de Cachorros',
  url: {
    site: 'https://gablucas.github.io/curso-origamid-site-dogs-react',
    github: 'https://github.com/gablucas/curso-origamid-site-dogs-react/tree/main',
  },
  image: {
    webp1296: dogs_webp_1296,
    jpg1296: dogs_jpg_1296,
    alt: 'Imagem do site Ohai Longboards',
  },
  features: [
    'Projeto feito com auxílio do curso',
    'CRUD',
    'Consumo de Rest API com autenticação JWT',
    'Feed com scroll infinito',
    'Estatísticas' 
  ],
  technologies: [
    'Html',
    'Css',
    'JavaScript',
    'React',
  ]
}


export const sites = [battlecards, mybrain, ohailongboards, maplestoryclicker, dogs]