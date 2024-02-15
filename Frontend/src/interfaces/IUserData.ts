import { IWorkout } from "./IWorkout";

export interface UserData {
  id: number;
  email: string;
  name: string;
  Treinos: IWorkout[];
}