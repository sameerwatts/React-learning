import React, { Children } from 'react';

const Section = ({title, children, ...props }) => {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
};

export default Section;