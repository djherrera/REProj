// This is residency controller just shortened to resdCntrl
import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaConfig.js";

export const createResidency = asyncHandler(async (req, res) => {
    const { title, description, price, address, country, city, facilities, image,
        userEmail } = req.body.data

    console.log(req.body.data)

    try {
        const residency = await prisma.residency.create({
            data: {
                title, 
                description, 
                price, 
                address, 
                country, 
                city, 
                facilities, 
                image,
                // Instead of userEmail, we replace it with owner field, 
                // this will make a connection with user field
                owner : {connect : {email: userEmail}},
            },
        });

        res.send({ message: "Residency created successfully", residency })
    } catch (err) {
        // This error occurs when a unique address is violated
        if (err.code == "P2002") {
            throw new Error("A residency with address already there")
        }
    }
    throw new Error(err.message)
});

const getAllResidencies =  asyncHandler(async(req, res)=> {
    try {
        
    } catch (error) {
        
    }
})