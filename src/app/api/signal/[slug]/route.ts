// import { MongoClient } from 'mongodb';
// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(req: NextRequest) {
//   const id = req.nextUrl.pathname.split('/')[3];
//   if (req.method === 'GET') {
//     try {
//       const dbConnection = await new MongoClient(
//         'mongodb+srv://mongo-moondo:xhowYztXKaklDWsA@cluster0.qoi3psl.mongodb.net/?retryWrites=true&w=majority',
//         {
//           maxConnecting: 10,
//           maxPoolSize: 10,
//         },
//       ).connect();

//       const signalHistory = await dbConnection
//         .db('hiringSignal')
//         .collection('signals')
//         .findOne({ signalId: id });
//       console.log(signalHistory);

//       if (signalHistory) {
//         return NextResponse.json({ signalStatus: signalHistory.signalStatus });
//       } else {
//         return NextResponse.json({ signalStatus: false });
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   }
// }
