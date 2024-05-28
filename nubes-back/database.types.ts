export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          booking_date: string;
          booking_details: string;
          booking_name: string;
          booking_time: string;
          created_at: string;
          id: string;
          pax: number;
          status: Database['public']['Enums']['bookings_status_enum'];
          table_id: string;
          tableId: string | null;
          updated_at: string;
          user_id: string;
          userId: string | null;
        };
        Insert: {
          booking_date: string;
          booking_details: string;
          booking_name: string;
          booking_time: string;
          created_at?: string;
          id?: string;
          pax: number;
          status?: Database['public']['Enums']['bookings_status_enum'];
          table_id: string;
          tableId?: string | null;
          updated_at?: string;
          user_id: string;
          userId?: string | null;
        };
        Update: {
          booking_date?: string;
          booking_details?: string;
          booking_name?: string;
          booking_time?: string;
          created_at?: string;
          id?: string;
          pax?: number;
          status?: Database['public']['Enums']['bookings_status_enum'];
          table_id?: string;
          tableId?: string | null;
          updated_at?: string;
          user_id?: string;
          userId?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'FK_38a69a58a323647f2e75eb994de';
            columns: ['userId'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'FK_60fab7ec4cf588b61da4fb14d67';
            columns: ['tableId'];
            isOneToOne: false;
            referencedRelation: 'tables';
            referencedColumns: ['id'];
          },
        ];
      };
      tables: {
        Row: {
          created_at: string;
          id: string;
          table_capacity: number;
          table_number: number;
          table_status: string;
          table_type: Database['public']['Enums']['tables_table_type_enum'];
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          table_capacity: number;
          table_number: number;
          table_status: string;
          table_type?: Database['public']['Enums']['tables_table_type_enum'];
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          table_capacity?: number;
          table_number?: number;
          table_status?: string;
          table_type?: Database['public']['Enums']['tables_table_type_enum'];
          updated_at?: string;
        };
        Relationships: [];
      };
      users: {
        Row: {
          created_at: string;
          email: string;
          id: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          email: string;
          id?: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          email?: string;
          id?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      booking_status_enum: 'pending' | 'approved' | 'cancelled';
      bookings_status_enum: 'pending' | 'approved' | 'cancelled';
      table_table_type_enum: 'Window' | 'Hall';
      tables_table_type_enum: 'Window' | 'Hall';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;
