import express from "express";
import bodyParser from "body-parser";
import constrollers from "./kafka/controller.js";
// import KafkaConsumer from "./consumer.js";
import {GROUP_ID, TOPIC_NAME} from "./kafka/constants.js";

const app = express();
const jsonParser = bodyParser.json();

app.get("", (req, res, next) => {
    console.log('Hello to Node Express and Kafkajs')
    return res.send('<h1>Hello to Node Express and Kafkajs</h1>')
});

app.post("/api/send", jsonParser, constrollers.sendMessageToKafka);

// consume from topic "test-topic"
// const kafkaConsumer = new KafkaConsumer(GROUP_ID);
// kafkaConsumer.consume(TOPIC_NAME, (topic, partition,value) => {
//     console.log("Topic: ",topic,"Partition", partition)
//     console.log("📨 Receive message: ",  value);
// });
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});