import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = "mongodb://localhost:27017/crudwithredux";

mongodb.MongoClient.connect(dbUrl, function(err, db) {
  app.get('/api/games', (req, res) => {
    db.collection('games').find({}).toArray((err, games) => {
      return res.json({games});
    });
  });

  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global: "Still working on it. Please try again later when we implement it"
      }
    });
  });
  app.listen(8080, () => console.log('Server is running on localhost:8080'));
});
