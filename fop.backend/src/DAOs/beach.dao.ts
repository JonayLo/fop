import {Beach} from "../models/Beach";
import {mockBeaches} from "../mocks/beaches";

export class BeachDao {
    private static instance: BeachDao;

    private constructor() {

    }

    static getInstance() {
        if (!BeachDao.instance) {
            BeachDao.instance = new BeachDao()
        }
        return BeachDao.instance
    }

    getAll(): Beach[] {
        return mockBeaches
    }
}
