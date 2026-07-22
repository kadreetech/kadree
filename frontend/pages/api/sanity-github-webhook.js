// File: /api/sanity-github-webhook.js

export default async function handler(req, res) {
  // Only accept POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  // Optional: Protect this endpoint with a shared secret (Sanity can send a secret header).
  // If you set up a “Secret” in Sanity’s webhook settings,
  // they will include X-Sanity-Webhook-Signature or X-Sanity-Webhook-Secret in the request.
  // You can verify here:
  //    if (req.headers['x-sanity-webhook-secret'] !== process.env.SANITY_WEBHOOK_SECRET) {
  //      return res.status(401).send('Invalid Sanity secret');
  //    }

  // At this point, Sanity has sent its normal webhook JSON in req.body.
  // We’ll ignore most of it, and simply trigger GitHub’s repository_dispatch.

  const githubDispatchUrl =
    'https://api.github.com/repos/Overlap-Web/bluesoft-web-2022/dispatches';

  try {
    const githubRes = await fetch(githubDispatchUrl, {
      method: 'POST',
      headers: {
        'Authorization': `token ${process.env.GITHUB_PAT}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      // This is the payload GitHub expects:
      body: JSON.stringify({
        event_type: 'sanity-published',
        // You can pass along data from Sanity if you want:
        client_payload: {
          sanityProjectId: req.body.projectId,
          // …or any other fields from req.body you care about…
        }
      }),
    });

    if (!githubRes.ok) {
      const text = await githubRes.text();
      console.error('GitHub dispatch failed:', githubRes.status, text);
      return res.status(500).json({ error: 'Failed to trigger GitHub dispatch' });
    }

    // All good:
    return res.status(200).json({ message: 'GitHub dispatch queued.' });
  } catch (err) {
    console.error('Error calling GitHub API:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
