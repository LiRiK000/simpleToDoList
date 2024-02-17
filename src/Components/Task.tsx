import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    useColorMode
} from '@chakra-ui/react';
import { useTodoStore } from '../Core/Store/todos';

export const RenderTasks = () => {

    const { colorMode } = useColorMode();
    const { todos, removeAllTodos, removeTodo, changeCompleted } = useTodoStore()
    const renderTasks = todos

    const lightBackground = '#F9FAFB';
    const lightText = '#000000';
    const darkBackground = '#1E293B';
    const darkText = '#FFFFFF';

    return (
        <Container
            bgColor={colorMode === 'light' ? lightBackground : darkBackground}
            mt='8'
            mb='6'
            p='6'
            borderRadius='30px'
        >
            <Box>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Heading
                        color={colorMode === 'light' ? lightText : darkText}
                    >
                        Your tasks
                    </Heading>
                </Box>
                <Box
                    color='white'
                >
                    {renderTasks && renderTasks.map((task) => (
                        <Flex
                            justifyContent='space-between'
                            bgColor={
                                colorMode === 'light' ?
                                    task.completed ? 'green' : 'black'
                                    : task.completed ? 'green' : 'black'
                            }
                            borderRadius={['20px', '10px']}
                            key={task.id}
                            p={['3', '4']}
                            m={['2', '3']}
                        >
                            <Box
                                id={`$task.id`}
                                fontSize={['xl', 'lg']}
                            >
                                {task.title}
                            </Box>
                            <Box>
                                <Button
                                    onClick={() => removeTodo(task.id)}
                                    variant='outline'
                                    mr='2'
                                    color='white'
                                    borderColor='white'
                                    _hover={{ backgroundColor: 'transparent' }}
                                >
                                    Delete
                                </Button>
                                <Button
                                    onClick={() => changeCompleted(task.id)}
                                    variant='outline'
                                    mr='2'
                                    color='white'
                                    borderColor='white'
                                    _hover={{ backgroundColor: 'transparent' }}
                                >
                                    Change
                                </Button>
                            </Box>
                        </Flex>
                    ))}
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <Button
                            onClick={removeAllTodos}
                            colorScheme="teal"
                            mr='10px'
                            _hover={{ bgColor: 'teal.500', color: 'white' }}
                            _active={{ bgColor: 'teal.600', color: 'white' }}
                            _focus={{ boxShadow: 'outline' }}
                            _disabled={{ opacity: 0.5 }}
                            _groupHover={{ bgColor: 'teal.500', color: 'white' }}
                            _groupActive={{ bgColor: 'teal.600', color: 'white' }}
                            _groupFocus={{ boxShadow: 'outline' }}
                        >
                            Remove All
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};
