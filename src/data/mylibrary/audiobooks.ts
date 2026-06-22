export interface AudioBooks {
  id: string;
  book: string;
  author: string;
  genres: string;
  desc: string;
  date: string;
  time: string;
  img: string;
}

export const BOOKS: AudioBooks[] = [
  { id: "1", book: "Як жити у цьому світі", author: "Dolor Sit Amet", genres: "Фантастика, Містика", 
    desc: "Duis viverra sapien elit, nec accumsan enim pellentesque semper. Praesent eget diam vitae lacus accumsan ultricies. Maecenas tincidunt dui ac nunc luctus, eget ultricies turpis ornare. Nunc tincidunt ligula a lectus vestibulum volutpat eu at massa. Proin aliquam turpis vel elit blandit, eget feugiat nisi varius. Sed ullamcorper porta risus, iaculis efficitur erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur auctor dolor varius dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris vitae eleifend urna. Integer tincidunt, augue porttitor rhoncus consequat, orci lorem dictum velit, quis ornare mauris mi quis leo. Ut sit amet condimentum diam.", 
    date: "Серп. 2023", time: "12 год. 22 хв.",
    img: "/dashboard/mylibrary/book.png" }
];