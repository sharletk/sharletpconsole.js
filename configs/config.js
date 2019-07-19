const config = {
  GLOBAL: {
    time: (str) => `\x1B[90m${str}\x1B[0m`,
        
    LOG: {
      message: (str) => `\x1B[92m${str}\x1B[0m`
    },
      
    WARN: {
      message: (str) => `\x1B[93m${str}\x1B[0m`
    },
      
    ERROR: {
      message: (str) => `\x1B[91m${str}\x1B[0m`
    },
      
    DEBUG: {
      message: (str) => `\x1B[96m${str}\x1B[0m`
    }
  }
};

module.exports = config;