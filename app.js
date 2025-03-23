import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://ugdxyltghpksaofeuxjy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnZHh5bHRnaHBrc2FvZmV1eGp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMTgyNjAsImV4cCI6MjA1NzY5NDI2MH0.-hXz7pfIE2KLVsxIo6kbBeLcJqaXBPbcw7yfO1Iwp2o')

let { data: VODS, error } = await supabase
.from('VODS')
.select('*')

for(const vod of VODS){
    const tr = document.createElement('tr');
    
    const tableElement = document.getElementById("pro-vod-table");
    tableElement.appendChild(tr)

    const headers = Object.keys(vod)
    for (let i = 0; i < headers.length; i++){
        const td = document.createElement('td');
        tr.appendChild(td);
        td.appendChild(document.createTextNode(vod[headers[i]]));
    }
}

const copyMainCrosshairButton = document.querySelector('#copyMain');
const copyAltCrosshairButton = document.querySelector('#copyAlt');
const copyTempCrosshairButton = document.querySelector('#copyTemp');

copyMainCrosshairButton.addEventListener('click', function(){
    const crosshair = '0;P;c;5;o;1;d;1;z;3;f;0;0b;0;1b;0';

    navigator.clipboard.writeText(crosshair);
})

copyAltCrosshairButton.addEventListener('click', function(){
    const crosshair = '0;p;0;s;1;P;c;5;u;000000FF;o;1;f;0;0t;1;0l;2;0o;2;0a;1;0f;0;1b;0;A;h;0;0l;4;0o;0;0a;1;0f;0;1b;0;S;c;5;t;000000FF;s;0.322;o;1';

    navigator.clipboard.writeText(crosshair);
})

copyTempCrosshairButton.addEventListener('click', function(){
    const crosshair = '0;s;1;P;c;5;h;0;m;1;0l;4;0o;2;0a;1;0f;0;1b;0;S;c;4;o;1';

    navigator.clipboard.writeText(crosshair);
})