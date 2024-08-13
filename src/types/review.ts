/*************************** Domain & DTO ***************************/
export interface IReview {
  id: number;
  description: string;
  image: string;
  rate: number;
  subjects: TSubject[];
}

export type TSubject = 'DELICIOUS' | 'NICE_INTERIOR' | 'FRIENDLY_BOSS';

/******************************* Form ********************************/

/***************************** Request *****************************/

/***************************** Response *****************************/
