import { Flex, Image, Text } from "@chakra-ui/react";

type AboutBoxType = {
    image: string;
    text: string;
    name: string;
    about: string;
};

export default function AboutBoxMob({
    image,
    text,
    about,
    name,
}: AboutBoxType) {
    return (
        <Flex
            h={"220px"}
            w={"90%"}
            bg={"white"}
            borderRadius={"20px"}
            shadow={"-14px 14px 14px 3px #0000000F"}
            align={"center"}
            justify={"center"}
            gap={"10px"}
        >
            <Image
                src={image}
                alt={image}
                w={"140px"}
                h={"220px"}
                objectFit={"contain"}
            />
            <Flex
                textColor={"gray"}
                direction={"column"}
                align={"center"}
                // w={"150px"}
                px={"10px"}
                gap={"15px"}
            >
                <Text
                    textStyle={"Light"}
                    fontSize={"15px"}
                    fontStyle={"italic"}
                    textColor={"#151932"}
                >
                    {text}
                </Text>
                <Flex direction={"column"}>
                    <Text textStyle={"Bold"} fontSize={"20px"}>
                        {name}
                    </Text>
                    <Text textStyle={"Regular"} fontSize={"12px"}>
                        {about}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}
