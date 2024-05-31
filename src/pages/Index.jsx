import { useState } from "react";
import { Container, VStack, HStack, Input, Button, IconButton, Text, Checkbox, StackDivider, Box } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTodo = (index) => {
    setTodos(todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo)));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input placeholder="a great label" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <Button onClick={addTodo} colorScheme="teal">
            Add
          </Button>
        </HStack>
        <VStack divider={<StackDivider borderColor="gray.200" />} borderColor="gray.200" borderWidth="2px" borderRadius="md" width="100%" padding={4} alignItems="stretch">
          {todos.length === 0 ? (
            <Text>No tasks yet!</Text>
          ) : (
            todos.map((todo, index) => (
              <HStack key={index} spacing={4}>
                <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(index)}>
                  <Text as={todo.completed ? "s" : ""}>{todo.text}</Text>
                </Checkbox>
                <IconButton aria-label="Delete task" icon={<FaTrash />} colorScheme="red" onClick={() => deleteTodo(index)} />
              </HStack>
            ))
          )}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
