import { atom, useAtom } from "jotai";

const countAtom = atom([]);

const useCount = () => useAtom(countAtom);

export default useCount;
