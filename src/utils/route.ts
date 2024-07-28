export const getNavigation = ({
  routes,
  pathname,
}: {
  routes: IRoute[];
  pathname: string;
}) => {
  return routes.map((route: IRoute) => ({
    name: route.name,
    href: route.href,
    current:
      route.typePath === "exact"
        ? pathname === route.current
        : pathname.startsWith(route.current),
  }));
};
