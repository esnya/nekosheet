import React, {PropTypes} from 'react';

export const Router = (props) => {
    const {
        route,
        routes,
        params,
    } = props;

    const Component = routes[route];
    if (!Component) {
        return <div>Error: Not Found</div>;
    }

    return <Component params={params} />;
};
Router.propTypes = {
    route: PropTypes.string.isRequired,
    routes: PropTypes.object.isRequired,
    params: PropTypes.object,
};
