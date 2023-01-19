import React from "react";
import Stories from "react-insta-stories";
function Storie() {
    const stori = [
        "https://en.wikipedia.org/wiki/Brown_bear#/media/File:2010-kodiak-bear-1.jpg",
        {
            url: "https://en.wikipedia.org/wiki/Brown_bear#/media/File:2010-kodiak-bear-1.jpg",
            duration: 5000,
        },
    ];

    return (
        <Stories
            stories={stori}
            defaultInterval={1500}
            width={432}
            height={768}
        />
    );
}

export default Storie;
