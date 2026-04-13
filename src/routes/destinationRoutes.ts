import express, {Router} from 'express';

import { getDestinations } from '../controllers/destinationController';

const router: Router = express.Router();

router.get('/', getDestinations);

export default router;