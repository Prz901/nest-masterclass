import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
// import { AppService } from './app.service';
import { randomUUID } from 'node:crypto'
import { CreateMemberTeam } from './dtos/member/create-team-member';
import { RocketMembersRepository } from './repositories/rocket-member-repository';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(private rocketMembersRepository: RocketMembersRepository) { }

  @Post()
  async getHello(@Body() createMemberTeam: CreateMemberTeam) {

    await this.rocketMembersRepository.create(createMemberTeam.name, createMemberTeam.function)
    // const member = await this.prisma.rocketTeamMember.create({
    //   data: {
    //     id: randomUUID(),
    //     name: createMemberTeam.name,
    //     function: createMemberTeam.function
    //   }
    // })
    // return member
  }
}
