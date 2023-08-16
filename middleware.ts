import { authMiddleware } from "@clerk/nextjs";

// Este exemplo protege todas as rotas, incluindo rotas api/trpc
// Edite isso para permitir que outras rotas sejam públicas conforme necessário.
// Consulte https://clerk.com/docs/nextjs/middleware para obter mais informações sobre como configurar seu middleware
export default authMiddleware({});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
