/** 
* Interface for an Asynchronous Command.
*/

module puremvc {
    "use strict";

    export interface IAsyncCommand extends puremvc.ICommand {
		/**
		* Registers the callback for a parent <code>AsyncMacroCommand</code>.  
		* 
		* @param value	The <code>AsyncMacroCommand</code> method to call on completion
		*/
        setOnComplete(value: () => void): void;
    }
}
