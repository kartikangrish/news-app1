import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb://kartik:1234@ac-uyg25iv-shard-00-00.p5ob20a.mongodb.net:27017,ac-uyg25iv-shard-00-01.p5ob20a.mongodb.net:27017,ac-uyg25iv-shard-00-02.p5ob20a.mongodb.net:27017/?ssl=true&replicaSet=atlas-k5khfq-shard-0&authSource=admin&retryWrites=true&w=majority`
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;