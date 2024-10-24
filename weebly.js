document.getElementsByTagName('body')[0].innerHTML = '<header class="p-1 bg-success text-center"> <div class="text-white" id="title"/> <p class="container text-white">Our URL shortener makes it easy to create custom, branded links that are perfect for sharing on social media, in emails, and more. Track clicks, analyze your audience, and get valuable insights into your content&#39;s performance. Try it now for free!</p> <nav aria-label="Page navigation"> <ul class="pagination justify-content-center" id="pagination"> </ul> </nav> </header> <div class="container" id="doc"> </div> <footer class="text-center mt-5"> </footer>';
document.getElementsByTagName('body')[0].classList.add("bg-dark text-light");
names = capitalizeFirstLetter(window.location.hostname.split('.')[0]);
if( typeof window.location.href.split('?')[1] !== 'undefined' && window.location.href.split('?')[1] !== '' && window.location.href.split('?')[1].includes('page=') === false ){
_0x525071 = window.location.search.split('?')
if (_0x525071[1].includes('=')) {
new_target = _0x525071[1].replace('=', '+')
} else {
if (_0x525071[1].includes('+')) {
new_target = _0x525071[1].replace('+', '-')
} else {
if (_0x525071[1].includes('-')) {
new_target = _0x525071[1].replace('-', '~')
} else {
if (_0x525071[1].includes('~')) {
new_target = _0x525071[1].replace('~', '_')
} else {
if (_0x525071[1].includes('_')) {
new_target = _0x525071[1].replace('_', '&')
} else {
if (_0x525071[1].includes('&')) {
new_target = _0x525071[1].replace('&', '/')
} else {
if (_0x525071[1].includes('/')) {
new_target = _0x525071[1].replace('/', '(')
} else {
if (_0x525071[1].includes('(')) {
new_target = _0x525071[1].replace('(', ')')
} else {
if (_0x525071[1].includes(')')) {
new_target = _0x525071[1].replace(')', ':')
} else {
if (_0x525071[1].includes(':')) {
new_target = _0x525071[1].replace(':', '.')
} else {
if (_0x525071[1].includes('.')) {
new_target = _0x525071[1].replace('.', '=')
} else {
console.log('apasih');
}
}
}
}
}
}
}
}
}
}
}
awd = 'aboqouju,acopioka,adohoefo,ahulaega,aliyauzi,amagooge,aneroope,arawauya,ariqiuba,arudueje,asibeexu,avocooli,awatuowo,awufuexo,axipeici,azugeebo,egageixu,egigaewi,elodoawu,esanaoxo,evovaodi,exijuiwu,exuroemu,eyotouxo,idocoaja,ifepooco,ihoneuji,initoege,inokeifo,iqawuipo,iqimoute,iwawaiwaa,obusoapi,odudiexa,ofodiafi,oguyiehu,olumiogu,omukousi,onifoeqo,opineupi,otebieqe,ozitieji,ozobuuwa,uciqaexu,ujiguacu,umuxoiro,uturieji,uyaqaipu,uyekeiqe,uzuhueqi'
news = domains(awd, _0x525071[1].replace(/[^a-z0-9]/g, ''));
    window.location.href = 'https://'+news+'/?'+new_target;
}else{

addMeta('robots', 'noindex, follow');
addLink('stylesheet', 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css');
if( getQueryParams('page') > 1 ){
    page = parseInt(getQueryParams('page'));
    addLink('canonical', 'https://'+window.location.hostname+'/?page='+page);

    document.title = names+" page "+page;
    document.getElementById('title').innerHTML += '<h1>'+names+" page "+page+'</h1>';
}else{
    page = 1;
    addLink('canonical', 'https://'+window.location.hostname);
    document.title = names;
    document.getElementById('title').innerHTML += '<h1>'+names+'</h1>';
}

const today = new Date();
newpage = '';

if( page < 2 ){
    newpage += '<li class="page-item disabled"><span class="page-link">Previous</span></li>';
}else{
    newpage += '<li class="page-item"><a class="page-link" href="/?page='+(page-1)+'">Previous</a></li>';
}

if( page < 5 ){
    for( i=1;i<8;i++ ){
        if( page == i ){
            newpage += '<li class="page-item active"><span class="page-link" aria-current="page">'+i+'</span></li>';
        }else{
            newpage += '<li class="page-item"><a class="page-link" href="/?page='+i+'">'+i+'</a></li>';
        }
    }
}else{
    for( i=(page-3);i<page;i++ ){
        if( page == i ){
            newpage += '<li class="page-item active"><span class="page-link" aria-current="page">'+i+'</span></li>';
        }else{
            newpage += '<li class="page-item"><a class="page-link" href="/?page='+i+'">'+i+'</a></li>';
        }
    }
    for( i=page;i<(page+4);i++ ){
        if( page == i ){
            newpage += '<li class="page-item active"><span class="page-link" aria-current="page">'+i+'</span></li>';
        }else{
            newpage += '<li class="page-item"><a class="page-link" href="/?page='+i+'">'+i+'</a></li>';
        }
    }
}
newpage += '<li class="page-item"><a class="page-link" href="/?page='+(page+1)+'">Next</a></li>';

document.getElementById('pagination').innerHTML += newpage;
document.getElementsByTagName('footer')[0].innerHTML += 'Copyright &copy; '+(today.getFullYear())+' <a href="/">'+names+'</a>';

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://raw.githubusercontent.com/hgrip/data/refs/heads/main/'+page+'.txt', true);

xhr.onload = function() {
  if (xhr.status === 200) {
    result = xhr.responseText;
    result = result.split("\n");

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-GB', options);

    content = '';
    premise = getprefix(window.location.hostname);
    result.forEach(function(n,i){
        n = parseInt(n);
        url = insertRandomCharacter(base62Encode(n,premise));
        y = base62Encode(n,premise);

        content += '<div class="card mt-4 bg-secondary"><div class="card-body"><h2><a class="text-white" rel="index,dofollow" href="https://'+window.location.hostname+'/?'+url+'" target="_blank">https://'+window.location.hostname+'/?'+url+'</a></h2><p class="text-white">'+formattedDate+'</p></div></div>';
    });
    document.getElementById('doc').innerHTML += content;
  } else {
    console.error('Request Failed.  Status:', xhr.status);
  }
};

xhr.onerror = function() {
  console.error('Error.');
};

xhr.send();

}
function base62Encode(num, characters) {
  let result = '';

  do {
    result = characters[num % 62] + result;
    num = Math.floor(num / 62);
  } while (num > 0);

  return result.split('').reverse().join('');
}
function getprefix(secret){
  const seed = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  secret = [...new Set(secret.replace(/\./g, ''))].join('');
  const secretSet = new Set(secret);
  const newSeed = [...new Set(seed.split('').filter(char => !secretSet.has(char)))].join('');

  return secret + newSeed;
}
function removeDuplicateWords(str) {
  const words = str.split('');
  const uniqueWords = [...new Set(words)];
  return uniqueWords.join('');
}
function insertRandomCharacter(string) {
  const characters = ['=', '+', '+', '+', '-', '~', '_', '&', '/', '(', ')', ':', '.'];
  const randomIndex = Math.floor(Math.random() * characters.length);
  const randomCharacter = characters[randomIndex];
  const randomPosition = Math.floor(Math.random() * (string.length + 1));
  const firstPart = string.slice(0, randomPosition);
  const secondPart = string.slice(randomPosition);

  return firstPart + randomCharacter + secondPart;
}
function base62Decode(_0x41c818, _0x268278) {
  _0x41c818 = _0x41c818.split('').reverse().join('')
  let _0x2d026a = 0,
    _0x3520d5 = 1
  for (let _0x2b3aba = _0x41c818.length - 1; _0x2b3aba >= 0; _0x2b3aba--) {
    const _0xf6696f = _0x268278.indexOf(_0x41c818[_0x2b3aba])
    if (_0xf6696f === -1) {
      throw new Error('Invalid character in encoded string')
    }
    _0x2d026a += _0xf6696f * _0x3520d5
    _0x3520d5 *= 62
  }
  return _0x2d026a
}
function getQueryParams(paramName) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(paramName);
}
function addLink(name, content) {
  const awa = document.createElement('link');
  awa.rel = name;
  awa.href = content;
  document.getElementsByTagName('head')[0].appendChild(awa);
}
function addMeta(name, content) {
  const meta = document.createElement('meta');
  meta.name = name;
  meta.content = content;
  document.getElementsByTagName('head')[0].appendChild(meta);
}
function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
function domains(_0x38e5a2, _0x2e2f6b) {
  let _0x36eca4 = _0x38e5a2.split(','),
    _0x1e74e5 = 0
  for (let _0x19231f = 0; _0x19231f < _0x2e2f6b.length; _0x19231f++) {
    _0x1e74e5 = 31 * _0x1e74e5 + _0x2e2f6b.charCodeAt(_0x19231f)
  }
  const _0x209867 = Math.abs(_0x1e74e5) % _0x36eca4.length
  return _0x36eca4[_0x209867] + '.github.io'
}
