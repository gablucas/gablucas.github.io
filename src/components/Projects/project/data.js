import learnquest_webp_1296 from '../../../assets/projects/learnquest/image_webp_1296.webp';
import learnquest_jpg_1296 from '../../../assets/projects/learnquest/image_jpg_1296.jpg';

import radstore_webp_1296 from '../../../assets/projects/radstore/image_webp_1296.webp';
import radstore_jpg_1296 from '../../../assets/projects/radstore/image_jpg_1296.jpg';

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

import savemysavings_webp_1296 from '../../../assets/projects/savemysavings/image_webp_1296.webp';
import savemysavings_jpg_1296 from '../../../assets/projects/savemysavings/image_jpg_1296.jpg';

const savemysavings = {
  name: 'SaveMySavings',
  description: 'Aplicação fullstack de controle financeiro (EM DESENVOLVIMENTO)',
  url: {
    github: 'https://github.com/gablucas/SaveMySavings-aspnet-react',
  },
  image: {
    webp1296: savemysavings_webp_1296,
    jpg1296: savemysavings_jpg_1296,
    alt: 'Imagem do projeto SaveMySavings',
  },
  features: [
    'CRUD de transaçoes por meio de uma web api criada com ASP.NET',
    'Migração feita via Entity Framework',
    'Valor total de receitas e despesas'
  ],
  technologies: [
    'C#',
    ".NET",
    "ASP.NET",
    "Entity Framework",
    "SQL Server",
    'React',
    'Axios',
  ]
};

const learnquest = {
  name: 'LearnQuest',
  description: 'Plataforma de ensino gamificada',
  url: {
    site: 'https://gablucas.github.io/learnquest-react-ts/',
    github: 'https://github.com/gablucas/learnquest-react-ts/tree/main',
  },
  image: {
    webp1296: learnquest_webp_1296,
    jpg1296: learnquest_jpg_1296,
    alt: 'Imagem do site LearnQuest',
  },
  features: [
    'Controle de acesso baseado em função (admin/professor/aluno)',
    'Criar usuários, aulas, matérias e turmas',
    'Gerenciamento de alunos',
    'Avaliação de tarefas',
    'Informações de progressão',
    'Sistema gamificado'
  ],
  technologies: [
    'Html',
    'Css',
    'TypeScript',
    'React',
    'Jest',
  ]
};

const radstore = {
  name: 'Rad Store',
  description: 'E-commerce de Roupas e Esportes Radicais',
  url: {
    site: 'https://gablucas.github.io/radstore-react/',
    github: 'https://github.com/gablucas/radstore-react/tree/main',
    figma: 'https://www.figma.com/file/Swtnn1dgpnW2gn4U6WCtR9/Radical-Store?type=design&node-id=0%3A1&t=aqIH9jm6i247beL4-1',
  },
  image: {
    webp1296: radstore_webp_1296,
    jpg1296: radstore_jpg_1296,
    alt: 'Imagem do site Rad Store',
  },
  features: [
    'Criar conta', 
    'Painel do usuário', 
    'Favoritar produto', 
    'Carrinho', 
    'Finalizar compra', 
    'Alterar dados do usuário', 
    'Informações do pedido',
    'Dados salvos no localStorage para simular um banco de dados'
  ],
  technologies: [
    'Html',
    'Css',
    'JavaScript',
    'React',
    'Styled Components',
    'Axios',
    'React Query',
    'Figma'
  ]
};

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
    'Filtrar listas',
    'Etiquetar lista',
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
    figma: 'https://www.figma.com/file/oMf90s5VAXpbHS8tDYlovP/Longboard-Shop?type=design&node-id=1203%3A963&t=aqIH9jm6i247beL4-1',
  },
  image: {
    webp1296: ohai_webp_1296,
    jpg1296: ohai_jpg_1296,
    alt: 'Imagem do site Ohai Longboards',
  },
  features: [
    'Criar conta', 
    'Painel do usuário', 
    'Favoritar produto', 
    'Carrinho', 
    'Finalizar compra', 
    'Alterar dados do usuário', 
    'Informações do pedido',
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
    'Sistema de recompensas (XP e Gold)',
    'Sistema de ataque e defesa', 
    'Progressão de fases',
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
    site: 'https://gablucas.github.io/dogs-react',
    github: 'https://github.com/gablucas/dogs-react/tree/main',
  },
  image: {
    webp1296: dogs_webp_1296,
    jpg1296: dogs_jpg_1296,
    alt: 'Imagem do site Ohai Longboards',
  },
  features: [
    'Projeto feito com auxílio do curso',
    'Consumo de Rest API com autenticação JWT',
    'Registrar usuário',
    'Postar fotos',
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


export const sites = [savemysavings, learnquest, radstore, dogs, battlecards, mybrain, ohailongboards, maplestoryclicker]