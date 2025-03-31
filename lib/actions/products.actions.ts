import { convertValueToPlainObject } from "../utils";
import { prisma } from "@/sample-data/db/prisma";

export async function getLatestProducts(take:number) {
    //const prisma = new PrismaClient();
    const products = await prisma.product.findMany({
        take,
        orderBy: {
            createdAt: 'desc'
        }
    });
    return convertValueToPlainObject(products);            
}

export async function getProductBySlug(slug:string) {
    const product = await prisma.product.findFirst({
        where: {
            slug
        }
    })

    return product;
}