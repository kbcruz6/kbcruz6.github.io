const { Router } = require("express");
const { contentType } = require("express/lib/response");
const router = Router ();
const nodemailer=require("nodemailer");

router.post("/send-email", async (req,res)=>{
    const { name, email, phone, message }= req.body;
    console.log(req.body);

    contentHTML=`
        <h1>Informacion de usuario:</h1>
        <ul>
            <li>User name: ${name}</li>
            <li>User email: ${email}</li>
            <li>User phone: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;

    console.log(contentHTML);

    const transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
            user:"yu.yamamoto.1981@gmail.com",
            pass: "ajtesfssecwofiml"
        },
        tls:{
            rejectUnauthorized:false
        }
    });

    const info=await transporter.sendMail({
        from:'"JS projects 👻" <yu.yamamoto.1981@gmail.com',
        to: "agustintcruz@gmail.com, yu.yamamoto.1981@gmail.com",
        subject:'Formulario de contacto',
        html:contentHTML
    });
    console.log('Message sent', info.messageId);

    res.redirect("https://kbcruz6.github.io/MixJsLittleProjects/");   
});

module.exports=router;
