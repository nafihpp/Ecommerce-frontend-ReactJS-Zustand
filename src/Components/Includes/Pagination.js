import React from "react";
import styled from "styled-components";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <Parent className="pagination">
                {pageNumbers.map((number) => (
                    <Child
                        key={number}
                        className="page-item"
                        onClick={() => paginate(number)}
                    >
                        <a
                            style={{ textDecoration: "none", color: "#000" }}
                            className="page-link"
                        >
                            {number}
                        </a>
                    </Child>
                ))}
            </Parent>
        </nav>
    );
};

const Parent = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
    margin-top: -28px;
`;
const Child = styled.li`
    margin-right: 20px;
    border: 3px solid #000;
    padding: 2px;
    width: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
export default Pagination;
