import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import AboutBox from "./AboutBox";
import AboutBoxMob from "./AboutBoxMob";

export default function AboutContainer() {
    const isWideVersion = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xlg: false,
    });
    const versionMob = useBreakpointValue({
        base: true,
        sm: true,
        md: false,
        lg: false,
        xlg: false,
    });
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
                <Text
                    textStyle={"Bold"}
                    fontSize={versionMob ? "30px" : "40px"}
                    color={"gray"}
                >
                    Saiba mais sobre nós
                </Text>
                <Text
                    textStyle={"Regular"}
                    fontSize={versionMob ? "20px" : "25px"}
                    color={"gray"}
                    w={isWideVersion ? "60%" : "20%"}
                >
                    Conheça um pouco sobre os fundadores da 201Web
                </Text>
            </Flex>
            {versionMob ? (
                <Flex
                    h={"650px"}
                    bg={"#F1EFEF"}
                    w={"100%"}
                    justify={"space-evenly"}
                    align={"center"}
                    direction={"column"}
                >
                    <AboutBoxMob
                        image="/Images/aboutImages/alexPhoto.jpeg"
                        name="Alexsandro Cubas"
                        about="Programador Full-Stack"
                        text="“Desenvolvedor front-end á 2 anos, acredito que programar é mais que apenas digitar código”"
                    />
                    <AboutBoxMob
                        image="/Images/aboutImages/muriloPhoto.png"
                        name="Murilo Cordeiro"
                        about="Programador Front-End"
                        text="“Desenvolvedor front-end á 2 anos, acredito que programar é mais que apenas digitar código”"
                    />
                </Flex>
            ) : (
                <Flex
                    h={"475px"}
                    bg={"#F1EFEF"}
                    w={"100%"}
                    justify={"space-around"}
                    align={"center"}
                    direction={"row"}
                >
                    <AboutBox
                        image="/Images/aboutImages/alexPhoto.jpeg"
                        name="Alexsandro Cubas"
                        about="Programador Full-Stack"
                        text="“Desenvolvedor front-end á 2 anos, acredito que programar é mais que apenas digitar código”"
                    />
                    <AboutBox
                        image="/Images/aboutImages/muriloPhoto.png"
                        name="Murilo Cordeiro"
                        about="Programador Front-End"
                        text="“Desenvolvedor front-end á 2 anos, acredito que programar é mais que apenas digitar código”"
                    />
                </Flex>
            )}
        </Flex>
    );
}
