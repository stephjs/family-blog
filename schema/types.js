const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
} = require('graphql');

const Member = require('../model/member.js');
const Post = require('../model/post.js');
const Hobby = require('../model/hobby.js');

const MemberType = new GraphQLObjectType({
  name: 'Member',
  description: 'a family member',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
    age: { type: GraphQLInt },
    isPet: { type: GraphQLBoolean },
    hobbyIds: { type: GraphQLList(GraphQLString) },
    hobbies: {
      type: GraphQLList(HobbyType),
      resolve: (member) => member.hobbyIds.map((id) => Hobby.findById(id)),
    },
    posts: {
      type: GraphQLList(PostType),
      resolve: (member) => Post.find({ authorId: member.id }),
    },
  }),
});

const HobbyType = new GraphQLObjectType({
  name: 'Hobby',
  description: 'a fun hobby',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
    catchphrase: { type: GraphQLString },
    fans: {
      type: GraphQLList(MemberType),
      resolve: (hobby) => Member.find({ hobbyIds: { $in: [hobby.id] } }),
    },
  }),
});

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'a blog post',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLNonNull(GraphQLString) },
    authorId: { type: GraphQLNonNull(GraphQLString) },
    author: {
      type: MemberType,
      resolve: (post) => Member.findById(post.authorId),
    },
  }),
});

module.exports = {
  MemberType,
  HobbyType,
  PostType,
};
