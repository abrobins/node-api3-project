module.exports = format => {
  return (req, res, next) => {
    switch (
      options.format // this is just an example showing how you could pass an object here - also could just do a single parameter
    ) {
      case "short":
        console.log(`${req.method} ${req.url}`);
        break;
      case "long":
      default:
        console.log(
          `${new Date().toISOString()} ${req.ip} ${req.method} ${req.url} `
        );
        break;
    }
    next();
  };
};
