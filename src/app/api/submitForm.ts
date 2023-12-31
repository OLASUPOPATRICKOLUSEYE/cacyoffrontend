// src/app/api/submitForm.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../lib/client';

export default async function submitForm(req: NextApiRequest, res: NextApiResponse) {
  // Allow requests only from your local development server (localhost:3000)
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, contact, email, message } = req.body;

  try {
    console.log('Received form submission:', { name, contact, email, message });

    // Save the form data to Sanity
    const response = await client.create({
      _type: 'contactSection',
      form: {
        name,
        contact,
        email,
        message,
      },
    });

    console.log('Form data saved to Sanity:', response);

    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error('Error saving form data to Sanity:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
