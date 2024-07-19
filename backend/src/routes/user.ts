import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';
import { signupInput, signinInput } from '@singh_yasharth/medium-common';

export const userRouter = new Hono<{
	Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
	}
}>();

userRouter.post("/signup", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    const {success}= signupInput.safeParse(body);
    if(!success){
      return c.text("Invalid input",400)
    }
  
    try {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          name: body.name,
          password: body.password,
        },
      });
  
      if (!c.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
      }
  
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ jwt });
    } catch (e) {
      console.error(e); // Log the error for debugging purposes
      return c.text("Something went wrong", 500);
    }
  });
  
  userRouter.post("/signin",async (c)=>{
    const prisma = new PrismaClient({
          datasourceUrl: c.env?.DATABASE_URL	,
      }).$extends(withAccelerate());
  
    const body = await c.req.json()

    const {success} = signinInput.safeParse(body)
    if(!success){
      return c.text("Invalid input",400)
    }
    
    const user = await prisma.user.findUnique({ 
        where:{
          email: body.email,
          password : body.password
        }
      })
    
    if(!user){
      c.status(403) //403 is used when you are not authorized
      return c.text("Invalid email")
    }
      const jwt = await sign({id: user.id}, c.env.JWT_SECRET)
      return c.json({
        jwt
      })
  })  

//TODO: signout route
//tasks: remove jwt token when user sign out and redirect to sign in page
//use localstorage to store jwt token
//use axios to make request to backend