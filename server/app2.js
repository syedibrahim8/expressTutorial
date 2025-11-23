import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();


async function sms(){
    try {
        const accountSid = process.env.SID;
        const accountToken = process.env.TOKEN;
        const phone = process.env.PHONE;
        const recPhone = process.env.TPHONE;
        let sender = twilio(accountSid,accountToken)
        let message = await sender.messages.create({
            from:phone,
            to:recPhone,
            body:"Greetings Suhail sir, sms sent for educational purpose"
        })
        console.log("SMS sent", message.sid);
    } catch (error) {
        console.log(error);        
    }
}
sms();
