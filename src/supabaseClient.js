import { createClient } from "@supabase/supabase-js";


const supabaseUrl = 'https://pzfrlqhakylyktlwannc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6ZnJscWhha3lseWt0bHdhbm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4NzU0OTksImV4cCI6MjA3MzQ1MTQ5OX0.SxaqY645HpJYmA-Biy9vvKpYI5afA7VpbG1gXpu8MOs';
export const supabase = createClient(supabaseUrl, supabaseKey);
