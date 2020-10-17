import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/tasklist', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

export default mongoose;
