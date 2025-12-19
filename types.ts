
export enum PageId {
  HOME = 'index.html',
  INTRO = 'intro.html',
  CHARACTERS = 'characters.html',
  PLOT = 'plot.html',
  QUOTES = 'quotes.html',
  BEHIND = 'behind.html',
  GALLERY = 'gallery.html',
  REVIEWS = 'reviews.html',
  AWARDS = 'awards.html',
  CONTACT = 'contact.html'
}

export interface Character {
  name: string;
  actor: string;
  role: string;
  desc: string;
  img: string;
}
