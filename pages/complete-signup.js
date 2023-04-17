import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  useColorModeValue,
  Heading,
  RadioGroup,
  Radio,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { userContext } from "@/context/userContext";
import axios from "axios";
import { useRouter } from "next/router";

const completeSignup = () => {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [value, setValue] = useState("patient"); // Set default value to 'option1'

  const { FBUser } = useContext(userContext);
  const router = useRouter();
  useEffect(() => {
    if (FBUser) {
      setEmail(FBUser.email);
      setFullName(FBUser?.displayName || "");
    }
  }, [FBUser]);

  const submitHandler = async () => {
    try {
      const payload = {
        fullName,
        age,
        gender,
        email,
        phone,
        address,
        role: value,
      };
      const res = await axios.post("http://localhost:4000/users", payload);
      console.log(res.data);
      router.push("/");
      //TODO: Toast
    } catch (err) {
      //TODO: Toast
      console.log(err.response);
    }
  };

  // const handleRadioChange = (event) => {
  //   setValue(event.target.value); // Update the value state with the selected radio button value
  // };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={8}
        mx={"auto"}
        w={{ base: "100%", md: "70%", lg: "50%" }}
        py={12}
        px={6}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>First Complete Your Profile</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={1}>
            <RadioGroup value={value} onChange={setValue}>
              <Radio value="patient" mr={8}>
                Patient
              </Radio>
              <Radio value="doctor">Doctor</Radio>
            </RadioGroup>
            {value === "patient" ? (
              <>
                <FormControl isRequired>
                  <FormLabel m={0}>Fullname</FormLabel>
                  <Input
                    type="text"
                    value={fullName ? fullName : ""}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </FormControl>
                <HStack>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel m={0}>Age</FormLabel>
                      <Input
                        type="number"
                        value={age ? age : ""}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName" isRequired>
                      <FormLabel m={0}>Gender(Male/Female)</FormLabel>
                      <Input
                        type="text"
                        value={gender ? gender : ""}
                        onChange={(e) => setGender(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <HStack>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel m={0}>Email</FormLabel>
                      <Input
                        type="email"
                        value={email ? email : ""}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName" isRequired>
                      <FormLabel m={0}>Phone No.</FormLabel>
                      <Input
                        type="tel"
                        value={phone ? phone : ""}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl isRequired>
                  <FormLabel m={0}>Address</FormLabel>
                  <Input
                    type="text"
                    value={address ? address : ""}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={submitHandler}
                  >
                    Submit
                  </Button>
                </Stack>
              </>
            ) : (
              <>
                <FormControl isRequired>
                  <FormLabel m={0}>Fullname</FormLabel>
                  <Input
                    type="text"
                    value={fullName ? fullName : ""}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </FormControl>
                <HStack>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel m={0}>Age</FormLabel>
                      <Input
                        type="number"
                        value={age ? age : ""}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName" isRequired>
                      <FormLabel m={0}>Gender(Male/Female)</FormLabel>
                      <Input
                        type="text"
                        value={gender ? gender : ""}
                        onChange={(e) => setGender(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <HStack>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel m={0}>Email</FormLabel>
                      <Input
                        type="email"
                        value={email ? email : ""}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName" isRequired>
                      <FormLabel m={0}>Phone No.</FormLabel>
                      <Input
                        type="tel"
                        value={phone ? phone : ""}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl isRequired>
                  <FormLabel m={0}>Address</FormLabel>
                  <Input
                    type="text"
                    value={address ? address : ""}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={submitHandler}
                  >
                    Submit
                  </Button>
                </Stack>
              </>
            )}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default completeSignup;
