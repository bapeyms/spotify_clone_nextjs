export interface Mood {
  id: string;
  mood: string;
  img: string
}

export const MOOD: Mood[] = [
    {id: "1", mood: "Хеппі", img: "/dashboard/pagehome/happy.png"},
    {id: "2", mood: "Меланхолія", img: "/dashboard/pagehome/melancholy.png"},
    {id: "3", mood: "Романтика", img: "/dashboard/pagehome/romantic.png"},
    {id: "4", mood: "Драйв", img: "/dashboard/pagehome/drive.png"},
    {id: "5", mood: "Туса", img: "/dashboard/pagehome/tusa.png"}
]
