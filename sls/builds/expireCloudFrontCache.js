const AWS = require('aws-sdk');

const cloudfront = new AWS.CloudFront();
let cloudfrontProductionId;
if (process.env.NODE_ENV === 'production') {
  cloudfrontProductionId = 'E2UYUYW1X9QRWF';
} else {
  cloudfrontProductionId = 'E3R0FKX17MAJ0I';
}

function expireCloudFrontCache() {
  return new Promise((resolve, reject) => {
    console.log('CloudFront Invalidation Started');
    cloudfront.createInvalidation({
      DistributionId: cloudfrontProductionId,
      InvalidationBatch: {
        CallerReference: `CI-Invalidation-${Date.now().toString()}`,
        Paths: {
          Quantity: 1,
          Items: [
            '/*',
          ],
        },
      },
    }, (err, data) => {
      if (err) { reject(err); } else { resolve(data); }
    });
  }).then((invalidation) => new Promise((resolve, reject) => {
    var handle = setInterval(() => {
      cloudfront.getInvalidation({
        Id: invalidation.Id,
        DistributionId: cloudfrontProductionId,
      }, (err, invalidation) => {
        if (invalidation.Status == 'Completed') {
          console.log('Done');
          clearInterval(handle);
          resolve();
        } else {
          console.log('*');
        }
      });
    }, 1000);
  }));
}

expireCloudFrontCache().then(() => {
  console.log('Every cache has been expired');
});
