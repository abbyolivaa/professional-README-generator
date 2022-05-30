const { request } = require("@octokit/request");

const getLicense = license => {
    license = license.toLowerCase()

    return new Promise((resolve) => {
        resolve(
            request(`GET /licenses/${license}`, {
                license: 'license'
            })
          );
    });  
};

module.exports = getLicense;