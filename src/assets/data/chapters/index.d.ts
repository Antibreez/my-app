declare module '@/assets/data/chapters' {
  interface Chapter {
    id: string;
    label: string;
    coordinates: {
      x: number;
      y: number;
    };
  }

  const chapters: Chapter[]
  export default chapters
}