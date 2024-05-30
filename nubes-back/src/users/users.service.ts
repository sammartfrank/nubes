import { Injectable } from '@nestjs/common';

import { User } from '../../custom.database.types';
import { supabase } from '../../src/cli';

@Injectable()
export class UsersService {
  async getAllUsers() {
    const { data, error } = await supabase.from('users').select('*');
    // .neq('id', authUser.id);
    if (error) {
      throw error;
    }
    return data as User[];
  }

  async getUserById(id: string) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id);
    if (error) {
      throw error;
    }
    return data[0] as User;
  }

  async createUser(user: any) {
    const { data, error, status } = await supabase.from('users').insert([user]);
    if (error) {
      throw error;
    }
    if (status !== 201) {
      throw new Error('Error creating user');
    }
    return data as User;
  }

  async updateUser(userId: string, payload: Partial<User>) {
    const { data, error } = await supabase
      .from('users')
      .update(payload)
      .eq('id', userId);
    if (error) {
      throw error;
    }
    return data as User;
  }

  async deleteUser(id: string) {
    const { data, error } = await supabase.from('users').delete().eq('id', id);
    if (error) {
      throw error;
    }
    return data;
  }
}
