import React, { useEffect, useRef } from "react";

const Paginate = (props) => {
    const observingDiv = useRef();

    useEffect(() => {
        const observingElement = observingDiv.current;

        if (!observingElement) return;
        const observer = new IntersectionObserver((data) => {
            const isIntersecting = data[0].isIntersecting;

            if (props.onIntersection) props.onIntersection(isIntersecting);
        });

        observer.observe(observingElement);

        return () => {
            observer.unobserve(observingElement);
        };
    }, []);
    return (
        <div style={{ position: "relative" }}>
            {props.children}
            <div
                ref={observingDiv}
                style={{
                    height: `${window.innerHeight * 1.5}px`,
                    position: "absolute",
                    bottom: "0",
                }}
            />
        </div>
    );
};

export default Paginate;
