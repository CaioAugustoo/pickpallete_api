import { Router } from "express";
import { MainController } from "../controllers";

class MainRouter {
  public router: Router;
  private path = "/";

  constructor(router: Router) {
    this.router = router;

    this.initializeRoutes();
  }

  private initializeRoutes() {
    const { router, path } = this;

    router.get(path, MainController.handle);
  }
}

export { MainRouter };
