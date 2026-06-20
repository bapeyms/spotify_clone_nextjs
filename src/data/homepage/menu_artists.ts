export interface Artist {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export const MENU_ARTISTS: Artist[] = [
  { id: "1", name: "Lisa", role: "Виконавець", imageUrl: "/dashboard/pagehome/lisa.png" },
  { id: "2", name: "Lady Gaga", role: "Виконавець", imageUrl: "/dashboard/pagehome/gaga.png" },
  { id: "3", name: "Bruno Mars", role: "Виконавець", imageUrl: "/dashboard/pagehome/bruno.png" },
  { id: "4", name: "BTS", role: "Виконавець", imageUrl: "/dashboard/pagehome/bts.png" },
  { id: "5", name: "Lana Del Rey", role: "Виконавець", imageUrl: "/dashboard/pagehome/lana.png" },
];