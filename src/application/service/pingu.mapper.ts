import { Pingu } from '../../model/pingu.model';
import { CreatePinguResponse } from '../../api/controller/dto/create-pingu.response';
import { PinguEntity } from '../../infrastructure/repository/entities/pingu.entity';
import { CreatePinguRequest } from '../../api/controller/dto/create-pingu.request';

export class PinguMapper {
  static toDomainFromEntity(entity: PinguEntity): Pingu {
    return {
      id: entity.id,
      name: entity.name,
      isAngry: entity.isAngry,
      badge: entity.badge,
    };
  }
  static toResponse(domain: Pingu): CreatePinguResponse {
    return {
      id: domain.id,
      name: domain.name,
      isAngry: domain.isAngry,
      badge: domain.badge,
    };
  }

  static toDomainFromRequest(request: CreatePinguRequest): Pingu {
    return {
      name: request.name,
      isAngry: request.isAngry,
    };
  }
}
