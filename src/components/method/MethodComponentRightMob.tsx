import { Flex, Img, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

type MethodComponentType = {
    image: string;
    title: string;
    text: string;
};

export default function MethodComponentRightMob({
    image,
    text,
    title,
}: MethodComponentType) {
    const versionMob = useBreakpointValue({
        base: true,
        sm: true,
        md: false,
        lg: false,
        xlg: false,
    });
    const cardVariants: Variants = {
        offscreen: {
            opacity: 0.2,
            x: versionMob ? 300 : 500,
        },
        onscreen: {
            opacity: 1,
            x: 0,
            transition: {
                type: "tween",
                // bounce: 0.5,
                duration: 1.5,
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
            h={versionMob ? "650px" : "500px"}
            bg={
                "linear-gradient(90deg, rgba(255,255,255,0.8463760504201681) 0%, rgba(241,239,239,1) 68%)"
            }
            align={"center"}
            // justify={"flex-end"}
            direction={versionMob ? "column" : "row"}
        >
            <Flex
                direction={"column"}
                justify={versionMob ? "flex-start" : "center"}
                align={versionMob ? "center" : "flex-start"}
                w={versionMob ? "80%" : "50%"}
            >
                <Img
                    src={image}
                    h={versionMob ? "50%" : "90%"}
                    ml={versionMob ? "0px" : "60px"}
                />
                <Text
                    textStyle={"Bold"}
                    fontSize={"35px"}
                    textAlign={"center"}
                    mt={"20px"}
                >
                    {title}
                </Text>
                <Text
                    textAlign={versionMob ? "center" : "end"}
                    textColor={"gray"}
                    textStyle={"Regular"}
                    fontSize={"20px"}
                >
                    {text}
                </Text>
            </Flex>
        </Flex>
    );
}
