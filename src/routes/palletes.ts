import { Router } from 'express';
import { CreatePalleteController, FindPalleteByIdController, ListAllPalletesController } from '../controllers';

class PalletesRouter {
  public router: Router;
  private path = '/pallete';

  constructor(router: Router) {
    this.router = router;

    this.initializeRoutes();
  }

  private initializeRoutes() {
    const { router, path } = this;

    router.post(path, CreatePalleteController.handle);
    router.get(`${path}s`, ListAllPalletesController.handle);
    router.get(`${path}/:id`, FindPalleteByIdController.handle);
  }
}

export { PalletesRouter };
