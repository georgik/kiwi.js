/// <reference path="../Manager.ts" />

/**
 *	Kiwi - Tween - Easing - Quartic
 *
 *	@desc 		Based heavily on tween.js by sole (https://github.com/sole/tween.js)
 *
 *	@version 	1.0 - 11th January 2013
 *
 *	@author 	Richard Davey, TypeScript conversion and Kiwi integration. See Kiwi.Tweens for the full tween.js author list
 *
 *	@url 		http://www.kiwijs.org
 *
 *	@todo       
 */

module Kiwi.Animation.Tweens.Easing {

    export class Quartic {

        public objType() {
            return "Quartic";
        }

        /** 
        * 
        * @method In
        * @param {Any} k
        * @static
        **/
        public static In(k) {

            return k * k * k * k;

        }

        /** 
        * 
        * @method Out
        * @param {Any} k
        * @static
        **/
        public static Out(k) {

            return 1 - (--k * k * k * k);

        }

        /** 
        * 
        * @method InOut
        * @param {Any} k
        * @static
        **/
        public static InOut(k) {

            if ((k *= 2) < 1) return 0.5 * k * k * k * k;
            return -0.5 * ((k -= 2) * k * k * k - 2);

        }

    }

}
