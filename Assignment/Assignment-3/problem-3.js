function countHashtags(caption) {
    // Write your code here...

    if(typeof caption !==  "string"){
        return  "Invalid";
    }


    const words = caption.split(" ");


    const hashtags = words.filter((word)  => word.startsWith("#"));

    const hashtagCount = hashtags.length;


    let longestTag = "";

    for(let tag of hashtags){
        const tagText = tag.slice(1);

        if(tagText.length > longestTag.length ){
            longestTag = tagText;
        }
    }
    






    return { hashtagCount, longestTag};
}

let tags = 

console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"));