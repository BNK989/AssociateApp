import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'
config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
})

supabase.auth.onAuthStateChange((event, session) => {
    if (session) {
      // Save the session in local storage or a cookie
      localStorage.setItem('supabase.auth.token', session.access_token)
    } else {
      // Remove the session from local storage or a cookie
      localStorage.removeItem('supabase.auth.token')
    }
  })
