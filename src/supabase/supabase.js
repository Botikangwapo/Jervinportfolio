import { createClient } from "@supabase/supabase-js";

const supabasekey = 'https://nfqfnhptcgofsaohyibd.supabase.co'
const supabaseanon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mcWZuaHB0Y2dvZnNhb2h5aWJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxNzk3MTcsImV4cCI6MjA5Nzc1NTcxN30.FZYN7zQRJnY1IjOU21B5dtjpTKHrzUoCFj7onYNSLkg'

export const supabase = createClient(supabasekey, supabaseanon)