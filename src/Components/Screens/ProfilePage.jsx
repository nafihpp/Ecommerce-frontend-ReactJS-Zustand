import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
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

const Content = styled.div`
    margin-left: 200px;
    padding: 20px;
`;

const ProfileForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
`;

const Input = styled.input`
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
`;

const Button = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #2d2d2d;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    border-radius: 5px;
    border: none;
    &:hover {
        background-color: #424242;
    }
`;

const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
`;

function ProfilePage() {
    const [avatar, setAvatar] = useState(null);
    const [currentAvatar, setCurrentAvatar] = useState(
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
    );

    const handleAvatarChange = (event) => {
        setAvatar(event.target.files[0]);
    };

    return (
        <Container>
            <Sidebar>
                <SidebarButton to="/">Home</SidebarButton>
                <SidebarButton to="/orders">Orders</SidebarButton>
                <SidebarButton to="/profile">Profile</SidebarButton>
                <SidebarButton
                    style={{ textDecoration: "none" }}
                    to="/shipping"
                >
                    Saved Address
                </SidebarButton>
            </Sidebar>
            <Content>
                <h1>Edit Profile</h1>
                <Avatar src={currentAvatar} alt="Current Avatar" />
                <ProfileForm>
                    <Label htmlFor="avatar">Avatar:</Label>
                    <Input
                        type="file"
                        id="avatar"
                        name="avatar"
                        accept="image/png, image/jpeg"
                        onChange={(event) => {
                            setCurrentAvatar(
                                URL.createObjectURL(event.target.files[0])
                            );
                            handleAvatarChange(event);
                        }}
                    />
                    <Label htmlFor="name">Name:</Label>
                    <Input type="text" value="Nafih" id="name" name="name" />
                    <Label htmlFor="email">Email:</Label>
                    <Input
                        type="email"
                        value="nafihpp@gmail.com"
                        id="email"
                        name="email"
                    />
                    <Label htmlFor="phone">Phone:</Label>
                    <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value="+918593908025"
                    />

                    <Button type="submit">Save Changes</Button>
                </ProfileForm>
            </Content>
        </Container>
    );
}

export default ProfilePage;
