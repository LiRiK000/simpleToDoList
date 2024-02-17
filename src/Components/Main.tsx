import { FC, useState, ChangeEvent } from 'react';
import { Box, Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text, useToast } from '@chakra-ui/react';
import { useTodoStore } from '../Core/Store/todos';
import { RenderTasks } from './Task';

const Main: FC = () => {
    const [input, setInput] = useState('');
    const [isError, setIsError] = useState(false);
    const { todos, addTodo } = useTodoStore();
    const toast = useToast();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

    const handleSubmit = () => {
        if (input.trim() === '') {
            setIsError(true);
            toast({
                title: 'Error',
                description: 'Task title is required',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        } else {
            addTodo(input);
            setInput('');
            setIsError(false);
        }
    };

    return (
        <Container minHeight="80vh" minW="80vw" mt="8" bgColor="gray.600" color="white" p="4">
            <Box display="flex" justifyContent="center" alignItems="center" flexDir="column" gap="30px">
                <Heading as="h1" fontSize={{ base: '6xl', md: '5xl' }} fontWeight="extrabold" lineHeight="110%" letterSpacing="-1px">
                    ToDo List
                </Heading>
                <Box>
                    <Text fontSize={{ base: 'xl', md: 'lg' }} fontWeight="bold" lineHeight="110%" letterSpacing="-1px">
                        Total Tasks: {todos.length}
                    </Text>
                </Box>
                <FormControl isInvalid={isError}>
                    <FormLabel>Task title</FormLabel>
                    <Input type='task' value={input} onChange={handleInputChange} />
                    <FormErrorMessage>{isError && 'Task title is required'}</FormErrorMessage>
                </FormControl>
                <Box>
                    <Button
                        onClick={handleSubmit}
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
                        Add Task
                    </Button>
                </Box>
                {todos.length > 0 && <RenderTasks />}
            </Box>
        </Container>
    );
};

export default Main;
