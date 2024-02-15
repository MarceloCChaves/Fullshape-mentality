const { Router } = require('express');
const TreinoController = require('../controllers/TreinoController');

const router = Router();

router.get("/treinos", TreinoController.getAllWorkouts);
router.get('/treinos/:id', TreinoController.getUserById);
router.post('/treinos', TreinoController.registerWorkout);
router.put('/treinos/:id', TreinoController.editWorkout);
router.delete('/treinos/:id', TreinoController.deleteWorkout);

module.exports = router;