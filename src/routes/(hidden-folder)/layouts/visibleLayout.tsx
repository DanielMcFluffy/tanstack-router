import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(hidden-folder)/layouts/visibleLayout")({
  component: VisibleLayout,
  notFoundComponent: () => (
    <div>I'm the not found page, inside /visiblelayout</div>
  ),
}); //the notFoundComponent can assist in rendering 404 pages inside a specific route prefix

function VisibleLayout() {
  return (
    <>
      <div>
        <p>This layout is visible in the URL 👀</p>
        <Link to="/layouts/visibleLayout/foo">Foo</Link>{" "}
        <Link to="/layouts/visibleLayout/bar">Bar</Link>
        <hr />
        <Outlet />
        {/* outlet to render the routes */}
      </div>
    </>
  );
}

//notice how if we navigate to a route with visibleLayout prefix, the hidden-folder term is not present in the url due to it being wrapped by a parenthesis () similar to an underscore _
