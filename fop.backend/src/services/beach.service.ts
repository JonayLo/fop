export class BeachService {
    private static instance: BeachService;

    private constructor() {

    }

    static getInstance() {
        if (!BeachService.instance) {
            BeachService.instance = new BeachService();
        }
        return BeachService.instance;
    }
}
