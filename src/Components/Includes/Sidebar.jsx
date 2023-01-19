import React, { useState } from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
    width: 250px;
    background-color: #f2f2f2;
    padding: 20px;
    position: fixed;
    top: 0px;
    bottom: 0;
    left: 0;
`;

const FilterOption = styled.div`
    margin-bottom: 10px;
`;

const Sidebar = () => {
    const [selectedOptions, setSelectedOptions] = useState("");

    const handleOptionChange = (event) => {
        const { name1, value } = event.target;
        setSelectedOptions({ ...selectedOptions, [name1]: value });
        console.log(selectedOptions);
    };
    const reset = (event) => {
        const { name1, value } = event.target;
        setSelectedOptions({ [name1]: "" });
    };

    return (
        <SidebarContainer>
            <h1>Brands</h1>
            <button
                onClick={(event) => {
                    reset(event);
                    console.log(selectedOptions);
                }}
            >
                Reset It
            </button>
            <FilterOption>
                <label>
                    <input
                        type="checkbox"
                        name="option1"
                        value="value1"
                        onChange={handleOptionChange}
                    />
                    Nike
                </label>
            </FilterOption>

            <FilterOption>
                <label>
                    <input
                        type="checkbox"
                        name="option2"
                        value="value2"
                        onChange={handleOptionChange}
                    />
                    Puma
                </label>
            </FilterOption>
        </SidebarContainer>
    );
};

export default Sidebar;
