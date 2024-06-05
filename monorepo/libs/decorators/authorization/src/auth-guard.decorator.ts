import { CanActivate } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common';
import { Injectable, UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthUser } from './restful-auth-user.decorator';

@Injectable()
class JwtAuthGuard extends AuthGuard('jwt') {}

@Injectable()
class RestfulPermissionGuard implements CanActivate {
  constructor() {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const user: AuthUser = req.user;

    return !!user;
  }
}

export const RestfulAuthorization = () =>
  applyDecorators(UseGuards(JwtAuthGuard, RestfulPermissionGuard));
