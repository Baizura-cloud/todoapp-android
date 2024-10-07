import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);
  interface Task {
    id: number;
    name: string;
    status: boolean;
  }
  const [taskList, setTaskList] = useState<Task[]>([
    {
      id: 0,
      name: "Grocery",
      status: false,
    },
    {
      id: 1,
      name: "Driving Class",
      status: true,
    },
  ]);
  const [activeTask, setActiveTask] = useState({});

  const handleChange = (name?: string, status?: boolean) => {
    if (name) {
      setName(name);
    }
    if (status) {
      setStatus(status);
    }
  };
  const handleSubmit = () => {
    const curid: number = taskList.length + 1;
    const newTask: Task[] = [{ id: curid, name: name, status: status }];
    setTaskList((prevTask) => [...prevTask, ...newTask]);
  };
  const renderList = () => {
    return (
      <View>
        {taskList
          ? taskList.map((data) => (
              <View style={styles.list} key={data.id}>
                <Text>{data.name}</Text>
              </View>
            ))
          : null}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Enter your task"
          onChangeText={handleChange}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
      {renderList()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 300,
    marginBottom:12,
    borderWidth: 1,
    padding: 10,
  },
  list:{
    flexDirection: 'row',
  }
});
