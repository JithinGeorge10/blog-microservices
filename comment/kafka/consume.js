const { addPost, addUser } = require("../controller/commentController.js");
const kafka = require("./kafkaConfig");

async function consume() {
  console.log('kafka')
  try {
    const consumer = kafka.consumer({ groupId: "comment-group" })
    await consumer.connect()
    await consumer.subscribe({
      topics: ["add-post","add-user"],
      fromBeginning: true,
    });
    console.log("post adding user");
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: message.value.toString(),
        })
        const value = JSON.parse(message.value.toString());
        if (topic === "add-post") {
          await addPost(value);
        }else if (topic === "add-user") {
          await addUser(value);
        }
      },
    })
  } catch (error) {
    console.log('kafka error')
    console.log(error);
  }
}

module.exports = consume;