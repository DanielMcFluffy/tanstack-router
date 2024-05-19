import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context }) => {
    const { isLogged } = context.authentication;
    if (!isLogged()) {
      throw redirect({ to: "/login" });
    }
  },
});

//this route here is the parent route for the routes in the authenticated folder
//applying beforeLoad on this route ensures that we're running auth logic before visiting any of the /authenticated/... routes
