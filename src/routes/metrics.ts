import { Router } from 'express';
import { CollectMetricsController } from '../controllers';

class MetricsRoute {
  public path = '/metrics';
  public router: Router;

  constructor(router: Router) {
    this.router = router;

    this.initializeRoutes();
  }

  private initializeRoutes() {
    const { path, router } = this;

    router.get(path, CollectMetricsController.handle);
  }
}

export { MetricsRoute };
