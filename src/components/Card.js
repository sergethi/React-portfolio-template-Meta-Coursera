import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack p="4" color="black" bg="white" borderRadius='lg'>
      
      <Image src={imageSrc} alt={title} borderRadius='lg' mx="auto" objectFit='cover' />
      <VStack spacing={4} alignItems="flex-start" p={5}>
        <Heading  size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack>
        <Text as='b'>See more</Text>
        <FontAwesomeIcon  icon={faArrowRight} size="1x"/>
      </HStack>
      </VStack>
      
        
    </VStack>
  )
};

export default Card;
