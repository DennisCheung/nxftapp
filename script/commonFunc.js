function formatPhone(phone){
  var phone=phone||"";
  if(!phone)return;
  phone=phone.toString();
  var start=phone.substr(0,4);
  var end=phone.substr(-4);
  return start+"****"+end;
}
