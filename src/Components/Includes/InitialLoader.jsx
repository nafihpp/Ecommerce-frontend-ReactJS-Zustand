import React from "react";
import animationData from "../../loader/75400-shopping-bag.json";
import Lottie from "react-lottie";

export const InitialLoader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div
            style={{
                background: "#000",
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Lottie options={defaultOptions} height={250} width={250} />
        </div>
    );
};
