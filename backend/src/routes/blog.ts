import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify } from 'hono/jwt';
import { createBlogInput, updateBlogInput} from  "@singh_yasharth/medium-common"


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use("/*", async (c,next) => {
    const authheader = c.req.header("Authorization") || ""; //authheader can be of type string or undefined`    
    try{
        const user = await verify(authheader, c.env.JWT_SECRET); 

        if(user){
            
            c.set("userId", user.id as string);
            await next();
        }
        else{
            return c.text("Unauthorized",401);
        }
    }
    catch(e){
        return c.text("Unauthorized",401);
    }
});


blogRouter.post("/",async (c)=>{
    const body = await c.req.json();
    const authorId = c.get("userId")
    const {success}= createBlogInput.safeParse(body);

    if(!success){
        return c.text("Invalid input",400)
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    
    try{
        
        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId : Number(authorId)
            }
        });
        return c.json({
            id : blog.id
        })
    }
    catch(e){
        const error = e as Error;
        return c.text(error.message,500);
    }
    
})
  
blogRouter.put("/",async (c)=>{
    const body = await c.req.json();

    const {success}= updateBlogInput.safeParse(body);
    if(!success){
        return c.text("Invalid input",400)
    }
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    
    
    const blog = await prisma.blog.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }
    });

    return c.json({
        id: blog.id
    })
})


//TODO: add pagination
blogRouter.get("/bulk",async (c)=>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blogs = await prisma.blog.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            author: {
                select:{
                    name: true
                }
            }
        }
    })
    return c.json({ 
        blogs
    })  
})
  
  
blogRouter.get("/:id",async (c)=>{
    const id = await c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
   
    try{
        
        const blog = await prisma.blog.findFirst({
            where: {
                id: Number(id)
            },
            select : {
                id: true,
                title: true,
                content: true,
                author : {
                    select : {
                        name: true
                    }
                }
            }
        
        });

        return c.json({
            blog
        });
    }
    catch(e){
        return c.text("Blog not found",404)
    }
})
