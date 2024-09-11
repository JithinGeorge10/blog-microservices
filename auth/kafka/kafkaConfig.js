const {kafka}=require('kafkajs')

const kafka=new kafka({
    clientId:"auth-service",
    brokers:['kafka:9092']
})

module.exports=kafka