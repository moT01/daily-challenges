import { MongoClient } from 'mongodb';
import assert from 'node:assert';
import 'dotenv/config';

assert.ok(process.env.MONGO_URI);

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db('freecodecamp'); 

export const dailyCodingChallenges = db.collection('DailyCodingChallenges');
export { client };
