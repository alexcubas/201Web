import { Flex, Image, Text } from "@chakra-ui/react";

type AboutBoxType = {
    image: string;
    text: string;
    name: string;
    about: string;
};

export default function AboutBox({ image, text, about, name }: AboutBoxType) {
    return (
        <Flex
            h={"320px"}
            w={"500px"}
            bg={"white"}
            borderRadius={"20px"}
            shadow={"-14px 14px 14px 3px #0000000F"}
            align={"center"}
            justify={"center"}
            gap={"15px"}
        >
            <Image
                src={image}
                alt={image}
                w={"200px"}
                h={"300px"}
                objectFit={"contain"}
            />
            <Flex
                textColor={"gray"}
                direction={"column"}
                align={"center"}
                w={"250px"}
                gap={"15px"}
            >
                <Text
                    textStyle={"Light"}
                    fontSize={"20px"}
                    fontStyle={"italic"}
                    textColor={"#151932"}
                >
                    {text}
                </Text>
                <Flex direction={"column"}>
                    <Text textStyle={"Bold"} fontSize={"25px"}>
                        {name}
                    </Text>
                    <Text textStyle={"Regular"} fontSize={"16px"}>
                        {about}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}
