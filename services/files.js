const AWS = require('aws-sdk');
const BUCKET_NAME = process.env.BUCKET_NAME;
const s3 = new AWS.S3({signatureVersion: 'v4'});
const keys = require('../config/keys');

/**
 * @description Generated a signed and a public urls for a given file name
 * @param filename File name including file extension
 * @param bucketPath Folder path in S3
 * @returns {publicUrl: string, signedUrl: string}
 */
const generateUrl = async (filename, bucketPath) => {
    let signedUrl;
    const publicUrl = getPublicUrl(filename, bucketPath);
    const params = {
        Bucket: keys.s3BucketName,
        Key: `${bucketPath}/${filename}`,
        Expires: 60,
        ACL: 'public-read'
    }

    try {
        signedUrl = await s3.getSignedUrlPromise('putObject', params);
    } catch (err) {
        console.error(`Error generating pre-signed url: ${err.message}`);
        throw new Error('Error generating pre-singed url');
    }

    return {signedUrl, publicUrl};
}

/**
 * @description generates a public URL
 * @param filename File name including file extension
 * @param bucketPath Folder path to file
 * @returns {string}
 */
const getPublicUrl = (filename, bucketPath) => {
    const publicUrl = `https://s3.amazonaws.com/${keys.s3BucketName}/${bucketPath}/${filename}`

    return publicUrl;
}

module.exports = {generateUrl};