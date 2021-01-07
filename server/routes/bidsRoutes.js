const express = require('express');
const { post_bid, get_bid, delete_bid } = require('../controller/bidsController');


const router = express.Router();

router.post('/submitBid', post_bid);
router.get('/getBids', get_bid);
router.delete('/deleteBid/:id',delete_bid)