/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings( value1, value2 ) {
  //throw new Error('Not implemented');
  return `${value1}${value2}`;
}


/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength( value ) {
//throw new Error('Not implemented');
  return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate( firstName, lastName ) {
//throw new Error('Not implemented');
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate( value ) {
//throw new Error('Not implemented');
  return value.slice( 7 , -1 );
}


/** 
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar( value ) {
//throw new Error('Not implemented');
  return value[ 0 ];
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces( value ) {
//throw new Error('Not implemented');
  return value.trim();
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString( value, count ) {
//throw new Error('Not implemented');
var str = "" ;
for ( let i = 0 ; i < count ; i++ ) {
  str += value ;
};
return str ;
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences( str, value ) {
//throw new Error('Not implemented');
return str.replace( value , '' ).replace( "  " , " " );
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag( str ) {
//throw new Error('Not implemented');
let str1 = str.replace( "<" , "" );
return str1.replace( ">" , "" );
}


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase( str ) {
//throw new Error('Not implemented');
return str.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails( str ) {
//throw new Error('Not implemented');
return str.split( ";" );
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString( width, height ) {
throw new Error('Not implemented');
  
}


/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13( str ) {
 // throw new Error('Not implemented');
let abc = {
  "a": "n",
  "b": "o",
  "c": "p",
  "d": "q",
  "e": "r",
  "f": "s",
  "g": "t",
  "h": "u",
  "i": "v",
  "j": "w",
  "k": "x",
  "l": "y",
  "m": "z",
  "n": "a",
  "o": "b",
  "p": "c",
  "q": "d",
  "r": "e",
  "s": "f",
  "t": "g",
  "u": "h",
  "v": "i",
  "w": "j",
  "x": "k",
  "y": "l",
  "z": "m"
};

let str2 = str.toLowerCase();
let len = str2.length;

let su = "";
let str1 = [];

for ( let i = 0 ; i < len ; i++ ) {
  if( str2[ i ] === "a" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.a.toUpperCase();
    }else{
      str1[ i ] = abc.a;
    };
  } else if( str2[ i ] === "b" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.b.toUpperCase();
    }else{
      str1[ i ] = abc.b;
    };
  } else if( str2[ i ] === "c" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.c.toUpperCase();
    }else{
      str1[ i ] = abc.c;
    };
  } else if( str2[ i ] === "d" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.d.toUpperCase();
    }else{
      str1[ i ] = abc.d;
    };
  } else if( str2[ i ] === "e" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.e.toUpperCase();
    }else{
      str1[ i ] = abc.e;
    };  
  } else if( str2[ i ] === "f" ) {
      if( str[ i ] ===  str[ i ].toUpperCase() ) {
        str1[ i ] = abc.f.toUpperCase();
      }else{
        str1[ i ] = abc.f;
      };  
  } else if( str2[ i ] === "g" ) {
        if( str[ i ] ===  str[ i ].toUpperCase() ) {
          str1[ i ] = abc.g.toUpperCase();
        }else{
          str1[ i ] = abc.g;
        };  
  } else if( str2[ i ] === "h" ) {
        if( str[ i ] ===  str[ i ].toUpperCase() ) {
          str1[ i ] = abc.h.toUpperCase();
        }else{
          str1[ i ] = abc.h;
        };  
  } else if( str2[ i ] === "i" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.i.toUpperCase();
    }else{
      str1[ i ] = abc.i;
    };  
  } else if( str2[ i ] === "j" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.j.toUpperCase();
    }else{
      str1[ i ] = abc.j;
    };
  } else if( str2[ i ] === "k" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.k.toUpperCase();
    }else{
      str1[ i ] = abc.k;
    };
  } else if( str2[ i ] === "m" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.m.toUpperCase();
    }else{
      str1[ i ] = abc.m;
    };  
  } else if( str2[ i ] === "l" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.l.toUpperCase();
    }else{
      str1[ i ] = abc.l;
    };
  } else if( str2[ i ] === "n" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.n.toUpperCase();
    }else{
      str1[ i ] = abc.n;
    };
  } else if( str2[ i ] === "o" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.o.toUpperCase();
    }else{
      str1[ i ] = abc.o;
    };
  } else if( str2[ i ] === "p" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.p.toUpperCase();
    }else{
      str1[ i ] = abc.p;
    };
  } else if( str2[ i ] === "q" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.q.toUpperCase();
    }else{
      str1[ i ] = abc.q;
    };
  } else if( str2[ i ] === "r" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.r.toUpperCase();
    }else{
      str1[ i ] = abc.r;
    };
  } else if( str2[ i ] === "s" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.s.toUpperCase();
    }else{
      str1[ i ] = abc.s;
    };
  } else if( str2[ i ] === "t" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.t.toUpperCase();
    }else{
      str1[ i ] = abc.t;
    };
  } else if( str2[ i ] === "u" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.u.toUpperCase();
    }else{
      str1[ i ] = abc.u;
    };
  } else if( str2[ i ] === "v" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.v.toUpperCase();
    }else{
      str1[ i ] = abc.v;
    };
  } else if( str2[ i ] === "w" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.w.toUpperCase();
    }else{
      str1[ i ] = abc.w;
    };
  } else if( str2[ i ] === "x" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.x.toUpperCase();
    }else{
      str1[ i ] = abc.x;
    };
  } else if( str2[ i ] === "y" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.y.toUpperCase();
    }else{
      str1[ i ] = abc.y;
    };
  } else if( str2[ i ] === "z" ) {
    if( str[ i ] ===  str[ i ].toUpperCase() ) {
      str1[ i ] = abc.z.toUpperCase();
    }else{
      str1[ i ] = abc.z;
    };
  }else{
str1[ i ] = str2[ i ];
};
su = su + str1[ i ];
};


// if( str[ 0 ] ===  str[ 0 ].toUpperCase() ) {
//   return su[ 0 ].toUpperCase() + su.slice( 1 );
// }else{
//   return su;
// };

return su;
};

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(/* value */) {
  throw new Error('Not implemented');
}


/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(/* value */) {
  throw new Error('Not implemented');
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};