import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f2f2f2;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 16px;
    outline: none;
`;

const Select = styled.select`
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 16px;
    outline: none;
`;

const TextArea = styled.textarea`
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 16px;
    outline: none;
`;

const Label = styled.label`
    font-size: 16px;
    margin-bottom: 5px;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const BackButton = styled.button`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: #fff;
    color: #000;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #000;
        color: #fff;
    }
`;

const PaymentButton = styled.button`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #fff;
        color: #000;
    }
`;

const Sidebar = styled.div`
    background-color: #f1f1f1;
    height: 100vh;
    width: 200px;
    position: fixed;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
`;

const Content = styled.div`
    margin-left: 200px;
    padding: 20px;
`;

const TableWrapper = styled.div`
    overflow-x: auto;
    margin-top: 20px;
`;

const OrdersTable = styled.table`
    border-collapse: collapse;
    width: 100%;
    th {
        background-color: #f5f5f5;
        color: #333;
        font-weight: bold;
        text-align: left;
        padding: 10px;
    }
    td {
        border: 1px solid #ddd;
        padding: 10px;
    }
`;

const SidebarButton = styled(Link)`
    margin: 10px;
    padding: 10px 20px;
    background-color: #2d2d2d;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    border-radius: 5px;
    &:hover {
        background-color: #424242;
    }
`;

const AddressList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
`;

const AddressItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
`;

const AddressLabel = styled.span`
    font-weight: bold;
`;

const AddressActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AddressButton = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
`;

const ShippingAddress = ({ onNext, onBack }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && address && city && zip && country) {
            console.log(
                "Submitted!",
                name,
                email,
                address,
                city,
                zip,
                country,
                phone,
                additionalInfo
            );
            onNext();
        } else {
            alert("all required fields to be filled");
        }
    };
    const [addresses, setAddresses] = useState([
        {
            name: "nafibxfcbggbfdfdfbfbbfh",
            address: "puthen gfbfdhbfdjhdvbfv nfd vdnfkvkxfkffb",
        },
        {
            name: "nafibxfcbggbfdfdfbfbbfh",
            address: "puthen gfbfdhbfdjhdvbfv nfd vdnfkvkxfkffb",
        },
    ]);

    return (
        <>
            <Container>
                <Sidebar>
                    <p>Mohammed Nafih</p>
                    <SidebarButton style={{ textDecoration: "none" }} to="/">
                        Home
                    </SidebarButton>
                    <SidebarButton
                        style={{ textDecoration: "none" }}
                        to="/orders"
                    >
                        Orders
                    </SidebarButton>
                    <SidebarButton
                        style={{ textDecoration: "none" }}
                        to="/profile"
                    >
                        Profile
                    </SidebarButton>
                    <SidebarButton
                        style={{ textDecoration: "none" }}
                        to="/shipping"
                    >
                        Saved Address
                    </SidebarButton>
                </Sidebar>
                <AddressList>
                    {addresses.map((item, index) => (
                        <AddressItem key={index}>
                            <div>
                                <p style={{ color: "blue", cursor: "pointer" }}>
                                    Edit
                                </p>
                                <AddressLabel>{item.name}</AddressLabel>
                                <div>{item.address}</div>
                            </div>
                            <AddressActions>
                                <AddressButton
                                    onClick={() => console.log("fdsf")}
                                >
                                    Delete
                                </AddressButton>
                            </AddressActions>
                        </AddressItem>
                    ))}
                </AddressList>
                <Title>Shipping Address and Contact Details</Title>

                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />

                    <Input
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Zip/Postal Code"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                    />
                    <Select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                        <option value="">Select a country</option>
                        <option value="us">United States</option>
                        <option value="ca">Canada</option>
                        <option value="mx">Mexico</option>
                        <option value="uk">United</option>
                    </Select>
                    <Label>Phone Number</Label>
                    <Input type="tel" placeholder="Phone Number" />
                    <Label>Additional Information</Label>
                    <TextArea rows="2" placeholder="Additional Information" />
                    <ButtonContainer>
                        <PaymentButton>Add Address</PaymentButton>
                    </ButtonContainer>
                </Form>
            </Container>
        </>
    );
};

export default ShippingAddress;
