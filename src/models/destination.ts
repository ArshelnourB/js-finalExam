import mongoose, { Model, Schema } from 'mongoose';

interface IDestination {
    name: string;
    type: string;
    ingredients: [string];
    instructions: string;
}

const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    activities: {
        type: [String],
        required: true
    }
});

// create Model def and make public
const Destination = mongoose.model<IDestination>('Destination', destinationSchema);
export default Destination;