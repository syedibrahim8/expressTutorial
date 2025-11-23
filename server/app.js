import mailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

async function mail(){
    try {
        let email = process.env.MAIL;
        let pass = process.env.PASS;
        let recEmail = process.env.RMAIL;
        const userDetail = mailer.createTransport({
            service : "gmail",
            auth : {
                user : email,
                pass : pass
            }
        }) 
        const sender = await userDetail.sendMail({
            from : email,
            to : recEmail,
            subject : "Email sent for study purpose",
            text : "Email sent through nodemailer"
        })
        console.log("Email sent successfully!", sender.messageId);
    } catch (error) {
        console.log("Email not sent!",error);
    }
}
mail();