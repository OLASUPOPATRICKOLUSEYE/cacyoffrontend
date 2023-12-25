// src/pages/api/submitForm.ts
import { NextApiRequest, NextApiResponse } from 'next';
import {client} from '../../app/lib/client'



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { name, contact, email, message } = req.body;

  try {
    // Save the form data to your backend (replace 'your-api-endpoint' with your actual endpoint)
    const response = await client.fetch('/your-api-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, contact, email, message }),
    });

    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
