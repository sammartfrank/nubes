export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          booking_date: string
          booking_details: string
          booking_name: string
          booking_status: Database["public"]["Enums"]["bookings_booking_status_enum"]
          booking_time: string
          created_at: string
          id: string
          pax: number
          tableId: string | null
          updated_at: string
          userId: string | null
        }
        Insert: {
          booking_date: string
          booking_details: string
          booking_name: string
          booking_status?: Database["public"]["Enums"]["bookings_booking_status_enum"]
          booking_time: string
          created_at?: string
          id?: string
          pax: number
          tableId?: string | null
          updated_at?: string
          userId?: string | null
        }
        Update: {
          booking_date?: string
          booking_details?: string
          booking_name?: string
          booking_status?: Database["public"]["Enums"]["bookings_booking_status_enum"]
          booking_time?: string
          created_at?: string
          id?: string
          pax?: number
          tableId?: string | null
          updated_at?: string
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "FK_38a69a58a323647f2e75eb994de"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_60fab7ec4cf588b61da4fb14d67"
            columns: ["tableId"]
            isOneToOne: false
            referencedRelation: "tables"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings_confirmed: {
        Row: {
          bookingId: string | null
          created_at: string
          id: string
          payment_amount: number
          paymentId: string | null
          updated_at: string
          userId: string | null
        }
        Insert: {
          bookingId?: string | null
          created_at?: string
          id?: string
          payment_amount: number
          paymentId?: string | null
          updated_at?: string
          userId?: string | null
        }
        Update: {
          bookingId?: string | null
          created_at?: string
          id?: string
          payment_amount?: number
          paymentId?: string | null
          updated_at?: string
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "FK_0796e8f46e635bef5f5b73a704f"
            columns: ["paymentId"]
            isOneToOne: true
            referencedRelation: "payment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_6d88c69fb237e08564ca4d940f2"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_8547427ab1f12be2f7576e67320"
            columns: ["bookingId"]
            isOneToOne: true
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      payment: {
        Row: {
          amount: number
          bookingId: string | null
          collection_id: string
          collection_status: string
          created_at: string
          external_reference: string
          external_status: string
          id: string
          merchant_order_id: string
          payment_mepa_id: string
          payment_method: Database["public"]["Enums"]["payment_payment_method_enum"]
          payment_status: Database["public"]["Enums"]["payment_payment_status_enum"]
          status_detail: string
          updated_at: string
          userId: string | null
        }
        Insert: {
          amount: number
          bookingId?: string | null
          collection_id: string
          collection_status: string
          created_at?: string
          external_reference: string
          external_status: string
          id?: string
          merchant_order_id: string
          payment_mepa_id: string
          payment_method?: Database["public"]["Enums"]["payment_payment_method_enum"]
          payment_status?: Database["public"]["Enums"]["payment_payment_status_enum"]
          status_detail: string
          updated_at?: string
          userId?: string | null
        }
        Update: {
          amount?: number
          bookingId?: string | null
          collection_id?: string
          collection_status?: string
          created_at?: string
          external_reference?: string
          external_status?: string
          id?: string
          merchant_order_id?: string
          payment_mepa_id?: string
          payment_method?: Database["public"]["Enums"]["payment_payment_method_enum"]
          payment_status?: Database["public"]["Enums"]["payment_payment_status_enum"]
          status_detail?: string
          updated_at?: string
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "FK_5738278c92c15e1ec9d27e3a098"
            columns: ["bookingId"]
            isOneToOne: true
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_b046318e0b341a7f72110b75857"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      tables: {
        Row: {
          created_at: string
          id: string
          table_capacity: number
          table_number: number
          table_status: Database["public"]["Enums"]["tables_table_status_enum"]
          table_type: Database["public"]["Enums"]["tables_table_type_enum"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          table_capacity: number
          table_number: number
          table_status?: Database["public"]["Enums"]["tables_table_status_enum"]
          table_type?: Database["public"]["Enums"]["tables_table_type_enum"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          table_capacity?: number
          table_number?: number
          table_status?: Database["public"]["Enums"]["tables_table_status_enum"]
          table_type?: Database["public"]["Enums"]["tables_table_type_enum"]
          updated_at?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar_url: string
          created_at: string
          email: string
          full_name: string
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url: string
          created_at?: string
          email: string
          full_name: string
          id?: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      bookings_booking_status_enum: "PENDING" | "APPROVED" | "CANCELLED"
      payment_payment_method_enum: "card" | "merpago"
      payment_payment_status_enum: "PENDING" | "APPROVED" | "CANCELLED"
      tables_table_status_enum: "BOOKED" | "AVAILABLE"
      tables_table_type_enum: "Window" | "Hall"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
