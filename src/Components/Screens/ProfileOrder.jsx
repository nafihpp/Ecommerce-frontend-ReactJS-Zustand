import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import profileImage from "../../assets/mobile.png";
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

const ProfileForm = styled.form`
    display: flex;
    flex-direction: column;
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

const ProductImage = styled.img`
    max-height: 80px;
    max-width: 80px;
`;

const ProfilePicture = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 20px;
`;
function ProfileOrder() {
    return (
        <Container>
            <Sidebar>
                <ProfilePicture src={profileImage} alt="Profile" />
                <p>Mohammed Nafih</p>
                <SidebarButton style={{ textDecoration: "none" }} to="/">
                    H
                </SidebarButton>
                <SidebarButton style={{ textDecoration: "none" }} to="/orders">
                    O
                </SidebarButton>
                <SidebarButton style={{ textDecoration: "none" }} to="/profile">
                    P
                </SidebarButton>
                <SidebarButton
                    style={{ textDecoration: "none" }}
                    to="/shipping"
                >
                    A
                </SidebarButton>
            </Sidebar>

            <Content>
                <h1>Orders</h1>
                <TableWrapper>
                    <OrdersTable>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Product Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12345</td>
                                <td>2022-02-22</td>
                                <td>Shipped</td>
                                <td>
                                    <ProductImage src="https://via.placeholder.com/80x80" />
                                </td>
                            </tr>
                            <tr>
                                <td>67890</td>
                                <td>2022-02-23</td>
                                <td>Processing</td>
                                <td>
                                    <ProductImage src="https://via.placeholder.com/80x80" />
                                </td>
                            </tr>
                        </tbody>
                    </OrdersTable>
                </TableWrapper>
            </Content>
        </Container>
    );
}

export default ProfileOrder;
