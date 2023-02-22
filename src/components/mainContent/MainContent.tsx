import { Flex, Text, Button, Image } from "@chakra-ui/react";

export default function MainContent() {
    return (
        <Flex>
            <Flex w={"50%"} direction={"column"} mt={"150px"}>
                <Text
                    textStyle={"Bold"}
                    fontSize={"50px"}
                    textColor={"blue"}
                    w={"700px"}
                >
                    Soluções criativas para seus problemas web!
                </Text>
                <Text
                    w={"600px"}
                    textStyle={"Medium"}
                    fontSize={"20px"}
                    textColor={"gray"}
                >
                    Soluções pra você ou para o seu negócio utilizando as mais
                    novas tecnologias de programação disponíveis no mercado.
                </Text>
                <Button
                    borderRadius={"20px"}
                    bg={"blue"}
                    textColor={"white"}
                    w={"450px"}
                    h={"62px"}
                    fontSize={"25px"}
                    mt={"40px"}
                    mb={"20px"}
                >
                    Quero vender mais!
                </Button>
                <Button
                    borderRadius={"20px"}
                    border={"2px solid #657EFF"}
                    textColor={"blue"}
                    w={"450px"}
                    h={"62px"}
                    fontSize={"25px"}
                >
                    Quero falar pelo WhatsApp
                </Button>
            </Flex>
            <Flex mt={"50px"}>
                <Image
                    w={"750px"}
                    h={"750px"}
                    src="/Images/Website-Creator.png"
                />
            </Flex>
        </Flex>
    );
}
