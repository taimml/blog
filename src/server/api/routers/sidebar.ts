import Elysia from "elysia";
import { userService } from "./user";
import { db } from "@/server/db";
import { sidebarTable } from "@/server/db/schema";
import { sidebarSchema } from "@/lib/shared/schemas/sidebar";

export const sidebarRouter = new Elysia({prefix: '/sidebar'})
.use(userService)
.get('/', async () => {
    const res = await db.query.sidebarTable.findFirst();

    return res ?? null
    // return{
    //     success: true,
    //     data: sidebarData
    // };
})
.post('/', async ({body}) => {
    const result = await db.insert(sidebarTable).values(body);
    return result;
}, {
    body: sidebarSchema,
    // hasRole: 'admin'
})