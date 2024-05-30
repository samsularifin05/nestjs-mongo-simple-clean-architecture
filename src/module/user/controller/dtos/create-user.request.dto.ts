import { RegisterUserRequestDto } from 'src/module/auth/controller/dto/register-user-request.dto';
import * as z from 'zod';
import { CreateUserRequest } from '../../port/user.request.port';

export const CraeteUserRequestDto = RegisterUserRequestDto.extend({
  level: z.string(),
}) satisfies z.ZodType<CreateUserRequest>;
