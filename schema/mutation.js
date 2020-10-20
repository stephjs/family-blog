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

const returnUpdatedDocument = { new: true };

const deleteById = (type, model, label) => ({
  type,
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: (parent, args) => {
    const deleted = model.findByIdAndDelete(args.id).exec();
    if (!deleted) {
      throw new Error(`Error deleting the ${label}.`);
    }
    return deleted;
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createMember: {
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
        return member.save();
      },
    },
    updateMember: {
      type: MemberType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLInt },
        isPet: { type: GraphQLBoolean },
        hobbyIds: { type: GraphQLList(GraphQLString) },
      },
      resolve: (parent, args) => {
        return Member.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              age: args.age,
              isPet: args.isPet,
              hobbyIds: args.hobbyIds,
            },
          },
          returnUpdatedDocument
        );
      },
    },

    deleteMember: deleteById(MemberType, Member, 'member'),

    createPost: {
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
        return post.save();
      },
    },

    updatePost: {
      type: PostType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
        title: { type: GraphQLNonNull(GraphQLString) },
        content: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        return Post.findByIdAndUpdate(
          args.id,
          {
            $set: {
              title: args.title,
              content: args.content,
            },
          },
          returnUpdatedDocument
        );
      },
    },

    deletePost: deleteById(PostType, Post, 'post'),

    createHobby: {
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
        return hobby.save();
      },
    },
    updateHobby: {
      type: HobbyType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        catchphrase: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return Hobby.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              catchphrase: args.catchphrase,
            },
          },
          returnUpdatedDocument
        );
      },
    },

    deleteHobby: deleteById(HobbyType, Hobby, 'hobby'),
  },
});

module.exports = {
  Mutation,
};
