import { Injectable } from '@nestjs/common';
import { supabase } from '@/cli';
import { TableStatus } from 'custom.database.types';

@Injectable()
export class TablesService {
  async getAllTables() {
    const { data, error } = await supabase.from('tables').select('*');
    if (error) throw error;
    return data;
  }

  async getTableById(id: string) {
    const { data, error } = await supabase
      .from('tables')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  }

  async getTableByBookingId(bookingId: string) {
    const { data, error } = await supabase
      .from('tables')
      .select('*')
      .eq('bookingId', bookingId)
      .single();
    if (error) throw error;
    return data;
  }

  async getBookingsByTableId(id: string) {
    const { data, error } = await supabase
      .from('tables')
      .select('bookings(*)')
      .eq('id', id);
    if (error) throw error;
    return data;
  }

  async updateTableStatus({
    tableId,
    status,
  }: {
    tableId: string;
    status: TableStatus;
  }) {
    try {
      const result = await supabase
        .from('tables')
        .update({ table_status: status })
        .eq('id', tableId);

      return result;
    } catch (error) {
      console.error('Error updating table status:', error);
      throw error;
    }
  }
}
