/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    '@snowpack/plugin-webpack',
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-postcss',
    [ "snowpack-resolve-alias", {
      "extension": [ ".js", ".jsx" ],
      "devPath": "src",
      "noWarning": true
    } ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { 
      "match": "routes", 
      "src": ".*", 
      "dest": "/index.html" 
    },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    "bundle": true,
    "minify": true,
    "target": 'es2018'
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 3000,
    open: 'none',
    tailwindConfig: './tailwind.config.js',
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    '@app': './src'
  }
};
