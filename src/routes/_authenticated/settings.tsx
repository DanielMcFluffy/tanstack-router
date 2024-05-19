import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/settings")({
  component: () => <div>Hello /authenticated/settings!</div>,
});

//this route inside authenticated folder will be authenticated
//we will create a file same level as the folder named authenticated to handle the logic
