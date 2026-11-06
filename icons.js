// أيقونات المواد — بتتختار أوتوماتيك من اسم المادة
(function(){
  const S=(p)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const I={
    tooth:S('<path d="M7.5 3C5 3 3.5 5 3.5 7.5c0 2.2 1 3.4 1.6 5.4.7 2.3.8 7.6 2.6 7.6 1.7 0 1.6-4.3 3.1-4.3h2.4c1.5 0 1.4 4.3 3.1 4.3 1.8 0 1.9-5.3 2.6-7.6.6-2 1.6-3.2 1.6-5.4C20.5 5 19 3 16.5 3c-1.8 0-2.8 1-4.5 1S9.3 3 7.5 3z"/><path d="M7 6.5c-.9.3-1.4 1-1.4 2"/>'),
    microscope:S('<path d="M6 21h12"/><path d="M8 18h7"/><path d="M14 18a5 5 0 0 0 1.5-9.7"/><path d="M9.5 3.5l3 1.7-3.2 5.6-3-1.7z"/><path d="M8.2 10.5 7 12.6"/><circle cx="10.5" cy="14.5" r="1.3"/>'),
    heart:S('<path d="M20.4 12.6 12 21l-8.4-8.4A5 5 0 0 1 12 6.1a5 5 0 0 1 8.4 6.5z"/><path d="M3.5 12.5h4l1.5-3 2.5 6 1.8-3.5h7.2"/>'),
    flask:S('<path d="M9 3h6"/><path d="M10 3v6.2L4.6 18a2 2 0 0 0 1.7 3h11.4a2 2 0 0 0 1.7-3L14 9.2V3"/><path d="M7.5 15h9"/><circle cx="10.5" cy="18" r=".6"/><circle cx="13.5" cy="17" r=".6"/>'),
    pill:S('<rect x="2.8" y="8.2" width="18.4" height="7.6" rx="3.8" transform="rotate(-45 12 12)"/><path d="m9.3 9.3 5.4 5.4"/>'),
    bacteria:S('<rect x="5" y="7.5" width="14" height="9" rx="4.5"/><circle cx="9.5" cy="11" r=".7"/><circle cx="14" cy="13" r=".7"/><circle cx="12" cy="10.5" r=".5"/><path d="M5 12H2.5M21.5 12H19M8 7.5 6.5 5M16 7.5 17.5 5M8 16.5 6.5 19M16 16.5 17.5 19"/>'),
    virus:S('<circle cx="12" cy="12" r="5"/><path d="M12 7V3.5M12 20.5V17M7 12H3.5M20.5 12H17M8.5 8.5 6 6M18 18l-2.5-2.5M8.5 15.5 6 18M18 6l-2.5 2.5"/><circle cx="12" cy="3" r=".8"/><circle cx="12" cy="21" r=".8"/><circle cx="3" cy="12" r=".8"/><circle cx="21" cy="12" r=".8"/><circle cx="10.5" cy="11" r=".7"/><circle cx="13.5" cy="13" r=".7"/>'),
    bone:S('<path d="M17 10c.7-.7 2.6-.4 3.4-1.2a2.3 2.3 0 0 0-3.2-3.2c.6-1.1.3-2.5-.8-3a2.3 2.3 0 0 0-3 1.2c-.6 1.1.2 2.4-.6 3.2L7 12.8c-.8.8-2.1 0-3.2.6a2.3 2.3 0 0 0-1.2 3c.5 1.1 1.9 1.4 3 .8a2.3 2.3 0 0 0 3.2 3.2c.8-.8.5-2.7 1.2-3.4z"/>'),
    dna:S('<path d="M7 3c0 6 10 6 10 12s-10 6-10 6"/><path d="M17 3c0 6-10 6-10 12 0 3 2.5 4.5 5 5.4"/><path d="M8.5 6h7M7.6 9.5h8.8M7.6 14.5h8.8M8.5 18h7"/>'),
    brain:S('<path d="M12 5a3 3 0 0 0-5.6-1.5A3 3 0 0 0 3.6 8 3.5 3.5 0 0 0 4 14a3.5 3.5 0 0 0 4.5 5A3 3 0 0 0 12 19z"/><path d="M12 5a3 3 0 0 1 5.6-1.5A3 3 0 0 1 20.4 8 3.5 3.5 0 0 1 20 14a3.5 3.5 0 0 1-4.5 5A3 3 0 0 1 12 19z"/><path d="M12 5v14M8 9.5c1 0 2 .7 2 2M16 9.5c-1 0-2 .7-2 2"/>'),
    eye:S('<path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
    atom:S('<circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)"/>'),
    implant:S('<path d="M7 3.5c0-.8 1-1.5 2.5-1.5 1 0 1.6.5 2.5.5s1.5-.5 2.5-.5C16 2 17 2.7 17 3.5c0 2-1 3-1.5 4.5h-7C8 6.5 7 5.5 7 3.5z"/><path d="M8.5 8h7"/><path d="M9.5 10.5h5M9.8 13h4.4M10.2 15.5h3.6M10.6 18h2.8"/><path d="M9.3 10.5 12 22l2.7-11.5"/>'),
    book:S('<path d="M4 19.5V5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2z"/><path d="M4 19.5A2 2 0 0 0 6 21.5h13"/><path d="M9 7h6M9 10.5h5"/>')
  };
  const K=[
    ['implant',['material','implant','بيوماتيريال','مواد','زراع']],
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
