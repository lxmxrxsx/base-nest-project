import { Test, TestingModule } from '@nestjs/testing';
import { PinguService } from '../../src/pingu/service/pingu.service';
import { PinguRepository } from '../../src/pingu/repository/pingu.repository';

const mockRepository = () => ({});
describe('PinguService', () => {
  let service: PinguService;
  let repository: PinguRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PinguService,
        PinguRepository,
        { provide: PinguRepository, useFactory: mockRepository },
      ],
    }).compile();

    service = module.get<PinguService>(PinguService);
  });

  it('should be defined', () => {
    const actual = true;
    const notBool = service.notBool(actual);
    expect(actual).not.toBe(notBool);
  });
});
