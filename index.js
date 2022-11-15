import botAlerterService from "./src/service/botAlerterService.js";

export const handler = async () => {
    const botAlerterResponse1 = await botAlerterService.alertTopPerformersAndLosers();
    const botAlerterResponse2 = await botAlerterService.alertTopPerformersAndLosers(false);
    return {
        statusCode: 200,
        body: JSON.stringify(`Sent at ${new Date()} with Response ${botAlerterResponse1} ${botAlerterResponse2}`)
    }
}