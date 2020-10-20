const { GraphQLSchema } = require('graphql');
const { RootQuery } = require('./query.js');
const { Mutation } = require('./mutation.js');

module.exports = {
  schema: new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
  }),
};
