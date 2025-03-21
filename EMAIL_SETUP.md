# Email Setup with Nodemailer and Gmail

This project uses Nodemailer with Gmail for sending emails from forms. Follow these instructions to set up your Gmail account for use with this application.

## Setting Up Gmail App Password

Since we're using an App Password for authentication (more secure than enabling "Less secure app access"), you'll need to:

1. **Enable 2-Step Verification on your Google Account**:
   - Go to your [Google Account Security Settings](https://myaccount.google.com/security)
   - Scroll to "Signing in to Google" and select "2-Step Verification"
   - Follow the steps to enable 2-Step Verification

2. **Generate an App Password**:
   - After enabling 2-Step Verification, go back to the [Security Settings](https://myaccount.google.com/security)
   - Scroll to "Signing in to Google" and select "App passwords"
   - Select "Mail" as the app and "Other (Custom name)" as the device
   - Enter a name like "My Website Contact Form"
   - Click "Generate"
   - Google will display a 16-character password - **copy this password**

## Configuring Environment Variables

1. Update the `.env` file in the root of the project with your Gmail credentials:

```
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_APP_PASSWORD=your-16-character-app-password
EMAIL_TO=recipient-email@example.com
```

- `EMAIL_USER`: Your Gmail address
- `EMAIL_APP_PASSWORD`: The 16-character App Password you generated
- `EMAIL_TO`: The email address where you want to receive form submissions

## Testing the Email Setup

To test if your email configuration is working correctly:

1. Make sure you've updated the `.env` file with your credentials
2. Start the development server: `npm run dev`
3. Visit: `http://localhost:3000/api/test-email` in your browser
4. You should receive a test email at the address specified in `EMAIL_TO`

## Troubleshooting

If you encounter issues:

1. **Check your App Password**: Make sure you've correctly copied the 16-character App Password
2. **Check your Gmail settings**: Ensure 2-Step Verification is enabled
3. **Check server logs**: Look for error messages in the console
4. **Gmail sending limits**: Be aware that Gmail has sending limits (500 emails per day for regular Gmail accounts)

## Security Notes

- Never commit your `.env` file to version control
- The App Password gives access to your Gmail account for sending emails only
- Consider using a dedicated Gmail account for your application
- For production use with high volume, consider using a transactional email service like SendGrid, Mailgun, or Amazon SES
