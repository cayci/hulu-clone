const { withLayer0, withServiceWorker } = require('@layer0/next/config');

module.exports = withLayer0(
  withServiceWorker({
    layer0SourceMaps: true,
  })
  images: {
    domains: ["image.tmdb.org"]
  }, 
);