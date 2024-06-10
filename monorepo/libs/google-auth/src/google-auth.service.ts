import { Injectable } from '@nestjs/common';
import { OAuth2Client, TokenPayload } from 'google-auth-library';
import { ConfigService } from '@nestjs/config';
import { ENVIRONMENT } from '@namnh240795/environment';

@Injectable()
export class GoogleAuthService {
  private oauth2Client: OAuth2Client;
  constructor(private readonly configService: ConfigService) {
    const clientID = this.configService.get(ENVIRONMENT.GOOGLE_CLIENT_ID);
    const clientSecret = this.configService.get(
      ENVIRONMENT.GOOGLE_CLIENT_SECRET,
    );
    const redirect_uri = this.configService.get(
      ENVIRONMENT.GOOGLE_REDIRECT_URI,
    );
    this.oauth2Client = new OAuth2Client({
      clientId: clientID,
      clientSecret: clientSecret,
      redirectUri: redirect_uri,
    });
  }

  async verify(token: string): Promise<TokenPayload> {
    const ticket = await this.oauth2Client.verifyIdToken({
      idToken: token,
      audience: this.configService.get(ENVIRONMENT.GOOGLE_CLIENT_ID),
    });
    return ticket.getPayload();
  }
}
