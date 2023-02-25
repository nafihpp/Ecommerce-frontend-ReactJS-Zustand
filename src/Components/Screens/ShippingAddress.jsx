import React, { useState } from "react";
import styled from "styled-components";

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

    return (
        <Container>
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
                <TextArea rows="4" placeholder="Additional Information" />
            </Form>
        </Container>
    );
};

export default ShippingAddress;
