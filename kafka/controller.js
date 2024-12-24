import KafkaProducer from './producer.js'
import { TOPIC_NAME } from "./constants.js";
import {v4} from 'uuid'
const sendMessageToKafka = async(req, res) => {
    try{
        console.log(req.body);
        const {message} = req.body;
        const kafkaProducer = new KafkaProducer();
        const messages = [
            {
                key:'key1',
                value:JSON.stringify(req.body)
            }
        ];
        kafkaProducer.produce(TOPIC_NAME,messages);
        res.status(200).json({
            "status":'OK!',
            "message":'Mesaage send successfully'
        });

    } catch(error){
        console.log(error);
    }
}
const controllers = {sendMessageToKafka};

export default controllers;