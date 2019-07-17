import User from '../models/user';
import { getMovies } from '../lib/api';

const resolvers = {
    Query: {
        users: async () => {
            const users = await User.find({});
            return users;
        },
        user: async (_, { _id }) => {
            const user = await User.findById({ _id });
            return user;
        },
        movies: async (_, { limit, rating }) => {
            const movies = await getMovies(limit, rating);
            return movies;
        }
    },
    Mutation: {
        addUser: async (_, { name, age, gender }) => {
            const newUser = await User.create({ name, age, gender });
            return newUser;
        },
        updateUser: async (_, { _id, name, age, gender }) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id },
                { name, age, gender },
                { new: true }
            );
            return updatedUser;
        },
        removeUser: async (_, { _id }) => {
            const deletedUser = await User.findOneAndDelete({ _id });
            if (deletedUser) return true;
            return false;
        }
    }
};

export default resolvers;
