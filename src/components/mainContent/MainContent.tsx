import { Flex, Text, Button, Image } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export default function MainContent() {
    const controls = useAnimation();
    const controlsImage = useAnimation();
    const controlsImage1 = useAnimation();
    useEffect(() => {
        controls.start({
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.6,
                delay: 0.3,
                ease: [0, 0.3, 0.6, 1.0],
            },
        });
        controlsImage.start({
            y: [0, 10, 0, -10, 0],
            x: [0, -10, 0, -10, 0],
            transition: {
                duration: 8,
                ease: "easeOut",
                times: [0, 0.3],
                repeat: Infinity,
                repeatDelay: 1,
            },
        });
        controlsImage1.start({
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.6,
                delay: 0.3,
                ease: [0, 0.3, 0.6, 1.0],
            },
        });
    }, []);
    return (
        <Flex>
            <Flex w={"50%"} direction={"column"} mt={"150px"}>
                <Flex
                    h={"150px"}
                    as={motion.div}
                    direction={"column"}
                    initial={{ y: 150, opacity: 0 }}
                    animate={controls}
                >
                    <TypeAnimation
                        sequence={[
                            "Soluções criativas para seus problemas web!",
                            2000,
                            // "Soluções criativas para seus problemas na internet!",
                            // 2000,
                            () => {},
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        speed={30}
                        style={{
                            fontSize: "50px",
                            width: "700px",
                            fontFamily: "Poppins",
                            color: "#657EFF",
                            fontWeight: "700",
                        }}
                    />
                </Flex>

                <Flex
                    as={motion.div}
                    direction={"column"}
                    initial={{ y: 150, opacity: 0 }}
                    animate={controls}
                >
                    <Text
                        w={"600px"}
                        textStyle={"Regular"}
                        fontSize={"20px"}
                        textColor={"gray"}
                    >
                        Soluções pra você ou para o seu negócio utilizando as
                        mais novas tecnologias de programação disponíveis no
                        mercado.
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
            </Flex>
            <Flex
                as={motion.div}
                animate={controlsImage1}
                initial={{ y: 150, opacity: 0 }}
            >
                <Flex mt={"50px"} as={motion.div} animate={controlsImage}>
                    <Image w={"750px"} h={"750px"} src="Website-Creator.png" />
                </Flex>
            </Flex>
        </Flex>
    );
}
