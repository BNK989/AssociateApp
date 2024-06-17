// middleware/auth.js
// @ts-ignore
import { supabase } from '~/plugins/supabase'

export default async function ({ redirect }) {
  const user = supabase.auth.user()
  if (!user) {
    return redirect('/login')
  }
}
