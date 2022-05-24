
function upperCaseTest(str) {
  regexp=/[A-Z]/;
  if (regexp.test(str)) {
    console.log("true");
  } else {
    console.log("false");
  }
}
upperCaseTest('abcd');
upperCaseTest('Abcd');

function vowel_count(str) {

  return str.match(/[aeiou]/gi).length;

}

console.log(vowel_count('The quick brown fox jumps over the lazy dog'));

function is_alphaNumeric(str)
{
 regexp = /^[A-Za-z0-9]+$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_alphaNumeric("37828sad"));

console.log(is_alphaNumeric("3243#$sew"));
function is_hexcolor(str)
{
 regexp = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_hexcolor("#444"));

console.log(is_hexcolor("#3333"));
