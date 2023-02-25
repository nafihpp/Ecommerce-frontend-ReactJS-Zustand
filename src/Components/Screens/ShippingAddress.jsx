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
        <>
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
            </svg>

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
                    <TextArea rows="2" placeholder="Additional Information" />
                    <ButtonContainer>
                        <PaymentButton>Pay Now</PaymentButton>
                    </ButtonContainer>
                </Form>
            </Container>
        </>
    );
};

export default ShippingAddress;
