export interface NewReleases {
  id: string;
  music: string;
  artist: string;
  tracks: string;
  img: string
}

export const NEW_RELEASES: NewReleases[] = [
    {id: "1", music: "On The Floor", artist: "by JLO", tracks: "19 tracks", img: "/dashboard/pagehome/jlo.png"},
    {id: "2", music: "Reputation", artist: "by Taylor Swift", tracks: "10 tracks", img: "/dashboard/pagehome/swift.png"},
    {id: "3", music: "Yours Truly", artist: "by Ariana Grande", tracks: "5 tracks", img: "/dashboard/pagehome/ariana.png"},
    {id: "4", music: "Маргарита", artist: "by Michelle Andrade", tracks: "7 tracks", img: "/dashboard/pagehome/michelle.png"},
    {id: "5", music: "30 Vinyl", artist: "by Adele", tracks: "7 tracks", img: "/dashboard/pagehome/adele.png"},
    {id: "6", music: "When You Knock On The Door", artist: "by hooligan", tracks: "2 tracks", img: "/dashboard/pagehome/hooligan.png"},
    {id: "7", music: "Songs Of The Vikings", artist: "by public", tracks: "3 tracks", img: "/dashboard/pagehome/public.png"}
]