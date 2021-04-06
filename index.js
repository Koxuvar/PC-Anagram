const NO_OF_CHARS = 128

let isAnagram = (s1, s2) =>
{
    const arS1 = s1.toLowerCase();
    const arS2 = s2.toLowerCase();
    const intMain = new Array(NO_OF_CHARS).fill(0);
    let i;

    for(i = 0; arS1[i] && arS2[i]; i++)
    {
        intMain[arS1.charCodeAt(i)]++;
        intMain[arS2.charCodeAt(i)]--;
    }
    
    if(arS1[i] || arS2[i])
    {
        return false;
    }

    for(i=0; i < NO_OF_CHARS; i++)
    {
        if(intMain[i])
        {
            return false;
        }
    }

    return true;
}


console.log(isAnagram("apple", "elppa"));
console.log(isAnagram("hot water", "worth tea"));
console.log(isAnagram("Tinder", "Bumble"));