(function(){
  var toggle = document.getElementById('stage-toggle');
  if(!toggle) return;
  var KEY = 'lac-hide-stage';
  var saved = localStorage.getItem(KEY) === '1';
  if(saved){ document.body.classList.add('hide-stage'); toggle.checked = true; }
  toggle.addEventListener('change', function(){
    if(toggle.checked){ document.body.classList.add('hide-stage'); localStorage.setItem(KEY,'1'); }
    else{ document.body.classList.remove('hide-stage'); localStorage.removeItem(KEY); }
  });
})();
