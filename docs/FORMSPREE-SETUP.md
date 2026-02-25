# Formspree Integration Guide

This guide explains how to set up Formspree for lead magnet form submissions on CyberGuard.

## Quick Setup (2 minutes)

### Step 1: Create a Formspree Account
1. Go to https://formspree.io/
2. Sign up with your email
3. Create a new form (e.g., "Lead Magnet Submissions")

### Step 2: Get Your Form ID
- After creating the form, Formspree will provide you with a Form ID
- Format: `https://formspree.io/f/YOUR_FORM_ID`
- Copy the `YOUR_FORM_ID` part

### Step 3: Update script.js
In `script.js`, find line ~2451 and replace `YOUR_FORMSPREE_ID` with your actual Form ID:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_ACTUAL_FORM_ID', {
```

Example:
```javascript
const response = await fetch('https://formspree.io/f/xyzabc123', {
```

### Step 4: Test the Form
1. Navigate to lead-magnets.html
2. Click "Download Now" on any resource
3. Fill in the form and submit
4. Check your email (Formspree will send confirmation)

---

## Alternative: Mailchimp Integration

If you prefer Mailchimp for email list management:

### Setup Steps:
1. Create a Mailchimp account at https://mailchimp.com/
2. Create an audience and get your audience ID
3. Generate an API key from Account Settings
4. Use Mailchimp's API to subscribe leads

### Update script.js for Mailchimp:

```javascript
async function submitToMailchimp(email, firstName, company) {
    const listId = 'YOUR_MAILCHIMP_LIST_ID';
    const apiKey = 'YOUR_MAILCHIMP_API_KEY';
    const server = 'us1'; // Replace with your server (us1, us2, etc)
    
    const data = {
        email_address: email,
        status: 'pending',
        merge_fields: {
            FNAME: firstName,
            COMPANY: company
        }
    };
    
    try {
        const response = await fetch(
            `https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        );
        return response.ok;
    } catch (error) {
        console.error('Mailchimp error:', error);
        return false;
    }
}
```

---

## Form Fields Submitted

The lead magnet form collects:

| Field | Type | Required | Usage |
|-------|------|----------|-------|
| firstName | Text | Yes | Personalization |
| email | Email | Yes | Deliver downloads |
| company | Text | No | Segmentation |
| companySize | Select | No | Targeting |
| magnet_type | Hidden | Yes | Track which resource requested |
| submission_date | ISO DateTime | Yes | Analytics |
| _subject | Hidden | Yes | Email subject line |

---

## Formspree Features

### Email Notifications
- Receive email alerts for each submission
- Can be set in Formspree dashboard

### Webhook Integration
- Formspree can send submissions to:
  - Slack channels
  - Discord webhooks
  - Custom endpoints
  - Zapier/Integromat

### CSV Export
- Export all submissions from Formspree dashboard
- Use for CRM integration

### Email Redirects
- Configure confirmation emails sent to users
- Customize email templates

---

## Troubleshooting

### Form Not Submitting
- Check browser console for errors (F12 → Console tab)
- Verify Formspree ID is correct
- Ensure CORS is enabled (Formspree handles this by default)

### Emails Not Received
- Check spam folder
- Verify email address in form
- Check Formspree dashboard for submission logs

### CORS Errors
- Formspree accepts cross-origin requests by default
- If issues persist, enable CORS in Formspree settings

---

## Best Practices

1. **Set up auto-responses** in Formspree to send instant confirmation emails with download links
2. **Segment by company size** to tailor follow-up communications
3. **Monitor submission rates** to optimize lead magnet timing
4. **Export data regularly** for backup and CRM integration
5. **Enable webhook notifications** for real-time alerts

---

## Privacy Compliance

- Formspree is GDPR compliant
- All data encrypted in transit
- Configure data retention policies in Formspree dashboard
- Users can opt-out via unsubscribe links

---

## Support

- Formspree Docs: https://formspree.io/documentation
- Formspree Support: support@formspree.io
- CyberGuard Contact: support@cyberguard.com
