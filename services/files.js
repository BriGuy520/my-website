const AWS = require('aws-sdk');
const BUCKET_NAME = process.env.BUCKET_NAME;
const s3 = new AWS.S3({signatureVersion: 'v4'});

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
        Bucket: BUCKET_NAME,
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
    const publicUrl = `https://s3.amazonaws.com/${BUCKET_NAME}/${bucketPath}/${filename}`

    return publicUrl;
}

module.exports = {generateUrl};