import User from '../models/user';

const resolvers = {
    Query: {
        users: async () => {
            const users = await User.find({});
            return users;
        },
        user: async (root, { _id }) => {
            const user = await User.findById({ _id });
            return user;
        }
    },
    Mutation: {
        addUser: async (root, { name, age, gender }) => {
            const newUser = await User.create({ name, age, gender });
            return newUser;
        },
        updateUser: async (root, { _id, name, age, gender }) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id },
                { name, age, gender },
                { new: true }
            );
            return updatedUser;
        },
        removeUser: async (root, { _id }) => {
            const deletedUser = await User.findOneAndDelete({ _id });
            if (deletedUser) return true;
            return false;
        }
    }
};

export default resolvers;
