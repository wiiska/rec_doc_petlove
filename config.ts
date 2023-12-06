import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'pt-BR',
  title: 'PetLove',
  description: 'Descrição da minha documentação',

  themeConfig: {
    nav: [
      { text: 'Introdução', link: '/introducao' },
      { text: 'Descrição do projeto', link: '/descricao' },
      { text: 'principais recursos e funcionalidades', link: '/Principais' },
      { text: 'Diagrama de casos de uso', link: '/casodeuso' },
      { text: 'Diagrama de Classes', link: '/diagrama' },
      { text: 'prototipos de telas', link: '/prototipo' },
      { text: 'Custos e orçamento', link: '/custos' },
      { text: 'Considerações finais', link: '/consideracoes' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],
    search: {
      provider: 'local',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
    },
    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Introdução', link: '/introducao' },
          { text: 'Descrição do projeto', link: '/descricao' },
          {
            text: 'principais recursos e funcionalidades',
            link: '/Principais',
          },
          { text: 'Diagrama de casos de uso', link: '/casodeuso' },
          { text: 'Diagrama de Classes', link: '/diagrama' },
          { text: 'prototipos de telas', link: '/prototipo' },
          { text: 'Custos e orçamento', link: '/custos' },
          { text: 'Considerações finais', link: '/consideracoes' },

          // ...
        ],
      },
    ],
  },
});
