import phoneLogic from "@/helpers/phoneLogic";
import { Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export default function FooterContainerMobile() {
    return (
        <Flex
            w={"100%"}
            align={"center"}
            justify={"space-around"}
            bg={"blue"}
            textColor={"white"}
            textStyle={"Regular"}
            fontSize={"20px"}
            direction={"column"}
        >
            <Flex>
                <Image
                    src={"/Images/footerImage.png"}
                    alt={"imagem footer"}
                    mt={"-30px"}
                />
            </Flex>
            <Flex direction={"column"} mt={"30px"}>
                <Text textStyle={"Bold"} fontSize={"30px"}>
                    Serviços
                </Text>
                <UnorderedList>
                    <ListItem>Criação de Site</ListItem>
                    <ListItem>Design</ListItem>
                    <ListItem>Gestão de Tráfego</ListItem>
                    <ListItem>Copywriting</ListItem>
                    <ListItem>Marketing Digital</ListItem>
                </UnorderedList>
            </Flex>
            <Flex direction={"column"} mt={"30px"}>
                <Text textStyle={"Bold"} fontSize={"30px"}>
                    Institucional
                </Text>
                <UnorderedList>
                    <ListItem>Como funciona?</ListItem>
                    <ListItem>Quem somos?</ListItem>
                    <ListItem>Sobre a 201?</ListItem>
                    <ListItem>Contato</ListItem>
                </UnorderedList>
            </Flex>
            <Flex direction={"column"} my={"30px"}>
                <Text textStyle={"Bold"} fontSize={"30px"}>
                    Contato
                </Text>
                <UnorderedList>
                    <ListItem onClick={() => phoneLogic()}>
                        (41) 98434-1194{" "}
                    </ListItem>
                    <ListItem>201web@gmail.com</ListItem>
                </UnorderedList>
            </Flex>
        </Flex>
    );
}
