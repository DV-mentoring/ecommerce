import { useLocation } from "react-router-dom";

export const useBreadCrumbs = () => {
    const location = useLocation();
    const pathParts = location.pathname.split("/").filter(Boolean);
    let accumulatedPath = "";

    const breadcrumbs = pathParts.map(part => {
        accumulatedPath += `/${part}`;
        return {
            path: accumulatedPath,
            label: part,
        };
    });

    return [{ path: "/", label: "Home" }, ...breadcrumbs];
};
