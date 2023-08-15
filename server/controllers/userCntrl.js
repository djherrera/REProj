import asyncHandler from "epress-async-handler";

import {prisma} from "../config/prismaConfig.js";

// Basic form of creating an API, it will give a response as a result and request are the input parameters
export const createUser = asyncHandler(async(req, res) => {
    console.log("creating a user");

    let {email} = req.body

    console.log(email)
});