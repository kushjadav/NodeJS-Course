function zipZap(str){
  let temp = '';
    for(i=0;i<str.length;i++)
    {
        if(str[i]=='z' && str[i+2]=='p')
        {
            temp += str[i]+str[i+2];
            i=i+2;
        }
        else
        {
            temp += str[i];
        }
    }
    return temp;
}

}