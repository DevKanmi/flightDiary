import express, {Response} from 'express';
import {getNonSensitiveEntries} from '../services/diaryService';
import { DiaryEntry } from '../types';
const router = express.Router();

router.get('/', (_req,res) =>{
    res.send('Fetching all diaries!');
});

router.get('/non',(_req, res: Response<DiaryEntry[]>)=>{
        res.json(getNonSensitiveEntries());
});
router.post('/', (_req,res) =>{
    res.send('Saving a diary');
});



export default router;
