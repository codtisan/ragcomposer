import { create } from "zustand";

interface SearchInputStore {
  searchInput: string;
  setSearchInput: (state: string) => void;
}

const useKnowledgeBaseSearchStore = create<SearchInputStore>((set) => ({
  searchInput: "",
  setSearchInput: (state: string) => set(() => ({ searchInput: state })),
}));

export default useKnowledgeBaseSearchStore;
