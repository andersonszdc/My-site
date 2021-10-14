import nodemailer from 'nodemailer'
import fs, {readFile} from 'fs'
import handlebars from 'handlebars'
import isEmailValid from '../../utils/isEmailValid'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  const { name, to, message } = req.body

  return new Promise(resolve => {

    if (isEmailValid(to) === false) {
      res.status(400).json({message: 'E-mail incorreto'})
      return resolve
    }
  
    if (!name || !message) {
      res.status(400).json({message: 'Nome/mensagem faltando'})
      return resolve
    }
  
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    })
  
    readFile(process.cwd() + '/emailAuto.html', (err, html) => {
  
      if (err) throw err

      const template = handlebars.compile(`${html}`);
      const context = { name, to };
      const htmlToSend = template(context);
  
      transporter.sendMail({
    
        from: 'contato@andersonszdc.com',
        to,
        subject: "Oba! Você me enviou uma mensagem",
        html: htmlToSend
    
      }).then(info => {
        
        transporter.sendMail({
          
          from: 'contato@andersonszdc.com',
          to: 'contato@andersonszdc.com',
          replyTo: to,
          subject: "Você recebeu mensagem do seu forms",
          html: `
          <p>${name}</p>
          <p>${to}</p>
          <p>${message}</p>
          `
          
        }).then(info => {
            res.status(200).json({sucess: 'Mensagem enviada!', info})
            return resolve
          }).catch(error => {
            res.status(400).json({message: 'Erro no aviso!', error})
            return resolve
          })
  
      }).catch(error => {
        res.status(400).json({message: 'Erro na mensagem!', error})
        return resolve
      })
  
    })

  })

}
