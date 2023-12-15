import mongoose from "mongoose";
// mongo //
export const connectDB = async () => {
    try {
await mongoose.connect("mongodb+srv://Srf:200422102013Da@cluster0.l84ekr6.mongodb.net/?retryWrites=true&w=majority");
     console.log(">>> DB Se conecto")
    } catch (error){
        console.log(error);
}
};