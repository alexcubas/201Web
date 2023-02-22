import { Flex } from "@chakra-ui/react";
import ButtonContact from "./ButtonContact";
import IconHeader from "./IconHeader";
import NavBar from "./NavBar";

export default function HeaderComponent() {
    return (
        <Flex h={"100px"} w={"100%"} align={"center"} justify={"space-between"}>
            <Flex>
                <IconHeader />
            </Flex>
            <Flex
                gap={"40px"}
                fontSize={"20px"}
                color="gray"
                textStyle={"Bold"}
            >
                <NavBar />
            </Flex>
            <Flex>
                <ButtonContact />
            </Flex>
        </Flex>
    );
}
