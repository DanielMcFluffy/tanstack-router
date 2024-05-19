import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(hidden-folder)/layouts/_hiddenLayout")({
  component: HiddenLayout,
});

function HiddenLayout() {
  return (
    <>
      <div>
        <p>This layout is not visible in the URL 👀</p>
        <Link to="/layouts/foo">Foo</Link> <Link to="/layouts/bar">Bar</Link>
        <hr />
        <Outlet />
        {/* outlet to render the routes */}
      </div>
    </>
  );
}

//this will not show unless we render the child routes
