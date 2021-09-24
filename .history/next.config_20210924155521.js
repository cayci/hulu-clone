const { withLayer0, withServiceWorker } = require('@layer0/next/config');
module.exports = {
  images: {
    domains: ["image.tmdb.org"]
  }, 
};
module.exports = withLayer0(
  withServiceWorker({
    layer0SourceMaps: true,
  })
  
)