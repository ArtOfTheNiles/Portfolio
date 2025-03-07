import {useState} from 'react';

export function useList<T>(initialValue: T[] = []) {
  const [list, setList] = useState<T[]>(initialValue);

  const addItem = (item: T) => {
    setList((priorList) => [...priorList, item]);
  };

  const discardItem = (index: number) => {
    setList((priorList) => priorList.filter((_, i) => i !== index));
  };

  return {
    list,
    addItem,
    discardItem,
  };
}

export default useList;