const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
} = require('graphql');
const { MemberType, PostType, HobbyType } = require('./types.js');

const Member = require('../model/member.js');
const Post = require('../model/post.js');
const Hobby = require('../model/hobby.js');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addMember: {
      type: MemberType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLInt },
        isPet: { type: GraphQLBoolean },
        hobbyIds: { type: GraphQLList(GraphQLString) },
      },
      resolve: (parent, args) => {
        const member = new Member({
          name: args.name,
          age: args.age,
          isPet: args.isPet,
          hobbyIds: args.hobbyIds || [],
        });
        member.save();
        return member;
      },
    },
    addPost: {
      type: PostType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        content: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        const post = new Post({
          title: args.title,
          content: args.content,
          authorId: args.authorId,
        });
        post.save();
        return post;
      },
    },
    addHobby: {
      type: HobbyType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        catchphrase: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        const hobby = new Hobby({
          name: args.name,
          catchphrase: args.catchphrase,
        });
        hobby.save();
        return hobby;
      },
    },
  },
});

module.exports = {
  Mutation,
};
