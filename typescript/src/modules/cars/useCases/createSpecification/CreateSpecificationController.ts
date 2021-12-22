import { Request, Response } from 'express';

import { CreteSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreteSpecificationUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecificationUseCase.execute({ name, description });

    return response.status(201).send({ message: 'Specification created' });
  }
}

export { CreateSpecificationController };
