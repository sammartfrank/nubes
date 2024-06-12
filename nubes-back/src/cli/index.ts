import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

import { Database } from '../../database.types';
import { Client } from 'node-mailjet';
import { BadRequestException } from '@nestjs/common';
import { generateMjml } from '../emails';

export const supabase = createClient<Database>(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY,
);

const mailjet = new Client({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_API_SECRET,
});

export const sendEmail = async ({
  subject,
  config,
}: {
  subject: string;
  config: any;
}) => {
  try {
    const request = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'franksammartino7@gmail.com',
            Name: 'Franco Test',
          },
          To: [
            {
              Email: 'franksammartino7@gmail.com',
              Name: 'Franco Receptor',
            },
          ],
          Subject: subject,
          htmlPart: generateMjml({
            config: {
              createBookingDto: {
                booking_name: config.booking_name,
                booking_date: config.booking_date,
                booking_time: config.booking_time,
              },
            },
          }),
        },
      ],
    });

    return request;
  } catch (error) {
    throw new BadRequestException(error);
  }
};
