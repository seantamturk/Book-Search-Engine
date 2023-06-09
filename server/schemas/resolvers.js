const { Book, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

// const resolvers = {
//   Query: {
//     book : async () => {
//       return User.find({});
//     },
//     user : async (parent, {_id}) => {
//       const params = _id ? {_id} : {};
//       return User.find(params);
//     },
//   },
// };

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      // First we create the user
      const user = await User.create({ username, email, password });
      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await User.findOne({ email });

      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },

    //i added context here. Without the context parameter, the context.user check will not work properly.
    saveBook: async (parent, { bookData }, context) => {
      if (context.user) {
        const userSavedBooks = User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { savedBooks: { bookData } },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return userSavedBooks;
      }

      throw new AuthenticationError("User must be logged in to save books");
    },
    //i added context here. Without the context parameter, the context.user._id check will not work properly.
    //added await to findoneandupdate 
    removeBook: async (parent, { bookId }, context) => {
      if (context.user._id) {
        const deleteBookRec = await User.findOneAndUpdate(
          { _id: context.user.bookId },
          {
            $pull: { savedBooks: { bookId } },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("User must be logged in to save books");
    },
  },
};

module.exports = resolvers;
