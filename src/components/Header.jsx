import { Box, Center } from "@chakra-ui/react";
import { Button, ButtonGroup, Text, Flex } from '@chakra-ui/react';

export function Header() {
    return (
        <>
            <Center >
                <Box w="1250px" h="700px" bgImage="url('https://images.pexels.com/photos/37836/silhouette-fitness-bless-you-bike-37836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" bgPosition="center">
                    <Center h="900px">
                        <Flex direction="column">
                            <Box>
                                <Text color="white" fontSize="6xl" align="center">DOMINA EL TERRENO</Text>
                            </Box>
                            <Box>
                                <ButtonGroup size="md" variant="outline">
                                    <Button color="white">Ver detalles</Button>
                                    <Button color="white">Ver video</Button>
                                </ButtonGroup>
                            </Box>
                        </Flex>
                    </Center>
                </Box>
            </Center>
        </>
    )
}