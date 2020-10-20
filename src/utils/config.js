
const dev = {
  baseUrl: {
      url: 'https://api.mercadolibre.com/',
  },
};

const qa = {
  baseUrl: {
      url: 'https://api.mercadolibre.com/',
  },
};

const hm = {
  baseUrl: {
      url: 'https://api.mercadolibre.com/',
  },
};

const prod = {
  baseUrl: {
      url: 'https://api.mercadolibre.com/',
  },
};

let config = dev;

if (process.env.REACT_APP_STAGE === 'qa') {
  config = qa;
} else if (process.env.REACT_APP_STAGE === 'hm') {
  config = hm;
} else if (process.env.REACT_APP_STAGE === 'prod') {
  config = prod;
}


export default {
  TokenLifetime: '300',
  timeoutApi: 60000,
  ...config,
};
