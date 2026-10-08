import velhopromocoes_jpg_1296 from '../../../assets/projects/velhopromocoes/image_jpg_1296.jpg';
import vbcash_jpg_1296 from '../../../assets/projects/vbcash/image_jpg_1296.jpg';
import rovitex_jpg_1296 from '../../../assets/projects/rovitex/image_jpg_1296.jpg';

const velhopromocoes = {
  name: 'Velho Promoçoes',
  description: 'Aplicação fullstack de anuncio e venda de ingressos',
  url: {
    site: 'https://velhopromocoes.com.br/',
  },
  image: {
    jpg1296: velhopromocoes_jpg_1296,
    alt: 'Imagem da home do Velho Promoções',
  },
  about: [
    'O Velho Promoções é uma plataforma de e-commerce para anúncio e venda de ingressos, que cobre todo o fluxo de compra: carrinho, validação de disponibilidade, pedidos, checkout e processamento de pagamentos.',
    'A integração com os gateways PagBank, Efí e Ágili permite pagamentos via PIX e cartão de crédito, com webhooks para confirmação, além de cancelamentos, estornos e tratamento de pagamentos recusados.',
    'O backend foi construído em C#/.NET com APIs REST, CQRS e Mediator, e evoluiu de Clean Architecture para Vertical Slice Architecture. A persistência usa Dapper e Stored Procedures em MySQL, e a autenticação é feita com JWT.',
    'O site é desenvolvido em React e consome o mesmo backend do VB Cash. Há também um aplicativo em Flutter para leitura e validação de ingressos via QR Code.',
  ],
  features: [
    'CRUD',
    'Filtrar listas',
    'Etiquetar lista',
    'Fixar lista',
    'Duplicar lista',
    'Alterar cor da lista',
  ],
  technologies: [
    'C#',
    '.NET',
    'ASP.NET',
    'React',
    'REST APIs',
    'CQRS',
    'Mediator',
    'Vertical Slice Architecture',
    'Dapper',
    'MySQL',
    'Stored Procedures',
    'JWT',
    'Flutter'
  ]
};

const vbcash = {
  name: 'VB Cash',
  description: 'Aplicação fullstack de um PDV',
  url: {
    site: 'https://vbcash.com.br/',
  },
  image: {
    jpg1296: vbcash_jpg_1296,
    alt: 'Imagem da home do VB Cash',
  },
  about: [
    'O VB Cash é uma aplicação fullstack de PDV (ponto de venda).',
    'Ele compartilha o backend com o Velho Promoções, desenvolvido em C#/.NET com CQRS, Mediator e Vertical Slice Architecture, e com persistência via Dapper e Stored Procedures em MySQL.',
    'A API conta com autenticação JWT e integração com gateways de pagamento, e o site foi desenvolvido em Next.js.',
  ],
  features: [
    'CRUD de transaçoes por meio de uma web api criada com ASP.NET',
    `Filtro dinâmico`,
    'Migração feita via Entity Framework',
  ],
  technologies: [
    'C#',
    '.NET',
    'ASP.NET',
    'React',
    'Next.js',
    'TypeScript',
    'REST APIs',
    'CQRS',
    'Mediator',
    'Vertical Slice Architecture',
    'Dapper',
    'MySQL',
    'Stored Procedures',
    'JWT',
    'Flutter'
  ]
};

const b2brovitex = {
  name: 'Lojista Rovitex',
  description: 'Ecommerce B2B',
  url: {
    site: 'https://lojista.rovitex.com.br/b2b',
  },
  image: {
    jpg1296: rovitex_jpg_1296,
    alt: 'Imagem da home da Rovitex',
  },
  about: [
    'O Lojista Rovitex é o novo e-commerce B2B da Rovitex, no qual atuei desde a definição da arquitetura até a implementação de funcionalidades no front-end e no back-end.',
    'O sistema reúne módulo de produtos, gerenciamento de clientes e carrinho de compras, além de um painel administrativo com menus dinâmicos, banners, cupons, dashboards e gerenciamento de usuários.',
    'A solução utiliza C#, .NET, Blazor Server, Node.js e TypeScript, seguindo Clean Architecture, CQRS e Mediator. A comunicação entre serviços é feita por mensageria com RabbitMQ, e os dados ficam em Oracle e PostgreSQL.',
  ],
  features: [
    'CRUD de transaçoes por meio de uma web api criada com ASP.NET',
    `Filtro dinâmico`,
    'Migração feita via Entity Framework',
  ],
  technologies: [
    'C#',
    '.NET',
    'Blazor Server',
    'JavaScript',
    'HTML',
    'CSS',
    'Clean Architecture',
    'CQRS',
    'Mediator',
    'RabbitMQ',
    'Oracle',
    'PostgreSQL',
  ]
};





export const sites = [velhopromocoes, vbcash, b2brovitex]