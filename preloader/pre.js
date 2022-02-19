var quotes = ["Courage is fire, and bullying is smoke\ t~Benjamin Disraeli ",
    "Never be bullied into silence.Never allow yourself to be made a victim.Accept no one\ t’ s definition of your life;define yourself ~Harvey Fierstein",
    "Cyber bullies can hide behind a mask of anonymity online, and do not need direct physical access to their victims to do unimaginable harm ~Anna Maria Chavez",
    "When people hurt you over and over, think of them like sandpaper.They may scratch and hurt you a bit, but in the end, you end up polished and they end up useless ~Chris Colfer ",
    "Life is a ﬁght, but not everyone\t’ s a ﬁghter.Otherwise, bullies would be an endangered species ~Andrew Vachs",
    "Unless and until our society recognizes cyber bullying for what it is, the suffering of thousands of silent victims willcontinue ~Anna Maria Chavez ",
    "Never be bullied into silence.Never allow yourself to be made a victim ~Tim Field",
    "If you are neutral in situations of injustice, you have chosen the side of the oppressor.If an elephant has its foot on the tail of a mouse and you say that you are neutral, the mouse will not appreciate your neutrality ~Desmond Tutu",
    "Children should be able to live a life free from bullying and harassment and it is time that we all took a stand against this ~Katherine Jenkins "
];


var randomnumber = Math.floor(Math.random() * (quotes.length));
document.getElementById("displayq").innerHTML = quotes[randomnumber];