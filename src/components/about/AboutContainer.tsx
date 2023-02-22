import { Flex, Text } from "@chakra-ui/react";
import AboutBox from "./AboutBox";

export default function AboutContainer() {
    return (
        <Flex w={"100%"} direction={"column"}>
            <Flex
                direction={"column"}
                textAlign={"center"}
                justify={"center"}
                align={"center"}
                w={"100%"}
                gap={"10px"}
                h={"250px"}
            >
                <Text textStyle={"Bold"} fontSize={"40px"} color={"gray"}>
                    Saiba mais sobre nós
                </Text>
                <Text
                    textStyle={"Regular"}
                    fontSize={"25px"}
                    color={"gray"}
                    w={"20%"}
                >
                    Conheça um pouco sobre os fundadores da 201Web
                </Text>
            </Flex>
            <Flex
                h={"475px"}
                bg={"#F1EFEF"}
                w={"100%"}
                justify={"space-around"}
                align={"center"}
            >
                <AboutBox
                    image="/Images/aboutImages/muriloPhoto.png"
                    name="Murilo Cordeiro"
                    about="Programador Front-End"
                    text="“Desenvolvedor front-end á 2 anos, acredito que programar é mais que apenas digitar código”"
                />
                <AboutBox
                    image="/Images/aboutImages/muriloPhoto.png"
                    name="Murilo Cordeiro"
                    about="Programador Front-End"
                    text="“Desenvolvedor front-end á 2 anos, acredito que programar é mais que apenas digitar código”"
                />
                {/* <AboutBox
                    image="/Images/aboutImages/muriloPhoto.png"
                    name="Murilo Cordeiro"
                    about="Programador Front-End"
                    text="“Desenvolvedor front-end á 2 anos, acredito que programar é mais que apenas digitar código”"
                /> */}
            </Flex>
        </Flex>
    );
}
