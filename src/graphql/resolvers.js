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
    }
};

export default resolvers;
