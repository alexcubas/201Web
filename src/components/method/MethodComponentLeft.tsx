import { Flex, Img, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

type MethodComponentType = {
    image: string;
    title: string;
    text: string;
};

export default function MethodComponentLeft({
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
            x: versionMob ? -300 : -500,
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
                "linear-gradient(90deg, rgba(241,239,239,1) 34%, rgba(255,255,255,0.8463760504201681) 100%)"
            }
            align={"center"}
            direction={versionMob ? "column" : "row"}
        >
            <Img
                src={image}
                h={versionMob ? "50%" : "90%"}
                mr={versionMob ? "0px" : "60px"}
            />
            <Flex
                direction={"column"}
                justify={versionMob ? "flex-start" : "center"}
                align={versionMob ? "center" : "flex-start"}
                w={versionMob ? "80%" : "50%"}
            >
                <Text
                    textStyle={"Bold"}
                    fontSize={"35px"}
                    textAlign={"center"}
                    mt={versionMob ? "20px" : "0px"}
                >
                    {title}
                </Text>
                <Text
                    textColor={"gray"}
                    textStyle={"Regular"}
                    fontSize={"20px"}
                    textAlign={versionMob ? "center" : "start"}
                >
                    {text}
                </Text>
            </Flex>
        </Flex>
    );
}
