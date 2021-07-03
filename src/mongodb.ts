import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  // if (mongoose.connections[0].readyState) {
  //   // Use current db connection
  //   return handler(req, res);
  // }
  // Use new db connection
  await mongoose.disconnect();
  await mongoose.connect(process.env.MOONGOSE_CONNECTION, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
  });
  return handler(req, res);
};

export const connectDuduDB = (handler) => async (req, res) => {
  // if (mongoose.connections[0].readyState) {
  //   // Use current db connection
  //   return handler(req, res);
  // }
  // Use new db connection
  await mongoose.disconnect();
  await mongoose.connect(process.env.MOONGOSE_CONNECTION_DUDU, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
  });
  return handler(req, res);
};

export default connectDB;