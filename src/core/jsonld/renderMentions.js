import React from 'react';
import Mention from './mention.js';
import AbstractMention from './abstractMention.js';
import Image from './image.js';

/*

takes as input array of mention objects, converts them to the react code

each mention object contains

{
    before: "before text"
    after: "after text"
    link: { ... link object ...}
}

*/

// Paragraph with mappable mantioncs


export default function renderMentions(mentions,span) {

    return (<span>
        {
            mentions.map((mention) => {
                if (mention instanceof AbstractMention) {
                    return mention.render();
                } else {
                    return mention;
                }
            })
        }
         </span>);

  /*  var i = mentions.length - 1,
        mention = mentions[i],
        obj = mention.obj ? :null,
        After = mention.after;

    function before (str, i) {
        i--;
        mention = mentions[i];
        if (mention) {
            var after,obj;
            if (mention.obj) {
                obj = mention.obj.render();
                var linkText = (mention.obj.className === 'link') ? mention.obj.text : "";
                after = str.replace(mention.before + linkText,'');
            }

            return (
                <span>
                    {before(mention.before, i)}
                    {obj}
                    {after}
                </span>
            );
        }
        return str;
    }

    return (
        <span>
            {before(mention.before, i)}
            {obj}
            {After}
        </span>
    );
*/

}

