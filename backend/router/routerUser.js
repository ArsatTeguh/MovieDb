import  express  from "express";
import { getUser, Register, Login, logOut } from '../controller/controllerUser.js'
import { refreshToken } from "./refreshToken.js";
import verifyToken from '../middleware/verifyToken.js'
const router = express.Router()


router.get('/data', verifyToken , getUser);
router.post('/', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', logOut);


export default router;
