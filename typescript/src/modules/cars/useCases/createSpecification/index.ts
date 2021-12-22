import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreteSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationRepository = SpecificationRepository.getInstance();
const createSpecificationUseCase = new CreteSpecificationUseCase(
  specificationRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
