import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.NEXT_PRIVATE_STRIPE_SECRET_KEY);


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
      case "POST":
        try {
            const params = {
              submit_type: 'pay',
                ui_mode: 'embedded',
                line_items: [
                  {
                    // Provide the exact Price ID (for example, pr_1234) of
                    // the product you want to sell
                    price: '{{PRICE_ID}}',
                    quantity: 1,
                  },
                ],
                mode: 'payment',
                // return_url:
                  // `${req.headers.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
                  // `${req.headers.}/return?session_id={CHECKOUT_SESSION_ID}`,
            }

          // Create Checkout Sessions from body params.
          const session = await stripe.checkout.sessions.create(params);
  
          console.log("RETURNING", session);
          
        res.json({clientSecret: session.client_secret});
            
        } catch (error: any) {
          res.status(error.statusCode || 500).json(error.message);
        }
        break;
      case "GET":
      //   try {
      //     const session =
      //       await stripe.checkout.sessions.retrieve(req.query.session_id);
  
      //     res.send({
      //       status: session.status,
      //       customer_email: session.customer_details.email
      //     });
      //   } catch (err) {
      //     res.status(err.statusCode || 500).json(err.message);
      //   }
      //   break;
      // default:
      //   res.setHeader('Allow', req.method);
      //   res.status(405).end('Method Not Allowed');
    }
  }

