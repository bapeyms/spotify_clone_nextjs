export interface RadioInfo {
  id: string;
  artist: string;
  artistImg1: string;
  song: string;
  artistImg2: string;
  listeners: string;
  desc: string
}

export const RADIO: RadioInfo[] = [
  { id: "1", artist: "Lana Del Rey", artistImg1: "/dashboard/pagehome/lana1.png", song: "Pretty When You Cry", 
    artistImg2: "/dashboard/pagehome/lana2.png", listeners: "72 780 975 слухачів на місяць",
    desc: "Lana Del Rey зачарувала мільйони слухачів як співачка, авторка пісень, акторка та ікона стилю. Завдяки своїй музиці вона кожного року створює один хіт за іншим..."
 }
];