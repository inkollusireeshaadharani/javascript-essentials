//Question 2
//palindrome words in a sentence


var str="madam aziza bought new racecar",t,b,word="",i,temp="";
var s=str+" ";
for(t=0;t<s.length;t++)
{
    if(s[t]!=" "){
        word=word+s[t];
        //console.log(word);
    }
    else{
        for(b=0;b<word.length;b++){ 
            temp=word[b]+temp;
        }
        if(word==temp){
            console.log(word);
        }
        word="";
        temp="";
    }
}

