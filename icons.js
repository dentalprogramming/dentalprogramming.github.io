// أيقونات المواد — بتتختار أوتوماتيك من اسم المادة
(function(){
  const S=(p)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const I={
    tooth:S('<path transform="translate(3.33 1.27) scale(0.27)" d="M15 31C10.5 25 9.5 17 11.5 11.5C13.5 6 19.5 4 23.5 6C27 7.8 29.5 8.5 32 7.6C34.5 8.5 37 7.8 40.5 6C44.5 4 50.5 6 52.5 11.5C54.5 17 53.5 25 49 31C48 35.5 47.8 40 47.2 45C46.2 56 44.5 67 41.5 72.5C40 75.5 37.2 75 36.8 71.5C36.2 64 35.6 55 33.6 50.6C32.8 49.2 31.2 49.2 30.4 50.6C28.4 55 27.8 64 27.2 71.5C26.8 75 24 75.5 22.5 72.5C19.5 67 17.8 56 16.8 45C16.2 40 16 35.5 15 31Z" stroke-width="6.30" />'),
    teeth2:S('<path transform="translate(0.91 1.62) scale(0.22)" d="M15 31C10.5 25 9.5 17 11.5 11.5C13.5 6 19.5 4 23.5 6C27 7.8 29.5 8.5 32 7.6C34.5 8.5 37 7.8 40.5 6C44.5 4 50.5 6 52.5 11.5C54.5 17 53.5 25 49 31C48 35.5 47.8 40 47.2 45C46.2 56 44.5 67 41.5 72.5C40 75.5 37.2 75 36.8 71.5C36.2 64 35.6 55 33.6 50.6C32.8 49.2 31.2 49.2 30.4 50.6C28.4 55 27.8 64 27.2 71.5C26.8 75 24 75.5 22.5 72.5C19.5 67 17.8 56 16.8 45C16.2 40 16 35.5 15 31Z" stroke-width="7.73"/><circle cx="16" cy="15" r="4.2"/><path d="m19.2 18.2 3 3"/>'),
    biomat:S('<path transform="translate(3.36 1.22) scale(0.27)" d="M15 31C10.5 25 9.5 17 11.5 11.5C13.5 6 19.5 4 23.5 6C27 7.8 29.5 8.5 32 7.6C34.5 8.5 37 7.8 40.5 6C44.5 4 50.5 6 52.5 11.5C54.5 17 53.5 25 49 31C48 35.5 47.8 40 47.2 45C46.2 56 44.5 67 41.5 72.5C40 75.5 37.2 75 36.8 71.5C36.2 64 35.6 55 33.6 50.6C32.8 49.2 31.2 49.2 30.4 50.6C28.4 55 27.8 64 27.2 71.5C26.8 75 24 75.5 22.5 72.5C19.5 67 17.8 56 16.8 45C16.2 40 16 35.5 15 31Z" stroke-width="6.30"/><rect x="9.6" y="5.6" width="4.8" height="3.8" rx=".8" fill="currentColor" stroke="none"/><path d="M4.2 7.5h15.6" stroke-width="1.3"/>'),
    microscope:S('<path d="M6 21h12"/><path d="M8 18h7"/><path d="M14 18a5 5 0 0 0 1.5-9.7"/><path d="M9.5 3.5l3 1.7-3.2 5.6-3-1.7z"/><path d="M8.2 10.5 7 12.6"/><circle cx="10.5" cy="14.5" r="1.3"/>'),
    heart:S('<path d="M20.4 12.6 12 21l-8.4-8.4A5 5 0 0 1 12 6.1a5 5 0 0 1 8.4 6.5z"/><path d="M3.5 12.5h4l1.5-3 2.5 6 1.8-3.5h7.2"/>'),
    flask:S('<path d="M9 3h6"/><path d="M10 3v6.2L4.6 18a2 2 0 0 0 1.7 3h11.4a2 2 0 0 0 1.7-3L14 9.2V3"/><path d="M7.5 15h9"/><circle cx="10.5" cy="18" r=".6"/><circle cx="13.5" cy="17" r=".6"/>'),
    pill:S('<rect x="2.8" y="8.2" width="18.4" height="7.6" rx="3.8" transform="rotate(-45 12 12)"/><path d="m9.3 9.3 5.4 5.4"/>'),
    bacteria:S('<rect x="5" y="7.5" width="14" height="9" rx="4.5"/><circle cx="9.5" cy="11" r=".7"/><circle cx="14" cy="13" r=".7"/><circle cx="12" cy="10.5" r=".5"/><path d="M5 12H2.5M21.5 12H19M8 7.5 6.5 5M16 7.5 17.5 5M8 16.5 6.5 19M16 16.5 17.5 19"/>'),
    virus:S('<circle cx="12" cy="12" r="5"/><path d="M12 7V3.5M12 20.5V17M7 12H3.5M20.5 12H17M8.5 8.5 6 6M18 18l-2.5-2.5M8.5 15.5 6 18M18 6l-2.5 2.5"/><circle cx="12" cy="3" r=".8"/><circle cx="12" cy="21" r=".8"/><circle cx="3" cy="12" r=".8"/><circle cx="21" cy="12" r=".8"/><circle cx="10.5" cy="11" r=".7"/><circle cx="13.5" cy="13" r=".7"/>'),
    bone:S('<g stroke-width="1.3"><ellipse cx="12" cy="3.4" rx="1.9" ry="2.2"/><path d="M11 5.5v1.3M13 5.5v1.3"/><path d="M11 6.8C8.8 7.2 6.1 7.5 5.1 8.9 4.5 9.9 4.4 12.4 4.7 14.6h1.9l.3-3.2c.6 2.1 1 4.1.9 5.6-.2 1.6-.7 3-.5 5h9.4c.2-2-.3-3.4-.5-5-.1-1.5.3-3.5.9-5.6l.3 3.2h1.9c.3-2.2.2-4.7-.4-5.7-1-1.4-3.7-1.7-5.9-2.1"/><g stroke-width=".8"><path d="M11.1 8.3C9.5 8.6 8.4 9.9 8.2 12c-.1 1 .5 1.4 1.3 1.2l1.6-.5z"/><path d="M13.4 8.4c1.4.4 2.3 1.6 2.4 3.6.1 1-.5 1.4-1.3 1.2"/><path d="M12 8.2v1.6M12.6 9.6c0-1.2 1-1.7 1.8-1.1"/><path d="M8.4 14.1c1.4-.3 3.2-.2 4 .2-.5 1.1-2.1 1.6-3.6 1.2-.6-.2-.7-.9-.4-1.4z"/><path d="M13.4 14.2c1.2-.4 2.3.2 2.2 1.2-.1 1.1-1.1 1.6-1.9 1.3-.5-.2-.5-.9 0-1.1"/><path d="M9.4 17.3c.9-.5 1.9.5 2.8 0s1.9.5 2.8 0M9.3 18.7c.9-.5 1.9.5 2.8 0s1.9.5 2.8 0"/><circle cx="12" cy="20.5" r=".75"/></g><path d="M11.4 10.1c-.8.6-.8 1.8 0 2.6.8.8 2 1 2.6.4.7-.7.6-2.1-.1-2.8-.7-.7-1.8-.8-2.5-.2z" fill="currentColor" stroke="none"/></g>'),
    dna:S('<path d="M7 3c0 6 10 6 10 12s-10 6-10 6"/><path d="M17 3c0 6-10 6-10 12 0 3 2.5 4.5 5 5.4"/><path d="M8.5 6h7M7.6 9.5h8.8M7.6 14.5h8.8M8.5 18h7"/>'),
    brain:S('<path d="M12 5a3 3 0 0 0-5.6-1.5A3 3 0 0 0 3.6 8 3.5 3.5 0 0 0 4 14a3.5 3.5 0 0 0 4.5 5A3 3 0 0 0 12 19z"/><path d="M12 5a3 3 0 0 1 5.6-1.5A3 3 0 0 1 20.4 8 3.5 3.5 0 0 1 20 14a3.5 3.5 0 0 1-4.5 5A3 3 0 0 1 12 19z"/><path d="M12 5v14M8 9.5c1 0 2 .7 2 2M16 9.5c-1 0-2 .7-2 2"/>'),
    eye:S('<path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
    atom:S('<circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)"/>'),
    implant:S('<path d="M7 3.5c0-.8 1-1.5 2.5-1.5 1 0 1.6.5 2.5.5s1.5-.5 2.5-.5C16 2 17 2.7 17 3.5c0 2-1 3-1.5 4.5h-7C8 6.5 7 5.5 7 3.5z"/><path d="M8.5 8h7"/><path d="M9.5 10.5h5M9.8 13h4.4M10.2 15.5h3.6M10.6 18h2.8"/><path d="M9.3 10.5 12 22l2.7-11.5"/>'),
    book:S('<path d="M4 19.5V5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2z"/><path d="M4 19.5A2 2 0 0 0 6 21.5h13"/><path d="M9 7h6M9 10.5h5"/>')
  };
  const K=[
    ['biomat',['material','بيوماتيريال','مواد','حشو']],
    ['teeth2',['dental anat','tooth anat','morpholog','تشريح الأسنان','تشريح الاسنان']],
    ['implant',['implant','زراع']],
    ['atom',['physics','فيزياء','فيزيا']],
    ['tooth',['dent','tooth','teeth','oral','ortho','endo','perio','prostho','operative','سنان','أسنان','اسنان','سنه','سنة','فم']],
    ['microscope',['histo','cyto','هستو','هيستو','أنسجة','انسجة','نسج']],
    ['heart',['physio','cardio','فسيو','فيسيو','وظائف','قلب']],
    ['flask',['chem','كيمي','بيوكيم']],
    ['pill',['pharma','drug','فارما','أدوية','ادوية','دواء']],
    ['bacteria',['microbio','micro','ميكرو','بكتير']],
    ['virus',['patho','immun','باثو','امراض','أمراض','مناعة','فيروس']],
    ['dna',['genet','bio','molecular','جينات','وراثة','بيولوجي','احياء','أحياء']],
    ['brain',['neuro','psych','نيورو','أعصاب','اعصاب','نفس']],
    ['bone',['anat','bone','skull','اناتومي','أناتومي','تشريح','عظام']],
    ['eye',['ophth','عيون']],
  ];
  window.subjectIcon=function(name,fallback){
    const n=String(name||'').toLowerCase();
    for(const [k,words] of K){ if(words.some(w=>n.includes(w))) return I[k]; }
    if(I[fallback]) return I[fallback];
    return fallback ? `<span style="font-size:.9em">${String(fallback).replace(/[<>&]/g,'')}</span>` : I.book;
  };
})();

// أيقونات الواجهة
(function(){
  const S=(p)=>`<svg class="uic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const U={
    book:S('<path d="M4 19.5V5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2z"/><path d="M4 19.5A2 2 0 0 0 6 21.5h13"/><path d="M9 7h6M9 10.5h5"/>'),
    teach:S('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M7 20h10M12 16v4"/><path d="M7 9h6M7 12h4"/>'),
    tf:S('<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>'),
    mcq:S('<circle cx="6" cy="7" r="2"/><circle cx="6" cy="17" r="2"/><path d="M11 7h9M11 17h9"/><circle cx="6" cy="7" r=".6" fill="currentColor"/>'),
    pen:S('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>'),
    puzzle:S('<path d="M10 3h4v3a2 2 0 1 0 4 0V3h3v7h-3a2 2 0 1 0 0 4h3v7h-7v-3a2 2 0 1 0-4 0v3H3v-7h3a2 2 0 1 0 0-4H3V3z"/>'),
    gift:S('<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13"/><path d="M12 8c-1.5-3-5-3.5-5-1.2C7 8 9 8 12 8zM12 8c1.5-3 5-3.5 5-1.2C17 8 15 8 12 8z"/>'),
    cart:S('<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2.5 3h3l2.6 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21.5 8H6.5"/>'),
    cash:S('<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9.5v5M18 9.5v5"/>'),
    camera:S('<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/>'),
    ticket:S('<path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4z"/><path d="M14 6v12" stroke-dasharray="2 2"/>'),
    lock:S('<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/><circle cx="12" cy="15.5" r="1.3"/>'),
    card:S('<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 10h19M6 15h4"/>'),
    help:S('<circle cx="12" cy="12" r="9"/><path d="M9.5 9.3a2.6 2.6 0 0 1 5 .9c0 1.7-2.5 2.2-2.5 3.8"/><circle cx="12" cy="17.2" r=".5" fill="currentColor"/>'),
    phone:S('<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>'),
    bank:S('<path d="M3 10 12 4l9 6"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20.5h18"/>'),
    chat:S('<path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20l1.2-4.1A8.5 8.5 0 1 1 20.5 11.5z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" stroke-width="2.6"/>'),
    check:S('<path d="m5 12.5 4.5 4.5L19 7.5"/>'),
    target:S('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/>'),
    star:S('<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>'),
    eye:S('<path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
    play:S('<circle cx="12" cy="12" r="9"/><path d="m10 8.5 5 3.5-5 3.5z"/>'),
    clock:S('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    spark:S('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>'),
    users:S('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14a6.5 6.5 0 0 1 3.5 6"/>'),
    file:S('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>'),
    home:S('<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/>')
  };
  window.UI=n=>U[n]||'';
  window.fillIcons=root=>(root||document).querySelectorAll('i[data-i]').forEach(e=>{ if(!e.dataset.done){ e.innerHTML=U[e.dataset.i]||''; e.dataset.done=1; }});
})();