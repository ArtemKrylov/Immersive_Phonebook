import React from "react";
import {
  Button,
  Center,
  Divider,
  Flex,
  ListIcon,
  ListItem,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { MdContactPhone } from "react-icons/md";

import { useAppDispatch } from "hooks/useAppDispatch";
import { deleteContact } from "redux/contacts/operationsContacts";
import { DeleteIcon } from "@chakra-ui/icons";

interface ContactItemInterface {
  id: string;
  name: string;
  number: string;
}

const ContactItem: React.FC<ContactItemInterface> = ({ id, name, number }) => {
  const dispatch = useAppDispatch();
  function handleDeleteBtnClick(event: any) {
    dispatch<any>(deleteContact(id));
  }
  return (
    <ListItem
      className="contactItem"
      p={3}
      border="1px dotted"
      borderColor="accent.300"
      borderRadius={"md"}
      maxW={{ md: "300px", lg: "500px" }}
      minW={"250px"}
      _hover={{ borderColor: "white", transform: "translate(1px, 1px)" }}
      _focus={{ borderColor: "white", transform: "translate(1px, 1px)" }}
    >
      <Flex
        className="contactItem__name"
        alignItems={"center"}
        justify={"space-between"}
        flexWrap="wrap"
        mb={3}
      >
        <ListIcon as={MdContactPhone} m={0} />
        <Text ml="10px">{name}:</Text>
        <Spacer />
        <Text className="contactItem__number">{number}</Text>
      </Flex>
      <Divider borderColor={"purple.700"} mb={3} />
      <Center>
        <Button
          type="button"
          className="contactItem__button"
          value={id}
          onClick={handleDeleteBtnClick}
          leftIcon={<DeleteIcon />}
          size={{ base: "xs", md: "md" }}
          colorScheme={"purple"}
          _hover={{
            color: "purple.700",
            bgColor: "white",
            border: "1px solid purple",
          }}
          _focus={{
            color: "purple.700",
            bgColor: "white",
            border: "1px solid purple",
          }}
        >
          Delete
        </Button>
      </Center>
    </ListItem>
  );
};

export default ContactItem;
