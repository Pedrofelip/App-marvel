import { CharacterModel } from "@models/CharacterModel";
import { getCharactersFromSeries } from "@services/characterService";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import React from "react";
import { ActivityIndicator } from "react-native";

type Props = {
  series: number[];
};

const CharacterListBySeries = (props: Props) => {
  const [list, setList] = useState<CharacterModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const response = await getCharactersFromSeries([702]);
      setList(response);
      setIsLoading(false);
    }

    loadData();
  }, []);

  return (
    <>{isLoading ? <ActivityIndicator /> : <CharacterList list={list} />}</>
  );
};

export default CharacterListBySeries;
