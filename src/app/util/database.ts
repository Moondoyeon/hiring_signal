import { MongoClient } from 'mongodb';

const DB_URI = process.env.DB_CONNECTION_STRING || '';
if (!DB_URI) {
  throw new Error('The MONGODB_URL environment variable is not defined');
}

// let connectDBTest: Promise<MongoClient>;

// if (process.env.NODE_ENV === 'development') {
//   if (!global._mongo) {
//     console.log('잇냐요 몽고디비', global._mongo);
//     global._mongo = new MongoClient(DB_URI, {
//       maxConnecting: 2,
//       maxPoolSize: 2,
//     }).connect();
//   }

//   connectDBTest = global._mongo;
// } else {
//   connectDBTest = new MongoClient(DB_URI, {
//     maxConnecting: 2,
//     maxPoolSize: 2,
//   }).connect();
// }

/// ------------

let connectDB: MongoClient;

// decldre global 블럭 안에 선언한 타입은 전역 개체의 프로퍼티 타입으로 정의된다.
// declare global {
//   // eslint-disable-next-line no-var
//   var _mongoClient: MongoClient;
// }

// 개발환경: 전역변수 _mongo 만들어 mongoClient 중복실행 방지
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClient) {
    global._mongoClient = await new MongoClient(DB_URI, {
      maxConnecting: 2,
      maxPoolSize: 2,
    }).connect();
  }
  connectDB = global._mongoClient;
} else {
  // 프로덕션 상태는 중복실행 될 일이 별로 없음
  connectDB = await new MongoClient(DB_URI).connect();
}

export { connectDB };
