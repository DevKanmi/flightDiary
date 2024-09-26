export type Weather = 'sunny'|'rainy'|'cloudy'|'windy'|'stormy';

export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment?: string;
  }

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>; //Full type is defined here so we can shorten it in service file