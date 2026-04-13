import mongoose, { Model, Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

interface ISubscriber {
    username: string;
    password: string;
}

const subscriberSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

subscriberSchema.plugin(passportLocalMongoose);

export const Subscriber = mongoose.model('Subscriber', subscriberSchema) as any;