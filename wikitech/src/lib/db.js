const {username,password}=process.env;
export const connectionSrt="mongodb+srv://"+username+":"+password+"@cluster0.2ehac6b.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0";