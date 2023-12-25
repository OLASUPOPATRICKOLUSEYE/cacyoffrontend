// src/app/api/submitForm.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../app/lib/client';

export default async function submitForm(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, contact, email, message } = req.body;

  try {
    // Save the form data to Sanity using the new schema
    const response = await client.create({
      _type: 'contactForm',
      name,
      contact,
      email,
      message,
    });

    console.log('Form data saved to Sanity:', response);

    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error('Error saving form data to Sanity:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
