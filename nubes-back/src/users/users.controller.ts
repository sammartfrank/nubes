import { Controller, UseGuards } from '@nestjs/common';
import { Get, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { JWTAuthGuard as SupabaseAuthGuard } from 'nest-supabase-guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(SupabaseAuthGuard)
  @Get()
  async getAllUsers() {
    return await this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return await this.usersService.getUserById(id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() user: any) {
    return await this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.usersService.deleteUser(id);
  }
}
