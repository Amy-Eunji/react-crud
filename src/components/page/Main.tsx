import { useState } from "react";
import styled from "styled-components";

import useGetFruits from "../../api/useGetFruits";
import usePostFruits from "../../api/usePostFruits";
import Fruit from "../../templates/Fruit";
import { FruitType } from "../../types/Fruit";

const Main = () => {
  const [name, setName] = useState("");
  const { data } = useGetFruits();
  const postMutation = usePostFruits();

  const handleCreate = () => {
    postMutation.mutate({ name });
    setName("");
  };

  if (!data) return null;
  return (
    <Container>
      <Title>🍓 아이 엠 그라운드 과일 이름 대기 🍓</Title>
      <Add>
        <div>이름 :</div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </Add>
      <ADDBtn onClick={handleCreate}>🚀</ADDBtn>
      <List>
        {data.map((fruit: FruitType, i: number) => (
          <Fruit key={fruit.id} fruit={fruit} index={i} />
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
  text-align: center;
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
    border-radius: 5px;
  }
`;

const ADDBtn = styled.button`
  cursor: pointer;
  border: 1px solid blue;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 18px;
  width: 265px;
  background-color: #ffffff;
`;

const List = styled.div`
  margin: 20px 0 0;
  font-size: 50px;
  div {
    margin: 10px auto;
  }
`;

export default Main;
