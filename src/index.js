// Returns true freq% of the time
const r = (freq) => {
    return Math.random() < freq;
};

const makeMore = (ch, freq) => {
    if(r(freq)) return ch + makeMore(ch, freq);
    return '';
};

const makePhrase = () => {
    let phrase = '';

    // 90% chance of oh
    if(r(0.9)) {
        phrase += 'o' + makeMore('o', 0.6);
        phrase += 'h' + makeMore('h', 0.6);
    }

    // 90% chance of hell yeah
    if(r(0.9)) {
        phrase += ' hell y' +
            makeMore('y', 0.3) +
            makeMore('e', 0.8) +
            makeMore('a', 0.8) +
            makeMore('h', 0.7);
    }

    // 60% chance of baby
    if(r(0.6)) {
        phrase += ' baby' + makeMore('y', 0.3);
    }

    // 60/40 chance of !/.
    if(r(0.6)) {
        phrase += '!' + makeMore('!', 0.925);
    }
    else {
        phrase += '.' + makeMore('.', 0.8);
    }

    // 50% chance of caps
    if(r(0.5)) phrase = phrase.toUpperCase();

    // 60% chance of another phrase
    if(r(0.6)) return phrase + ' ' + makePhrase();

    return phrase;
};

module.exports = makePhrase;
