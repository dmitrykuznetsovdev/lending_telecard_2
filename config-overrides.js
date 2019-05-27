module.exports = function override(config, env) {
  config.resolve = {
    ...config.resolve
  };

  return config;
};
