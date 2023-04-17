import { userContext } from "@/context/userContext";
import {
  Box,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const Dashboard = () => {
  const { user } = useContext(userContext);
  const [users, setUsers] = useState([]);
  console.log("from dashboard", user?.data.user.role);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:4000/users");
      console.log(res.data.users);
      setUsers(res.data.users);
    };
    fetchUsers();
  }, []);
  useEffect(() => {
    if (user?.data.user.role !== "doctor") {
      return;
    }
  }, []);
  return (
    <TableContainer>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th isNumeric>Age</Th>
            <Th>Gender</Th>
            <Th>Email</Th>
            <Th>Phone No.</Th>
            <Th>Address</Th>
            <Th>Role</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => {
            return (
              <Tr key={index}>
                <Td>{user.fullName}</Td>
                <Td isNumeric>{user.age}</Td>
                <Td>{user.gender}</Td>
                <Td>{user.email}</Td>
                <Td>{user.phone}</Td>
                <Td>{user.address}</Td>
                <Td>{user.role}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Dashboard;
