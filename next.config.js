const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
    if (phase=PHASE_DEVELOPMENT_SERVER){

        //!Development...
        return {
          env: {
            mongodb_username: "fearm3",
            mongodb_password: "123456Pp",
            mongodb_clustername: "blogappnext",
            mongodb_database: "my-site-dev",
          },
        };
    }
      return {
        env: {
          mongodb_username: "fearm3",
          mongodb_password: "123456Pp",
          mongodb_clustername: "blogappnext",
          mongodb_database: "my-site",
        },
      };
};
