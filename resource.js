import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://ugdxyltghpksaofeuxjy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnZHh5bHRnaHBrc2FvZmV1eGp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMTgyNjAsImV4cCI6MjA1NzY5NDI2MH0.-hXz7pfIE2KLVsxIo6kbBeLcJqaXBPbcw7yfO1Iwp2o')



let { data: VODS, error } = await supabase
.from('VODS')
.select('*')

for (x in VODS){
    console.log(x)
}

const UNAVAILABLE_VOD = "There is no available VOD with these search filters."