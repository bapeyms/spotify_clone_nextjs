export interface BestMixes {
  id: string;
  playlist: string;
  artists: string;
  img: string
}

export const BEST_MIXES: BestMixes[] = [
    {id: "1", playlist: "ТОП K-POP", artists: "За участю BTS, BLACKPINK, ITZY", img: "/dashboard/mylibrary/kpop.png"},
    {id: "2", playlist: "ДЛЯСУМНИХ", artists: "За участю Lady Gaga, Bruno mars", img: "/dashboard/mylibrary/sad.png"}
]