import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: () => <div>Hello /authenticated/dashboard!</div>,
});

//this route inside authenticated folder will be authenticated
//we will create a file same level as the folder named authenticated to handle the logic
