import asyncHandler from "express-async-handler";

import {prisma} from "../config/prismaConfig.js";

// Basic form of creating an API, it will give a response as a result and request are the input parameters
export const createUser = asyncHandler(async(req, res) => {
    console.log("creating a user");

    let {email} = req.body;
    // Prisma is reading the user's collection where it's reading a unique document where
    // the email field of the user is equal to our email.
    const userExist = await prisma.user.findUnique({where: {email: email}})
    if (!userExist) {

        const user = await prisma.user.create({data: req.body})
        res.send({
            message: "User registered successfully",
            // This will display the User's information after a successful registry
            user: user,
        });
    } else res.status(201).send({ message: "User already registered" });
});