import { CharacterModel } from "@models/CharacterModel";
import { marvelApi } from "@network/marvelApi";

type CharacterModelArray = CharacterModel[];
type PromiseCharacterModel = Promise<CharacterModel>;

export const getCharactersFromSeries = async (
  series: number[],
): Promise<CharacterModelArray> => {
   const response = await marvelApi.get('v1/public/characters?series=702');
   const list = response.data.data.results
    return list.map((item) => {
      const x = {
        id: item.id,
        name: item.name,
        thumbnailUrl: item.thumbnail.path + "." + item.thumbnail.extension,
      }

      console.log(x)
      return x;
    })

   
};

// export async function getExpenses() {
//   return marvelApi.get();
// };

export const getCharacterById = async (id: number): PromiseCharacterModel => {
  return {};
};
