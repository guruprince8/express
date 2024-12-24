const kafka = require('kafka-node');
const kafka_broker = {
    'kafkaHost':'192.168.1.223:9092'
};
const kafka_topic = 'CLICK_STREAM';
const kafka_client = new kafka.KafkaClient(kafka_broker);
const kafka_producer = new kafka.Producer(kafka_client);


kafka_producer.on('ready',()=>{
    console.log('producer ready')
});

kafka_producer.on('error',(err)=> {
    console.log('producer error',err);
});

function sendMessage(message) {
    const payloads = [{ topic: kafka_topic, messages: [JSON.stringify(message)] }];
    kafka_producer.send(payloads, (error, data) => {
        if (error) {
          console.error('Error sending message to Kafka:', error);
        } else {
           console.log('Message sent to Kafka:', data);
        }
    });
}

module.exports = {sendMessage};