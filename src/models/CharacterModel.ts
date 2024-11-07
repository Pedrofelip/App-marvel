import { ResourceModel } from "./ResourceModel";

export interface CharacterModel {
  id: number;
  name: string;
  thumbnailUrl: string;
  description?: string;
  comics: ResourceModel[];
  series: ResourceModel[];
  stories: ResourceModel[];
}
