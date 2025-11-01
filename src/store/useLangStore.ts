"use client";
import { create } from "zustand";

type LangStore = {
  lang: string;
  setLang: (v: string) => void;
};

export const useLangStore = create<LangStore>((set) => ({
  lang: "english",
  setLang: (v) => set({ lang: v }),
}));
