export interface YourMusicToday {
  id: string;
  music: string;
  artist: string;
  duration: string;
  img: string
}

export const MUSIC_TODAY: YourMusicToday[] = [
    {id: "1", music: "Die with a smile", artist: "Lady Gaga & Bruno Mars", duration: "4:11", img: "/dashboard/pagehome/gaga_bruno.png"},
    {id: "2", music: "Глубоко...", artist: "Monatik & Надія Дорофєєва", duration: "4:11", img: "/dashboard/pagehome/dodo_monatik.png"},
    {id: "3", music: "Superman", artist: "Eminiem", duration: "5:50", img: "/dashboard/pagehome/eminem.png"},
    {id: "4", music: "Sweater Weather", artist: "The Neighberhood", duration: "3:59", img: "/dashboard/pagehome/neighbourhood.png"},
    {id: "5", music: "Cry Me A River", artist: "Justin Timberlake", duration: "4:47", img: "/dashboard/pagehome/timberlake.png"},
    {id: "6", music: "Do I Wanna Know", artist: "Arctic Monkeys", duration: "4:31", img: "/dashboard/pagehome/monkeys1.png"},
    {id: "7", music: "Too Much To Ask", artist: "Arctic Monkeys", duration: "3:02", img: "/dashboard/pagehome/monkeys2.png"}
]