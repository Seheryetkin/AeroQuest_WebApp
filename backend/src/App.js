import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors(), express.json());

const Schema = mongoose.Schema;

mongoose
  .connect(
    "mongodb://localhost:27017/Flight",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.error("MongoDB bağlantı hatası:", err);
  });

mongoose.connection.on("connected", () => console.log("mongoose baglandi"));
mongoose.connection.on("disconnected", () =>
  console.log("mongoose baglantı kesildi!")
);

const TestModel = new Schema({
  id: Number,
  list: String,
  content: String,
  chicA: String,
  chicB: String,
  chicC: String,
  chicD: String,
  answer: String,
});

const TestModelSchema = mongoose.model("Test", TestModel, "Test");

app.post("/test-add", async (req, res) => {
  const testData = req.body;
  const testDatabase = await mongoose.connection
    .collection("Test")
    .find()
    .toArray();
  try {
    const newTest = new TestModelSchema({
      id:
        testDatabase.length == 0
          ? testDatabase.length + 1
          : testDatabase.length + 1,
      list: testData.list,
      content: testData.content,
      chicA: testData.chicA,
      chicB: testData.chicB,
      chicC: testData.chicC,
      chicD: testData.chicD,
      answer: testData.answer,
    });

    const savedTest = await newTest.save();

    if (savedTest) {
      // test ekleme başarılı
      console.log("test başarıyla eklendi.");
      res.status(200).json(savedTest);
    } else {
      // Ürün ekleme başarısız
      console.error("test eklenirken bir hata oluştu.");
      res.status(500).json({ message: "test eklenirken hata oluştu" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "test eklenirken hata oluştu" });
  }
});

// GET /get-questions endpoint
app.get("/get-questions", async (req, res) => {
  try {
    const slug = req.query.param;
    const tests = await TestModelSchema.find({ list: slug }); // 'Test' koleksiyonundaki tüm kayıtları çek
    res.json(tests); // Kayıtları JSON olarak gönder
  } catch (error) {
    console.error("Soruları çekerken hata oluştu:", error);
    res.status(500).json({ message: "Soruları çekerken hata oluştu" });
  }
});

app.listen(port, () => {
  console.log("localhost:", port, "server run!");
});
