import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { RocketMembersRepository } from './repositories/rocket-member-repository';
import { PrismaRocketMembersRepository } from './repositories/prisma/prisma-rocket-members-repository';
// import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService,
    {
      provide: RocketMembersRepository,
      useClass: PrismaRocketMembersRepository
    }
  ],
})
export class AppModule { }
