import { useState } from "react";
import styled from "styled-components";

import useDeleteFruits from "../api/useDeleteFruits";
import usePutFruits from "../api/usePutFruits";
import { FruitType } from "../types/Fruit";

const Fruit = ({ fruit, index }: { fruit: FruitType; index: number }) => {
  const { id, name } = fruit;
  const putMutation = usePutFruits();
  const deleteMutation = useDeleteFruits();
  const [fruitName, setFruitName] = useState(name);
  const [isNameActive, setIsNameActive] = useState(false);

  const handleCancel = () => {
    setIsNameActive(false);
    setFruitName(name);
  };

  const handleSave = () => {
    if (!isNameActive) return setIsNameActive(true);

    setIsNameActive(false);
    putMutation.mutate({ id, name: fruitName });
  };

  return (
    <List>
      {isNameActive ? (
        <input
          value={fruitName}
          onChange={(e) => setFruitName(e.target.value)}
        />
      ) : (
        <span>
          {index + 1}. {name}
        </span>
      )}
      <DELETEBtn onClick={() => deleteMutation.mutate(id)}>삭제</DELETEBtn>
      <CANCELBtn onClick={handleCancel}>취소</CANCELBtn>
      <EDITBtn onClick={handleSave}>{isNameActive ? "저장" : "수정"}</EDITBtn>
    </List>
  );
};

const List = styled.div`
  input {
    width: 200px;
    height: 30px;
    font-size: 26px;
  }
`;

const DELETEBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: red;
  margin-left: 15px;
  font-size: 20px;
  color: #ffffff;
  height: 30px;
`;

const CANCELBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: blue;
  margin-left: 15px;
  font-size: 20px;
  color: #ffffff;
  height: 30px;
`;

const EDITBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: green;
  margin-left: 15px;
  font-size: 20px;
  color: #ffffff;
  height: 30px;
`;

export default Fruit;
