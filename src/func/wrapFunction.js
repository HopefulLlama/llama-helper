module.exports = (func) => {
  return (config) => {
    return (versionMetadata, done) => {
      return func(versionMetadata, config, done);
    };
  };
};