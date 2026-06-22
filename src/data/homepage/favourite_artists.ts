export interface Favourite {
  id: string;
  artist: string;
  listeners: string;
  img: string
}

export const FAVOURITE_ARTISTS: Favourite[] = [
    {id: "1",  artist: "Lana Del Rey", listeners: "4 690 563", img: "/dashboard/pagehome/lana_round.png"},
    {id: "2", artist: "Lady Gaga", listeners: "4 690 563", img: "/dashboard/pagehome/gaga_round.png"},
    {id: "3", artist: "Shakira", listeners: "4 690 563", img: "/dashboard/pagehome/shakira_round.png"},
    {id: "4", artist: "Jennifer Lopez", listeners: "4 690 563", img: "/dashboard/pagehome/jlo_round.png"},
    {id: "5", artist: "Adele", listeners: "4 690 563", img: "/dashboard/pagehome/adele_round.png"}
]