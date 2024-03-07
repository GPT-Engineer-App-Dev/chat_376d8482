import React from "react";
import { Box, Flex, Input, InputGroup, InputLeftElement, VStack, Text, Avatar, IconButton, Divider } from "@chakra-ui/react";
import { FaSearch, FaEllipsisV, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  // Dummy message history
  const messageHistory = [
    { name: "John Doe", message: "Hey, how are you?", time: "15:30" },
    { name: "Jane Smith", message: "Meeting at 10?", time: "14:22" },
    // Add more dummy contacts here
  ];

  // Function to handle sending messages (stubbed for example)
  const sendMessage = () => {
    console.log("Message sent");
  };

  return (
    <Flex h="100vh">
      {/* Sidebar */}
      <Box w="300px" p="4" bg="gray.200" borderRight="1px" borderColor="gray.300">
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.500" />} />
          <Input variant="filled" placeholder="Search" />
        </InputGroup>
        <VStack divider={<Divider />} spacing={4} mt={4}>
          {messageHistory.map((contact, index) => (
            <Flex key={index} align="center" w="100%" p={2} _hover={{ bg: "gray.300", cursor: "pointer" }}>
              <Avatar name={contact.name} mr={3} />
              <Box flex="1">
                <Text fontWeight="bold">{contact.name}</Text>
                <Text fontSize="sm">{contact.message}</Text>
              </Box>
              <Text fontSize="xs" color="gray.500">
                {contact.time}
              </Text>
            </Flex>
          ))}
        </VStack>
      </Box>

      {/* Chat Area */}
      <Flex direction="column" flex="1" p="4">
        {/* Chat Header */}
        <Flex align="center" justify="space-between" p="3" bg="gray.100" mb="4">
          <Avatar name="John Doe" mr={3} />
          <Text fontWeight="bold" flex="1">
            John Doe
          </Text>
          <IconButton aria-label="Options" icon={<FaEllipsisV />} />
        </Flex>

        {/* Chat Messages */}
        <VStack flex="1" p="3" spacing={4} overflowY="scroll">
          {/* Render the chat messages here */}
        </VStack>

        {/* Chat Input */}
        <InputGroup size="md" mt="auto">
          <Input pr="4.5rem" type="text" placeholder="Type a message..." />
          <IconButton aria-label="Send message" icon={<FaPaperPlane />} onClick={sendMessage} position="absolute" right="0" top="0" m="2" />
        </InputGroup>
      </Flex>
    </Flex>
  );
};

export default Index;
