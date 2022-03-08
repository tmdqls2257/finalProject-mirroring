import { Dispatch, SetStateAction } from 'react';

export interface BasicButtonProp {
  children: string;
  containerName: string;
  rateNum?: number;
  onClick?: (string | number)[];
  setChats?: any;
  roomId?: number;
  setMakeRoomId?: any;
  removeRoomId?: number;
}

export interface RateButtonProp {
  children: string;
  containerName: number;
}

export interface loadingState {
  state: boolean;
}
export type Direction = 'up' | 'down';

export interface setStateType {
  setState: any;
}
export interface newchatType {
  onCreated: (arg0: any) => void;
}
