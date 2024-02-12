import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLList, GraphQLSchema } from 'graphql';
import User from '../../Modals/User'; // Import your Mongoose User model here
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import dotenv from 'dotenv';
dotenv.config();

const userArgs = {
    email: { type: GraphQLNonNull(GraphQLString) },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    date: { type: GraphQLString },
    isAdmin: { type: GraphQLInt },
    otps: { type: GraphQLInt },
    boardingStatus: { type: GraphQLInt },
    categories: { type: GraphQLString },
    occupation: { type: GraphQLString }
}

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        _id: { type: GraphQLNonNull(GraphQLID) },
        email: { type: GraphQLNonNull(GraphQLString) },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        date: { type: GraphQLNonNull(GraphQLString) },
        isAdmin: { type: GraphQLInt },
        boardingStatus: { type: GraphQLInt },
        categories: { type: GraphQLString },
        occupation: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getUser: {
            type: UserType,
            args: {
                _id: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve(_, args) {
                return User.findById(args._id);
            }
        },
        getUsers: {
            type: GraphQLList(UserType),
            resolve() {
                return User.find();
            }
        }
    }
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: UserType,
            args: userArgs,
            resolve: async (_, args) => {
                try {
                    const hashedPassword = await bcrypt.hash(args.password, 10);

                    const newUser = await User.create({
                        ...args,
                        password: hashedPassword
                    });

                    return newUser;
                } catch (error) {
                    throw new Error('Failed to create user');
                }
            }
        },
        registerUser: {
            type: UserType,
            args: userArgs,
            resolve: async (_, args) => {
                try {
                    // Check if the user already exists
                    const existingUser = await User.findOne({ email: args.email });
                    if (existingUser) {
                        throw new Error('User already exists');
                    }

                    // Hash the password
                    const hashedPassword = await bcrypt.hash(args.password, 10);

                    // Create a new user
                    const newUser = await User.create({
                        ...args,
                        password: hashedPassword
                    });

                    return newUser;
                } catch (error: any) {
                    throw new Error('Failed to register user: ' + error.message);
                }
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                _id: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve: async (_, { _id }) => {
                try {
                    const deletedUser = await User.findByIdAndDelete(_id);
                    return deletedUser;
                } catch (error) {
                    throw new Error('Failed to delete user');
                }
            }
        },
        login: {
            type: GraphQLString,
            args: {
                email: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: async (_, { email, password }) => {
                try {
                    const user = await User.findOne({ email });

                    if (!user) {
                        throw new Error('User not found');
                    }

                    const isPasswordValid = await bcrypt.compare(password, user.password);

                    if (!isPasswordValid) {
                        throw new Error('Invalid password');
                    }

                    // Generate JWT token
                    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Expires in 1 hour

                    return token;
                } catch (error) {
                    throw new Error('Login failed');
                }
            }
        },
        verifyToken: {
            type: UserType,
            args: {
                token: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: async (_, { token }) => {
                try {
                    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
                    const user = await User.findById(decodedToken.userId);

                    if (!user) {
                        throw new Error('User not found');
                    }

                    return user;
                } catch (error) {
                    throw new Error('Failed to verify token');
                }
            }
        },
        changePassword: {
            type: UserType,
            args: {
                userId: { type: GraphQLNonNull(GraphQLID) },
                oldPassword: { type: GraphQLNonNull(GraphQLString) },
                newPassword: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: async (_, { userId, oldPassword, newPassword }) => {
                try {
                    // Find the user by userId
                    const user = await User.findById(userId);

                    if (!user) {
                        throw new Error('User not found');
                    }

                    // Compare old password
                    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);

                    if (!isPasswordValid) {
                        throw new Error('Invalid old password');
                    }

                    // Hash the new password
                    const hashedPassword = await bcrypt.hash(newPassword, 10);

                    // Update user's password with new hashed password
                    user.password = hashedPassword;
                    await user.save();

                    return user;
                } catch (error: any) {
                    throw new Error('Failed to change password: ' + error.message);
                }
            }
        },
        resetPassword: {
            type: UserType,
            args: {
                email: { type: GraphQLNonNull(GraphQLString) },
                newPassword: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: async (_, { email, newPassword }) => {
                try {
                    // Check if the user exists
                    const user = await User.findOne({ email });

                    if (!user) {
                        throw new Error('User not found');
                    }

                    // Hash the new password
                    const hashedPassword = await bcrypt.hash(newPassword, 10);

                    // Update user's password with new hashed password
                    user.password = hashedPassword;
                    await user.save();

                    return user;
                } catch (error: any) {
                    throw new Error('Failed to reset password: ' + error.message);
                }
            }
        },
    }
});

export default new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
});
