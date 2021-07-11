export interface Position {
  latitude: number;
  longitude: number;
}

export interface Route {
  title: string;
  startPosition: Position;
  endPosition: Position;
};