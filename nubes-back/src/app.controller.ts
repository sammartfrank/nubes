import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAppVersion() {
    return `
      <html>
        <head>
          <title>Nubes Backend</title>
          <style>
            body {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100vh;
              margin: 0;
              background-color: #f0f0f0;
              font-family: Arial, sans-serif;
            }
            button {
              margin-top: 20px;
              padding: 10px 20px;
            }
          </style>
        </head>
        <body>
          <h1>Nubes Backend</h1>
          <h1>Version: 1.0.0</h1>
          <button onclick="window.location.href='https://nubes-three.vercel.app/dashboard'">Go to App</button>
        </body>
      </html>
    `;
  }
}
