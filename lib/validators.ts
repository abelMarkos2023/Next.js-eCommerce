import { z } from "zod";
import { formatPriceInDecimal } from "./utils";

const currecyValidator = z.string()
.refine((value) => /^\d+(\.\d{2})?$/.test(formatPriceInDecimal(Number(value))))   

export const insertValidator = z.object({
    name : z.string().min(3,'Name must be at least 3 characters long'),
    slug : z.string().min(3,'Slug must be at least 3 characters long'),
    description : z.string().min(3,'Description must be at least 3 characters long'),
    images : z.array(z.string()).min(1,'At least one image is required'),
    brand : z.string().min(3,'Brand must be at least 3 characters long'),
 
    stock : z.coerce.number().min(1,'Stock must be at least 1'),
    isFeatured : z.boolean().default(false),
    banner : z.string().nullable(),
    price :  currecyValidator 

})