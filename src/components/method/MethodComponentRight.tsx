import { Flex, Img, Text } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

type MethodComponentType = {
    image: string;
    title: string;
    text: string;
};

export default function MethodComponentRight({
    image,
    text,
    title,
}: MethodComponentType) {
    const cardVariants: Variants = {
        offscreen: {
            opacity: 0.2,
            x: 500,
        },
        onscreen: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                // bounce: 0.5,
                duration: 2,
            },
        },
    };
    return (
        <Flex
            as={motion.div}
            variants={cardVariants}
            whileInView="onscreen"
            initial="offscreen"
            viewport={{ once: true }}
            h={"500px"}
            bg={
                "linear-gradient(90deg, rgba(255,255,255,0.8463760504201681) 0%, rgba(241,239,239,1) 68%)"
            }
            align={"center"}
            justify={"flex-end"}
        >
            <Flex
                direction={"column"}
                justify={"center"}
                align={"flex-end"}
                w={"50%"}
            >
                <Text textStyle={"Bold"} fontSize={"35px"} textAlign={"center"}>
                    {title}
                </Text>
                <Text
                    textAlign={"end"}
                    textColor={"gray"}
                    textStyle={"Regular"}
                    fontSize={"20px"}
                >
                    {text}
                </Text>
            </Flex>
            <Img src={image} h={"90%"} ml={"60px"} />
        </Flex>
    );
}
