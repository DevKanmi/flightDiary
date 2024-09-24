import diaryData from '../data/entries.json';

import { Weather,Visibility,DiaryEntry } from '../types';

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]; //Type asssertion is done assign diarydata as Diarydata[]
//assertions should be done only if we are certain we know what we are doing!


export const getEntries = (): DiaryEntry[] => {
  return diaries;
};

export const addDiary = () => {
  return null;
};

