import { useState } from "react";
import styled from "styled-components";

import useGetFruits from "../../api/useGetFruits";

const Main = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const { data } = useGetFruits();

  // const handleAddItem = () => {
  //   if (name && id) {
  //     const newItem = { id: Number(id), frname: name };
  //     setFruitsList([...fruitsList, newItem]);
  //     setName("");
  //     setId("");
  //   }
  // };

  return (
    <Container>
      <Title>🍓 아이 엠 그라운드 과일 이름 대기 🍓</Title>
      <Add>
        <div>이름 :</div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <div>ID :</div>
        <input value={id} onChange={(e) => setId(e.target.value)} />
      </Add>
      <Button>+</Button>
      <List>
        {data.map(({ id, name }: any) => (
          <div key={id}>
            {id}.{name}
          </div>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 50px;
`;

const Add = styled.div`
  margin: 5px;
  font-size: 24px;
  input {
    font-size: 24px;
    height: 24px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 18px;
  width: 250px;
  border: 1px solid #000000;
  background-color: #ffffff;
  margin-top: 10px;
`;

const List = styled.div`
  margin: 20px 0 0;
  font-size: 20px;
  div {
    margin: 10px auto;
  }
`;

export default Main;
