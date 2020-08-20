import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(
        `Erro de configuração - Chave não encontrada: env.${key}`,
      );
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(element => this.getValue(element, true));
    return this;
  }

  public isProduction() {
    const modo = this.getValue('MODE', true);
    return modo != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.getValue('TYPEORM_HOST'),
      port: parseInt(this.getValue('TYPEORM_PORT')),
      username: this.getValue('TYPEORM_USER'),
      password: this.getValue('TYPEORM_PASSWORD'),
      database: this.getValue('TYPEORM_DATABASE'),
      synchronize: true,
      entities: ['src/entity/**/*.ts'],
      migrationsTableName: 'migration',
      migrations: ['src/migration/*.ts'],
      cli: {
        migrationsDir: 'src/migration',
      },
      ssl: {
        rejectUnauthorized: false,
      },
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'TYPEORM_HOST',
  'TYPEORM_PORT',
  'TYPEORM_USER',
  'TYPEORM_PASSWORD',
  'TYPEORM_DATABASE',
]);

export { configService };
