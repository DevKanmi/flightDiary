import express, { Response} from 'express';
import {getNonSensitiveEntries, findById} from '../services/diaryService';
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

router.get('/:id',(req, res) =>{
    const id = Number(req.params.id);
    const diary = findById(id);
    if(!diary) res.send({message : "Diary not found"});

    res.send(diary);
});



export default router;
