import botAlerterService from "./src/service/botAlerterService.js";

export const handler = async () => {
    const botAlerterResponse = await botAlerterService.alertTopPerformers();
    return {
        statusCode: 200,
        body: JSON.stringify(`Sent at ${new Date()} with Response ${botAlerterResponse}`)
    }
}