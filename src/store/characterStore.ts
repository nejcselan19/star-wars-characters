import { create } from 'zustand';

type Character = {
  name: string;
  url: string;
};

type CharacterStore = {
  characters: Character[];
  setCharacters: (characters: Character[]) => void;
};

export const useCharacterStore = create<CharacterStore>((set) => ({
  characters: [],
  setCharacters: (characters) => set({ characters }),
}));
