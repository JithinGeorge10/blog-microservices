const kafka = require('./kafkaConfig')

async function produce(topic, value) {
    try {
        const producer = kafka.producer()
        await producer.connect()
        await producer.send({
            topic,
            messages: [{ value: message }]
        })
        await produce.disconnect()
    } catch (error) {
        console.log(error);
    }
}

module.exports = produce