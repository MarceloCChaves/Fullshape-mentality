const { Router } = require('express');
const CommunityController = require('../../controllers/communities/CommunitiesController');

const router = Router();

router.get("/comunidades", CommunityController.getAllCommunities);
router.get('/comunidades/:id', CommunityController.getCommunityById);
router.post('/comunidades', CommunityController.registerCommunity);
router.put('/comunidades/:id', CommunityController.editCommunity);
router.delete('/comunidades/:id', CommunityController.deleteCommunity);

module.exports = router;