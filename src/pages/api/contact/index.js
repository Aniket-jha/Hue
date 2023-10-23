

import { client } from '../../../lib/client'




export default async function handler(
  req,
  res
) {
 
 if (req.method === "POST"){
    const document = req.body;
    client.create(document).then(()=>res.status(201).json('Message Sent'))
  }
}
