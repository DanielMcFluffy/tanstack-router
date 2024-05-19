import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/one/two/three")({
  component: () => <div>Hello /one/two/three!</div>,
});

//this is an example of a nested route without creating a nested folder
//we instead use the route1.route2.route3.tsx format

//this is called a flat structure (nesting)
