export interface YourMusicToday {
  id: string;
  music: string;
  artist: string;
  img: string
}

export const MUSIC_TODAY: YourMusicToday[] = [
    {id: "1", music: "Die with a smile", artist: "Lady Gaga & Bruno Mars", img: "/dashboard/pagehome/gaga_bruno.png"},
    {id: "2", music: "Глубоко", artist: "Monatik & Надія Дорофєєва", img: "/dashboard/pagehome/dodo_monatik.png"},
    {id: "3", music: "Superman", artist: "Eminiem", img: "/dashboard/pagehome/eminem.png"},
    {id: "4", music: "Sweater Weather", artist: "The Neighberhood", img: "/dashboard/pagehome/neighbourhood.png"},
    {id: "5", music: "Cry Me A River", artist: "Justin Timberlake", img: "/dashboard/pagehome/timberlake.png"},
    {id: "6", music: "Do I Wanna Know", artist: "Arctic Monkeys", img: "/dashboard/pagehome/monkeys1.png"},
    {id: "7", music: "Too Much To Ask", artist: "Arctic Monkeys", img: "/dashboard/pagehome/monkeys2.png"}
]