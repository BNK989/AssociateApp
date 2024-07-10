import { getSupabaseSessionToken } from '@/utils/auth';
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()


export default defineNuxtRouteMiddleware(async (to, from) => {
    if(!process.client) return
    // console.log('from:', from.path)
    // console.log('to:', to.path)
    // console.log('Session Token:', getSupabaseSessionToken())
    // if (!to.path.includes('profile')) return
    // const user = useSupabaseUser()
    // if (!user.value) return navigateTo('/login')
    // return
})

// const prisma = new PrismaClient().$extends({
//     query: {
//       $allModels: {
//         async $allOperations({ model, operation, args, query }) {
//           const token = getSupabaseSessionToken();
//           if (token) {
//             args = {
//               ...args,
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             };
//           }
//           return query(args);
//         },
//       },
//     },
//   });
  