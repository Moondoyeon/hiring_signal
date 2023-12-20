/* eslint-disable no-var */
// mongo DB 연동하는 파일
import { MongoClient } from 'mongodb';

const DB_URI = process.env.DB_CONNECTION_STRING || '';
let connectDB: MongoClient;

// declare global 블럭 안에 선언한 타입은 전역 개체의 프로퍼티 타입으로 정의된다.
declare global {
  var _mongo: MongoClient;
}

// 개발환경: 전역변수 _mongo 만들어 mongoClient 중복실행 방지
if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = await new MongoClient(DB_URI, {
      maxConnecting: 10,
      maxPoolSize: 10,
    }).connect();
  }
  connectDB = global._mongo;
} else {
  // 프로덕션 상태는 중복실행 될 일이 별로 없음
  connectDB = await new MongoClient(DB_URI).connect();
}

export { connectDB };
