import { insertValidator } from "@/lib/validators";
import { z } from "zod";


export  type TProduct = z.infer<typeof insertValidator> & { 
    id: string,
    rating: string,
    createdAt: Date,

 };