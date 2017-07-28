export const S3_CLIENT_OPTIONS = {
  maxAsyncS3: 20,     // this is the default
  s3RetryCount: 3,    // this is the default
  s3RetryDelay: 1000, // this is the default
  multipartUploadThreshold: 20971520, // this is the default (20 MB)
  multipartUploadSize: 15728640, // this is the default (15 MB)
  s3Options: {
    region: 'us-east-1',
  },
};

// NOTE: Change below options following your environment
// Local defined Constants
export const DEPLOY_VERSION = process.env.DEPLOY_VERSION;
export const PRODUCTION_GIT_TAG = 'production';
export const AWS_S3_BUCKET = 'serverless-react-tylor-app';
export const AWS_S3_FOLDER_PREFIX = 'react-app';
export const APP_DEST = './dist/';
export const VERSION_FILE_NAME = 'production_version';
export const VERSION_FILE_PATH = `./temp/${VERSION_FILE_NAME}`;
