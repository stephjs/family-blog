const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const { MemberType, HobbyType, PostType } = require('./types.js');

const Member = require('../model/member.js');
const Post = require('../model/post.js');
const Hobby = require('../model/hobby.js');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: () => ({
    member: {
      type: MemberType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => Member.findById(args.id),
    },
    family: {
      type: GraphQLList(MemberType),
      resolve: () => Member.find({}),
    },
    hobby: {
      type: HobbyType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => Hobby.findById(args.id),
    },
    hobbies: {
      type: GraphQLList(HobbyType),
      resolve: () => Hobby.find({}),
    },
    post: {
      type: PostType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => Post.findById(args.id),
    },
    posts: {
      type: GraphQLList(PostType),
      resolve: () => Post.find({}),
    },
  }),
});

module.exports = {
  RootQuery,
};
