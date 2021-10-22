import { rest } from 'msw';
import payments from './payments';

export const easywireEndpoints = [
   rest.get('/api/easywire/info', (req, res, ctx) => {
      return res(
         ctx.json({
            name: 'Emilia Birch',
            company: 'Duke Street Studio',
            kpi: {
               balance: 30659.23,
               pending: -19500.0,
               processed: 20000,
            },
         })
      );
   }),

   rest.get('/api/easywire/payments', (req, res, ctx) => {
      return res(ctx.json(payments));
   }),
];
