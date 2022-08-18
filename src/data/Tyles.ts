enum LoadType {
  none = 'NONE',
  single = 'SINGLE',
  straight = 'STRAIGHT',
  bentToLeft = 'BENT TO LEFT',
  bentToRight = 'BENT TO RIGHT',
  threeWay = 'THREE WAY',
  intersection = 'INTERSECTION',
}

enum CastleType {
  none = 'NONE',
  single = 'SINGLE',
  twoSidedBentConnected = 'TWO SIDED BENT CONNECTED',
  twoSidedBentUnconnected = 'TWO SIDED BENT UNCONNECTED',
  twoSidedStraightConnected = 'TWO SIDED STRAIGHT CONNECTED',
  twoSidedStraightUnconnected = 'TWO SIDED STRAIGHT UNCONNECTED',
  threeSided = 'THREE SIDED',
  fourSided = 'FOUR SIDED',
}

export interface TyleType {
  key: number;
  load?: LoadType;
  castle?: CastleType;
  monastery?: boolean;
  count: number;
  description?: string;
}

export const defaultTyles: TyleType[] = [
  {
    key: 0,
    load: LoadType.none,
    castle: CastleType.none,
    monastery: true,
    count: 4,
    description: '수도원',
  },
  {
    key: 1,
    load: LoadType.single,
    castle: CastleType.none,
    monastery: true,
    count: 2,
    description: '길 1, 수도원',
  },
  {
    key: 2,
    load: LoadType.none,
    castle: CastleType.fourSided,
    monastery: false,
    count: 1,
    description: '4면 성 ',
  },
  {
    key: 3,
    load: LoadType.none,
    castle: CastleType.threeSided,
    monastery: false,
    count: 4,
    description: '3면 성 ',
  },
  {
    key: 4,
    load: LoadType.single,
    castle: CastleType.threeSided,
    monastery: false,
    count: 3,
    description: '3면 성, 1 길 ',
  },
  {
    key: 5,
    load: LoadType.none,
    castle: CastleType.twoSidedBentConnected,
    monastery: false,
    count: 5,
    description: '2면 연결된 꺾인 성 ',
  },
  {
    key: 6,
    load: LoadType.bentToRight,
    castle: CastleType.twoSidedBentConnected,
    monastery: false,
    count: 5,
    description: '2면 연결된 꺾인 성, 꺾인 길 ',
  },
  {
    key: 7,
    load: LoadType.none,
    castle: CastleType.twoSidedStraightConnected,
    monastery: false,
    count: 3,
    description: '2면 연결된 직선 성',
  },
  {
    key: 8,
    load: LoadType.none,
    castle: CastleType.twoSidedBentUnconnected,
    monastery: false,
    count: 2,
    description: '2면 끊기고 꺾인 성',
  },
  {
    key: 9,
    load: LoadType.none,
    castle: CastleType.twoSidedStraightUnconnected,
    monastery: false,
    count: 3,
    description: '2면 마주본 성',
  },
  {
    key: 10,
    load: LoadType.none,
    castle: CastleType.single,
    monastery: false,
    count: 5,
    description: '1면 성',
  },
  {
    key: 11,
    load: LoadType.bentToLeft,
    castle: CastleType.single,
    monastery: false,
    count: 3,
    description: '1면 성, 왼쪽으로 꺾인 길',
  },
  {
    key: 12,
    load: LoadType.bentToRight,
    castle: CastleType.single,
    monastery: false,
    count: 3,
    description: '1면 성, 오른쪽으로 꺾인 길',
  },
  {
    key: 13,
    load: LoadType.threeWay,
    castle: CastleType.single,
    monastery: false,
    count: 3,
    description: '1면 성, 삼거리',
  },
  {
    key: 14,
    load: LoadType.straight,
    castle: CastleType.single,
    monastery: false,
    count: 4,
    description: '1면 성, 직선 길',
  },
  {
    key: 15,
    load: LoadType.straight,
    castle: CastleType.none,
    monastery: false,
    count: 8,
    description: '직선 길',
  },
  {
    key: 16,
    load: LoadType.bentToLeft,
    castle: CastleType.none,
    monastery: false,
    count: 8,
    description: '꺾인 길',
  },
  {
    key: 17,
    load: LoadType.threeWay,
    castle: CastleType.none,
    monastery: false,
    count: 4,
    description: '삼거리',
  },
  {
    key: 18,
    load: LoadType.intersection,
    castle: CastleType.none,
    monastery: false,
    count: 1,
    description: '사거리',
  },
];
