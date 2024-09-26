import {diaries} from '../data/entries';

import {DiaryEntry, NonSensitiveDiaryEntry } from '../types';

// const diaries: DiaryEntry[] = diaryData as DiaryEntry[]; //Type asssertion is done assign diarydata as Diarydata[]
// //assertions should be done only if we are certain we know what we are doing!

//Take from Dairy Entry following fields and displaye, just like in json when we want to only show certain things
// export const getNonSensitiveEntries = (): Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>[] =>{
//   return diaries;
  
// };

export const getNonSensitiveEntries = ():NonSensitiveDiaryEntry[] =>{
    return diaries.map(({id,date,weather,visibility}) =>({
      id,
      date,
      weather,
      visibility
    }));
    
  };

export const getEntries = (): DiaryEntry[] => {
  return diaries;
};

export const addDiary = () => {
  return null;
};

