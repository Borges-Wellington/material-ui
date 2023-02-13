const path = require('path');

// AVISO: Use este módulo apenas como inspiração.
// Escolha cuidadosamente as partes que você precisa e inline-as no webpack.config que você precisa.
// Este módulo não é usado para construir a documentação. Usamos o Next.js para isso.
// Este módulo é usado pelos testes de regressão visual para executar as demos e pelo eslint-plugin-import.

module.exports = {
  context: path.resolve(__dirname),
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      '@mui/material': path.resolve(__dirname, './packages/mui-material/src'),
      '@mui/docs': path.resolve(__dirname, './packages/mui-docs/src'),
      '@mui/icons-material': path.resolve(__dirname, './packages/mui-icons-material/lib'),
      '@mui/lab': path.resolve(__dirname, './packages/mui-lab/src'),
      '@mui/styled-engine': path.resolve(__dirname, './packages/mui-styled-engine/src'),
      '@mui/styled-engine-sc': path.resolve(__dirname, './packages/mui-styled-engine-sc/src'),
      '@mui/styles': path.resolve(__dirname, './packages/mui-styles/src'),
      '@mui/system': path.resolve(__dirname, './packages/mui-system/src'),
      '@mui/private-theming': path.resolve(__dirname, './packages/mui-private-theming/src'),
      '@mui/base': path.resolve(__dirname, './packages/mui-base/src'),
      '@mui/utils': path.resolve(__dirname, './packages/mui-utils/src'),
      '@mui/material-next': path.resolve(__dirname, './packages/mui-material-next/src'),
      '@mui/joy': path.resolve(__dirname, './packages/mui-joy/src'),
      'typescript-to-proptypes': path.resolve(__dirname, './packages/typescript-to-proptypes/src'),
      docs: path.resolve(__dirname, './docs'),
    },
    extensions: ['.js', '.ts', '.tsx', '.d.ts'],
  },
};
