import mongoose from 'mongoose';
import User from './user';

const { MONGO_ID, MONGO_PASSWORD, NODE_ENV } = process.env;
const MONGO_URL = `mongodb+srv://${MONGO_ID}:${MONGO_PASSWORD}@m001-wdcbq.mongodb.net/graphql-demo?retryWrites=true&w=majority`;

export default () => {
    const connect = () => {
        if (NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }
        mongoose.connect(
            MONGO_URL,
            {
                useNewUrlParser: true,
                useFindAndModify: false
            },
            error => {
                if (error) {
                    console.log('MongoDB Connection Error', error);
                } else {
                    console.log('MongoDB Connected!');
                }
            }
        );
    };
    connect();

    mongoose.connection.on('error', error => {
        console.error('MongoDB Connection Error', error);
    });
    mongoose.connection.on('disconnected', () => {
        console.error('MongoDB Disconnected! Trying to connect...');
        connect();
    });

    User;
};
