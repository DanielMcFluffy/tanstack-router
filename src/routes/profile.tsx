import { createFileRoute, redirect } from "@tanstack/react-router";
// import { isAuthenticated } from "../utils/auth";

export const Route = createFileRoute("/profile")({
  //beforeLoad will run before we visit a route -- it will be responsible for checking auth status
  beforeLoad: ({ context }) => {
    //after setting up auth context, between root and app.tsx, we can then pass the context value here
    const { isLogged } = context.authentication; // we're using the context passed from the routerprovider
    // if (!isAuthenticated()) {
    if (!isLogged()) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: () => <div>Hello /profile!</div>,
});

//above is an example of protecting 1 route
