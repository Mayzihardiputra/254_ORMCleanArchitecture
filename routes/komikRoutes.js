const express = require('express');
const router = express.Router();
const komikConstroller = require('../controllers/komikControllers');

const {
    komikSchema, idSchema, validateBody, validateParams
} = require('../middleware/komikValidator');

router.get('/komik', komikConstroller.getAllKomik);
router.get('/komik/:id', validateParams(idSchema), komikConstroller.getKomikById);
router.post('/komik', validateBody(komikSchema), komikConstroller.createKomik);
router.put('/komik/:id', validateParams(idSchema), validateBody(komikSchema), 
komikConstroller.updateKomik);
router.delete('/komik/:id', validateParams(idSchema), komikConstroller.deleteKomik);

module.exports = router;